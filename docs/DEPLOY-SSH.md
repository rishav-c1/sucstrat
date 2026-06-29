# Deploying to the production server over SSH

This publishes the static site **directly onto the server that `sucstrat.com`
already points at** (`76.13.17.64`, the Hostinger box you have SSH access to).
Because the domain already resolves there, the site goes live **without any DNS
change and without the agency** — the static files simply replace the WordPress
site in the web root.

> **Trade-off:** the site then lives on the agency's Hostinger hosting account
> (you control the *files* via SSH, but not the *account*). This is a great way
> to go live now; longer term, owning the domain/hosting (GitHub Pages + your own
> DNS, or your own host) removes the agency dependency entirely.

## One-time setup

1. **Use an SSH key, not the password.** The shared password was exposed in chat
   — treat it as compromised. Generate and install a key:
   ```bash
   ssh-keygen -t ed25519 -C "sucstrat-deploy"
   ssh-copy-id -p 22 sucsrart-dev@76.13.17.64    # or paste the .pub into hPanel → SSH keys
   ```
   Then rotate the old password. After this, `rsync`/`ssh` authenticate with the key.

2. **Find the real document root.** It's usually `~/public_html`, but confirm:
   ```bash
   ssh -p 22 sucsrart-dev@76.13.17.64 'ls -la ~ && find ~ -maxdepth 3 -name wp-config.php'
   ```
   The directory that contains `wp-config.php` / `index.php` is the web root. If it
   isn't `public_html`, pass it via `DEPLOY_PATH=...` when deploying.

## Before the first deploy — BACK UP WordPress (rollback insurance)

```bash
# Files
ssh -p 22 sucsrart-dev@76.13.17.64 'cd ~/public_html && tar czf /tmp/wp-files.tgz .'
scp -P 22 sucsrart-dev@76.13.17.64:/tmp/wp-files.tgz .
# Database (wp-cli if present; else mysqldump with bare -p so no secret is echoed)
ssh -p 22 sucsrart-dev@76.13.17.64 'cd ~/public_html && wp db export ~/wp-db.sql --add-drop-table'
scp -P 22 sucsrart-dev@76.13.17.64:~/wp-db.sql .
tar tzf wp-files.tgz | head   # sanity check both are non-empty
```
Keep these somewhere safe. **Do not delete the WordPress install** — it's your rollback.

## Deploy

```bash
./scripts/deploy-ssh.sh            # DRY RUN — review the file list, nothing uploaded
./scripts/deploy-ssh.sh --apply    # publish
```
The script runs `pnpm build:server` (static export with an **empty basePath**, so
assets resolve at `/…` not `/sucstrat/…`), copies `public/.htaccess` into `out/`,
then `rsync --delete`s `out/` into the web root (removing the old WordPress files).

**First deploy note:** `--delete` makes the web root match `out/` exactly, so the
WordPress files are removed and the static `index.html` + `.htaccess` take over.
That's intended — just be sure the backup above is done first. `.well-known/`
(TLS/ACME) and `cgi-bin/` are preserved.

## Verify

- `https://sucstrat.com/` serves the new site (not WordPress), with CSS/JS/images
  and the logo loading from `/…`.
- Click through all five routes (`/know-us`, `/what-we-do`, `/careers`,
  `/knowledge`, `/get-in-touch`); confirm clean URLs and the custom 404.
- `https://sucstrat.com/pitch-us` → 301 to `/get-in-touch/`.
- HTTPS is green (the server already has the cert from the WordPress setup).

## Rollback

Restore the web root from the backup:
```bash
scp -P 22 wp-files.tgz sucsrart-dev@76.13.17.64:/tmp/
ssh -p 22 sucsrart-dev@76.13.17.64 'cd ~/public_html && rm -rf ./* ./.htaccess && tar xzf /tmp/wp-files.tgz'
# If the DB was touched: wp db import ~/wp-db.sql  (or mysql < wp-db.sql)
```

## Notes

- **HTTPS** is already handled by the server (existing cert) — no Let's Encrypt
  wait like the GitHub Pages route.
- The GitHub Pages workflow (`.github/workflows/deploy.yml`) is unaffected and
  still publishes the staging copy at `rishav-c1.github.io/sucstrat/`.
- To automate this on every push, the same `rsync` can run from a GitHub Action
  using an SSH deploy key stored as a repo secret (ask if you want that wired up).
