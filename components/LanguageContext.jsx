"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../lib/translations";

const LanguageContext = createContext();
const STORAGE_KEY = "lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Al entrar: idioma elegido antes, o el del navegador (es-* → español)
  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
    const detected = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
    setLang(saved === "es" || saved === "en" ? saved : detected);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () =>
    setLang((l) => {
      const next = l === "en" ? "es" : "en";
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
      return next;
    });

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
