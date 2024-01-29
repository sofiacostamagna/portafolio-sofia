import Head from "next/head";
import { Cover } from "@/components/Cover";
import { Transition } from "@/components/Transition/Transition";

/**
 * Home Component.
 * This component represents the home page of the portfolio.
 * It includes a dynamic title and description for SEO,
 * as well as the main content consisting of a transition animation and a cover component.
 */

/**
 * Home function.
 * @returns {JSX.Element} The JSX element representing the Home component.// esta línea de comentario está indicando que la función Home devuelve un elemento JSX que representa el componente de inicio (Home).
 */
export default function Home() {
  return (
    <>
      {/* Head section */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta lang="es" />
      </Head>

      {/* Main content of the Home page */}
      <main className="bg-[#393A47]">
        {/* Transition animation component */}
        <Transition />

        {/* Cover component */}
        <Cover />
      </main>
    </>
  );
}
