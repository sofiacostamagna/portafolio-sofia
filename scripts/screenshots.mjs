// Genera capturas de página completa de cada proyecto para los mockups scrolleables.
// Uso: npm run screenshots            → todos los sitios
//      npm run screenshots wiplex     → solo los que coincidan con el texto
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { SITES, previewSlug, PREVIEW_WIDTHS } from "../lib/previews.js";

const OUT_DIR = new URL("../public/previews/", import.meta.url);
const MAX_HEIGHT = 6000; // px CSS — alcanza para mostrar bien la página sin archivos gigantes

const VIEWPORTS = {
  desktop: { width: 1200, height: 800, deviceScaleFactor: 1, outWidth: 960 },
  mobile:  { width: 375,  height: 812, deviceScaleFactor: 2, outWidth: 500, isMobile: true, hasTouch: true },
};

async function capture(browser, url, kind) {
  const vp = VIEWPORTS[kind];
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: vp.deviceScaleFactor,
    isMobile: vp.isMobile ?? false,
    hasTouch: vp.hasTouch ?? false,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});

  // Cerrar banners de cookies (primer botón visible que coincida)
  const acceptName = /^\s*(aceptar( todo| todas| cookies)?|accept( all| cookies)?|agree|got it|ok|allow all)\s*$/i;
  const candidates = [
    page.getByRole("button", { name: acceptName }),
    page.getByRole("link", { name: acceptName }),
    page.locator("button, a, [role=button], .cmplz-accept").filter({ hasText: acceptName }),
  ];
  // Algunos banners aparecen con demora: reintentar durante unos segundos
  for (let attempt = 0, done = false; attempt < 10 && !done; attempt++) {
    for (const c of candidates) {
      const el = c.first();
      if (await el.isVisible().catch(() => false)) {
        // click directo en el elemento: evita que otros botones flotantes (ej. WhatsApp) lo tapen
        await el.evaluate((node) => node.click()).catch(() => {});
        await page.waitForTimeout(800);
        done = true;
        break;
      }
    }
    if (!done) await page.waitForTimeout(500);
  }

  // Sitios con scroll interno (body de 100vh + contenedor con overflow): los desplegamos
  await page.addStyleTag({ content: "html, body { height: auto !important; overflow: visible !important; }" });
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("body *")) {
      const s = getComputedStyle(el);
      if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 200 && el.clientHeight >= window.innerHeight * 0.8) {
        el.style.setProperty("height", "auto", "important");
        el.style.setProperty("max-height", "none", "important");
        el.style.setProperty("overflow", "visible", "important");
      }
    }
  });

  // Scrollear hasta abajo para disparar imágenes lazy y animaciones on-scroll
  await page.evaluate(async (max) => {
    for (let y = 0; y < Math.min(document.body.scrollHeight, max); y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  }, MAX_HEIGHT);
  await page.waitForTimeout(1500);

  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const height = Math.min(fullHeight, MAX_HEIGHT);
  const png = await page.screenshot({ clip: { x: 0, y: 0, width: vp.width, height }, fullPage: true });
  await context.close();

  const file = new URL(`${previewSlug(url)}${kind === "mobile" ? "-mobile" : ""}.webp`, OUT_DIR);
  const info = await sharp(png).resize({ width: vp.outWidth }).webp({ quality: 72 }).toFile(file.pathname);
  // Poster: primera pantalla (16:10 escritorio, 9:16 celular) para la carga inicial
  const posterW = kind === "desktop" ? 720 : 500;
  const posterH = kind === "desktop" ? Math.round(posterW / 1.6) : Math.round(posterW * 16 / 9);
  await sharp(png).resize({ width: posterW }).extract({ left: 0, top: 0, width: posterW, height: posterH })
    .webp({ quality: 70 }).toFile(new URL(`${previewSlug(url)}${kind === "mobile" ? "-mobile" : ""}-top.webp`, OUT_DIR).pathname);

  // Versiones más livianas para pantallas chicas (srcset)
  if (kind === "desktop") {
    for (const w of PREVIEW_WIDTHS) {
      await sharp(png).resize({ width: w }).webp({ quality: 72 }).toFile(new URL(`${previewSlug(url)}-${w}.webp`, OUT_DIR).pathname);
    }
  }
  console.log(`✓ ${kind.padEnd(7)} ${url} → ${file.pathname.split("/public")[1]} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
}

const filter = process.argv[2];
const sites = SITES.filter((s) => !filter || s.url.includes(filter));

await mkdir(OUT_DIR, { recursive: true });
const browser = await chromium.launch();
for (const site of sites) {
  for (const kind of site.kinds) {
    try {
      await capture(browser, site.url, kind);
    } catch (err) {
      console.error(`✗ ${kind} ${site.url}: ${err.message}`);
    }
  }
}
await browser.close();
