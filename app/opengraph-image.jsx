import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Imagen de vista previa al compartir el link (LinkedIn, WhatsApp, X, Slack…)
export const alt = "Sofía Costamagna — Frontend Developer & UX/UI Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/photo1.png"));
  const font = (file) => readFile(join(process.cwd(), "assets/fonts", file));
  const [fraunces, figtree, figtreeMedium] = await Promise.all([
    font("Fraunces-Bold.ttf"),
    font("Figtree-Regular.ttf"),
    font("Figtree-Medium.ttf"),
  ]);
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "0 90px",
          fontFamily: "Figtree",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: 6, color: "#7f77dd", textTransform: "uppercase", marginBottom: 24 }}>
            Portfolio
          </div>
          <div style={{ fontFamily: "Fraunces", fontSize: 84, fontWeight: 700, color: "#111111", lineHeight: 1.02, letterSpacing: -1 }}>
            Sofía Costamagna
          </div>
          <div style={{ fontSize: 34, color: "#666666", marginTop: 24, lineHeight: 1.3 }}>
            Frontend Developer & UX/UI Designer
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            {["React", "Next.js", "WordPress", "Figma"].map((tag) => (
              <div
                key={tag}
                style={{ fontSize: 22, fontWeight: 500, color: "#7f77dd", border: "2px solid #c5c2f5", borderRadius: 999, padding: "8px 22px" }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 360,
            height: 440,
            borderRadius: 48,
            background: "#eeedfe",
            overflow: "hidden",
          }}
        >
          <img src={photoSrc} width={360} height={440} style={{ objectFit: "cover", objectPosition: "top", borderRadius: 48 }} alt="" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 700, style: "normal" },
        { name: "Figtree", data: figtree, weight: 400, style: "normal" },
        { name: "Figtree", data: figtreeMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
