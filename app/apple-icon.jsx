import { iconImage } from "../lib/iconImage";

// Ícono al guardar el sitio en la pantalla de inicio del iPhone
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return iconImage(180);
}
