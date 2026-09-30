import { JetBrains_Mono, Figtree, Fraunces } from "next/font/google";
import "./globals.css";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { LanguageProvider } from "../components/LanguageContext";

// Etiquetas en mayúsculas — fuente variable (un solo archivo, ~40 KB). Se precarga
// porque está en casi todas las pantallas y cambiarla tarde movía el layout (CLS).
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

// Textos
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

// Títulos — serif variable; SOFT redondea las terminaciones, opsz da el contraste fino en tamaños grandes.
// La itálica va en un archivo aparte sin preload: solo se usa en palabras destacadas (<em>),
// así la carga inicial baja ~120 KB sin cambiar el diseño.
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal"],
  axes: ["SOFT", "opsz"],
});

const frauncesItalic = Fraunces({
  variable: "--font-heading-italic",
  subsets: ["latin"],
  style: ["italic"],
  axes: ["SOFT", "opsz"],
  preload: false,
  display: "optional",
});

const description =
  "Frontend Developer and UX/UI Designer based in Argentina. React, Next.js, WordPress and Figma to code.";

// URL pública para los links absolutos de la vista previa (Open Graph).
// En Vercel se completa sola; en otro hosting, definir NEXT_PUBLIC_SITE_URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sofía Costamagna | Frontend Developer & UX/UI Designer",
    template: "%s | Sofía Costamagna",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Sofía Costamagna",
    title: "Sofía Costamagna | Frontend Developer & UX/UI Designer",
    description,
    locale: "en_US",
    alternateLocale: ["es_AR"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${jetbrainsMono.variable} ${figtree.variable} ${fraunces.variable} ${frauncesItalic.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
