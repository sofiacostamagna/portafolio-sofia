/** @type {import('next').NextConfig} */
const nextConfig = {
  // NEXT_DIST_DIR permite compilar en otra carpeta (ej. auditorías) sin tocar la de `npm run dev`
  distDir: process.env.NEXT_DIST_DIR || ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
