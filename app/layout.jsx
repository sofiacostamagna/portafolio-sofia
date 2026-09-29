import { JetBrains_Mono, Figtree, Fraunces } from "next/font/google";
import "./globals.css";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";
import { LanguageProvider } from "../components/LanguageContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Textos
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Títulos — serif variable; SOFT redondea las terminaciones
const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
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
      <body suppressHydrationWarning className={`${jetbrainsMono.variable} ${figtree.variable} ${fraunces.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
