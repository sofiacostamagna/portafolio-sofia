"use client";

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useLang } from "./LanguageContext";

const Header = () => {
  const { lang, toggle, t } = useLang();

  return (
    <header className="py-5 xl:py-6 border-b border-divider">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="font-mono text-2xl font-bold text-font-secondary tracking-tight">
            SC<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop nav + toggle + CTA */}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-font-primary hover:text-accent transition-colors duration-300"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          <Link href="/contact">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent border border-accent px-5 py-2.5 hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer">
              {t.nav.contact}
            </span>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
