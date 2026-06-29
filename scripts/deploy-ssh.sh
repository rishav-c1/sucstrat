#!/usr/bin/env bash
#
# Deploy the static export to the production server over SSH (rsync).
# The domain (sucstrat.com) already resolves to this server, so this publishes
# the site live — no DNS change needed.
#
#   ⚠️  THIS REPLACES THE WEB ROOT. Back up the current site first
#       (see docs/DEPLOY-SSH.md — files + WordPress DB).
#   ⚠️  Confirm DEPLOY_PATH is the real document root before using --apply.
#
# Usage:
#   ./scripts/deploy-ssh.sh            # DRY RUN — shows what would change, uploads nothing
#   ./scripts/deploy-ssh.sh --apply    # actually deploy
#
# Override defaults via env:
#   SSH_USER=… SSH_HOST=… SSH_PORT=… DEPLOY_PATH=… ./scripts/deploy-ssh.sh --apply
#
# Auth: uses your SSH config / key. Set up a key (ssh-copy-id) instead of the
# password — see docs/DEPLOY-SSH.md. The password is NOT stored here.

set -euo pipefail

SSH_USER="${SSH_USER:-sucsrart-dev}"
SSH_HOST="${SSH_HOST:-76.13.17.64}"
SSH_PORT="${SSH_PORT:-22}"
# Relative to the SSH user's home dir. Confirm with: ssh -p 22 user@host 'ls -la ~'
# (On Hostinger it is often public_html or domains/sucstrat.com/public_html.)
DEPLOY_PATH="${DEPLOY_PATH:-public_html}"

cd "$(dirname "$0")/.."

echo "▶ Building static export at the domain root (empty basePath)…"
pnpm build:server

# Ensure the server config ships even if Next skips dotfiles when copying public/.
cp public/.htaccess out/.htaccess

APPLY=""
[ "${1:-}" = "--apply" ] && APPLY="yes"

# --delete makes the web root match ./out exactly (removes the old WordPress files).
# Preserve ACME/cert and cgi dirs that may live in the web root.
RSYNC_OPTS=(-avz --delete --exclude='.well-known/' --exclude='cgi-bin/' -e "ssh -p ${SSH_PORT}")
[ -z "$APPLY" ] && { RSYNC_OPTS+=(--dry-run); echo "▶ DRY RUN — nothing uploaded. Re-run with --apply to deploy."; }

echo "▶ Syncing ./out/  →  ${SSH_USER}@${SSH_HOST}:${DEPLOY_PATH}/"
rsync "${RSYNC_OPTS[@]}" out/ "${SSH_USER}@${SSH_HOST}:${DEPLOY_PATH}/"

if [ -n "$APPLY" ]; then
  echo "✅ Deployed. Verify: https://sucstrat.com/"
else
  echo "ℹ️  Dry run complete. Review the file list above, then run with --apply."
fi
