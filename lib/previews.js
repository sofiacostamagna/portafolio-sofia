// Capturas de los proyectos para los mockups (generadas con `npm run screenshots`).
// kinds: "desktop" → laptop, "mobile" → celular
export const SITES = [
  { url: "https://www.wiplex.net/",          kinds: ["desktop", "mobile"] },
  { url: "https://www.offidocs.com/",        kinds: ["desktop"] },
  { url: "https://www.uptoplay.net/",        kinds: ["desktop", "mobile"] },
  { url: "https://www.anywhere.com/",        kinds: ["desktop"] },
  { url: "https://www.ambassadoria.com/",    kinds: ["desktop"] },
  { url: "https://www.buildeezy.com/",       kinds: ["desktop"] },
  { url: "https://drjavierruizromero.com/",  kinds: ["desktop", "mobile"] },
  { url: "https://arumaclinic.com/",         kinds: ["desktop", "mobile"] },
];

export const previewSlug = (url) => new URL(url).hostname.replace(/^www\./, "");

export const previewSrc = (url, kind = "desktop") =>
  `/previews/${previewSlug(url)}${kind === "mobile" ? "-mobile" : ""}.webp`;

// Anchos extra que genera el script para las capturas de escritorio (srcset responsive)
export const PREVIEW_WIDTHS = [480, 720];

export const previewSrcSet = (url, kind = "desktop") => {
  if (kind === "mobile") return undefined;
  const base = `/previews/${previewSlug(url)}`;
  return [...PREVIEW_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`), `${base}.webp 960w`].join(", ");
};

// "Poster": solo la primera pantalla del sitio, liviano, para mostrar al instante
export const previewPoster = (url, kind = "desktop") =>
  `/previews/${previewSlug(url)}${kind === "mobile" ? "-mobile" : ""}-top.webp`;
