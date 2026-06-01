import { ImageResponse } from "next/og";

export const alt = "SucStrat — Strategy to Scale, execution built in";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Shared Open Graph image (1200×630). Inline styles are required by the next/og
// renderer (this is not the site DOM).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background: "#264259",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 10,
            color: "#a9c0d8",
            textTransform: "uppercase",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          SucStrat
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 700,
            marginTop: 28,
            lineHeight: 1.08,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Strategy to Scale,</span>
          <span>execution built in.</span>
        </div>
        <div style={{ fontSize: 28, color: "#cdd9e6", marginTop: 30 }}>
          India&apos;s only execution-first consulting firm
        </div>
      </div>
    ),
    { ...size },
  );
}
