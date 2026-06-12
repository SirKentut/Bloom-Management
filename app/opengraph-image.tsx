import { ImageResponse } from "next/og";

export const alt = "Bloom Management — Short-term rentals, beautifully run.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ede5d3",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#2d2a1f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              background: "#d97a85",
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
            Bloom Management
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 920,
            }}
          >
            Your short-term rental, beautifully run.
          </div>
          <div style={{ fontSize: 30, color: "#4a4538", maxWidth: 880 }}>
            Cleanings, listings, pricing, and the 2 a.m. stuff — handled.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#7a7050",
          }}
        >
          <span>Los Angeles</span>
          <span style={{ color: "#b8a878" }}>·</span>
          <span>San Francisco</span>
          <span style={{ color: "#b8a878" }}>·</span>
          <span>Detroit</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
