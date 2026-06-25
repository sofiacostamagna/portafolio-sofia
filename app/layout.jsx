import { JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Sofía Costamagna | Frontend Developer & UX/UI Designer",
  description:
    "Portfolio of Sofía Costamagna — Frontend Developer and UX/UI Designer based in Argentina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${jetbrainsMono.variable} ${inter.variable} ${playfair.variable} antialiased`}>
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
