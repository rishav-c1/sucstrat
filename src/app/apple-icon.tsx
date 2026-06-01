import { ImageResponse } from "next/og";

// iOS home-screen / Safari touch icon (PNG). 180×180 is the current Apple spec.
// Mirrors the brand monogram in app/icon.svg. Inline styles are required by next/og.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#264259",
          color: "#ffffff",
          fontSize: 120,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        S
      </div>
    ),
    { ...size },
  );
}
