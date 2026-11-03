import { ImageResponse } from "next/og";

export const alt = "AltSwitch — SaaS and open-source alternatives";
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
          justifyContent: "center",
          background: "#fafafa",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#4f46e5",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 28,
              fontSize: 72,
              fontWeight: 700,
              color: "#18181b",
            }}
          >
            Alt
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              color: "#4f46e5",
            }}
          >
            Switch
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 36,
            color: "#52525b",
          }}
        >
          SaaS and open-source alternatives
        </div>
      </div>
    ),
    { ...size },
  );
}
