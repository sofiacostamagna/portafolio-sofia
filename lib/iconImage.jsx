import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Sello del favicon: "s" en Fraunces itálica, blanco sobre violeta
export async function iconImage(px) {
  const fraunces = await readFile(join(process.cwd(), "assets/fonts/Fraunces-SemiBoldItalic.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7f77dd",
          borderRadius: px * 0.22,
          color: "#ffffff",
          fontFamily: "Fraunces",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: px * 0.86,
          lineHeight: 1,
          paddingBottom: px * 0.12,
        }}
      >
        s
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [{ name: "Fraunces", data: fraunces, weight: 600, style: "italic" }],
    }
  );
}
