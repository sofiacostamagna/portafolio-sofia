// Capturas de los proyectos para los mockups (generadas con `npm run screenshots`).
// kinds: "desktop" → laptop, "mobile" → celular
export const SITES = [
  { url: "https://www.wiplex.net/",          kinds: ["desktop"] },
  { url: "https://www.offidocs.com/",        kinds: ["desktop"] },
  { url: "https://www.uptoplay.net/",        kinds: ["desktop", "mobile"] },
  { url: "https://www.anywhere.com/",        kinds: ["desktop"] },
  { url: "https://www.ambassadoria.com/",    kinds: ["desktop"] },
  { url: "https://www.buildeezy.com/",       kinds: ["desktop"] },
  { url: "https://drjavierruizromero.com/",  kinds: ["desktop"] },
  { url: "https://arumaclinic.com/",         kinds: ["desktop"] },
];

export const previewSlug = (url) => new URL(url).hostname.replace(/^www\./, "");

export const previewSrc = (url, kind = "desktop") =>
  `/previews/${previewSlug(url)}${kind === "mobile" ? "-mobile" : ""}.webp`;
