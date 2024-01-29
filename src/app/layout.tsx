import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Prosto_One } from "next/font/google";
import { Header } from "@/components/Header";

// Carga la fuente Prosto_One con ciertas configuraciones
const prosto = Prosto_One({ subsets: ["latin"], weight: "400" });

/**
 * RootLayout Component.
 * This component represents the root layout for the entire application.
 * It includes common elements such as the Navbar, Header, and global styles.
 * It also loads the Prosto_One font for the application.
 *
 *
 * @param {Object} props - The properties passed to the RootLayout component.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The JSX element representing the RootLayout component.
 */
export const metadata = {
  title: "Sofia Costamagna - Frontend Developer & UX/UI",
  description:
    "I'm Sofia Costamagna, a passionate Frontend Developer and UX/UI Designer.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={prosto.className}>
        {/* Navbar component for navigation */}
        <Navbar />

        {/* Header component for the main header section */}
        <Header />

        {/* Main content rendered within the layout */}
        {children}
      </body>
    </html>
  );
}
