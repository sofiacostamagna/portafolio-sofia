"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useLang } from "./LanguageContext";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const navLinks = [
  { en: "Home",     es: "Inicio",     path: "/" },
  { en: "About",    es: "Sobre mí",   path: "/about" },
  { en: "Work",     es: "Proyectos",  path: "/work" },
  { en: "Services", es: "Servicios",  path: "/services" },
  { en: "Resume",   es: "Currículum", path: "/resume" },
];

const Header = () => {
  const { lang, toggle, t } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Cerrar al hacer click afuera
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Cerrar al cambiar de ruta
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        ref={ref}
        className="w-full max-w-4xl rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-white/60 overflow-hidden"
      >
        {/* Main bar */}
        <div className="flex items-center justify-between gap-4 px-5 py-3">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-mono text-lg font-bold text-font-secondary tracking-tight">
              SC<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.path === pathname;
              const label = lang === "en" ? link.en : link.es;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-mono text-[11px] uppercase tracking-[0.12em] px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-font-primary hover:text-font-secondary hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right: flag + contact */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggle}
              className="text-lg hover:scale-110 transition-transform duration-200"
              title={lang === "en" ? "Cambiar a español" : "Switch to English"}
            >
              {lang === "en" ? "🇦🇷" : "🇺🇸"}
            </button>
            <Link href="/contact">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white bg-accent px-5 py-2 rounded-lg hover:bg-accent-hover transition-all duration-300 cursor-pointer">
                {t.nav.contact}
              </span>
            </Link>
          </div>

          {/* Mobile right: flag + hamburger */}
          <div className="xl:hidden flex items-center gap-3">
            <button onClick={toggle} className="text-xl">
              {lang === "en" ? "🇦🇷" : "🇺🇸"}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="text-font-secondary p-1"
            >
              {open
                ? <IoCloseOutline size={26} />
                : <CiMenuFries size={22} />
              }
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 pb-4 gap-1 border-t border-divider pt-3">
            {navLinks.map((link) => {
              const isActive = link.path === pathname;
              const label = lang === "en" ? link.en : link.es;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-mono text-[11px] uppercase tracking-[0.12em] px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-font-primary hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-2">
              <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-white bg-accent px-4 py-3 rounded-lg text-center hover:bg-accent-hover transition-all duration-300">
                {t.nav.contact}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
