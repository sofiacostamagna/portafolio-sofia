"use client";

import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const photoCard = (rotate, delay) => ({
  hidden: { opacity: 0, y: 40, rotate: 0 },
  show:   { opacity: 1, y: 0, rotate, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

/* ─────────────────────────────────────
   MacBook mockup — iframe live preview
   screenWidth: visible px width of the screen area
───────────────────────────────────── */
function MacBook({ screenHeight, siteUrl, label, tags, large, viewW: viewWProp }) {
  const viewW = viewWProp ?? (large ? 436 : 296);
  const renderW = 1200;
  const scale = viewW / renderW;
  const iframeH = 5000;
  const maxScroll = iframeH * scale - screenHeight;
  const [scrollY, setScrollY] = useState(0);
  const screenRef = useRef(null);
  const touchY = useRef(0);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setScrollY(prev => Math.max(0, Math.min(maxScroll, prev + e.deltaY)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [maxScroll]);

  return (
    <div>
      {/* Lid */}
      <div style={{ background: "linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%)", borderRadius: "14px 14px 4px 4px", padding: "7px 7px 0", border: "1px solid #bbb", boxShadow: "0 2px 0 #b0b0b0, 0 20px 60px rgba(0,0,0,0.18)" }}>
        {/* Bezel */}
        <div style={{ background: "#0d0d0d", borderRadius: "10px 10px 2px 2px", padding: "5px 5px 0" }}>
          {/* Camera */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2c2c2c" }} />
          </div>
          {/* Browser bar */}
          <div style={{ background: "#f0f0f0", borderRadius: "4px 4px 0 0", padding: "5px 8px", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
            <div style={{ flex: 1, background: "#e0e0e0", borderRadius: 4, padding: "2px 8px", fontFamily: "monospace", fontSize: 9, color: "#888", marginLeft: 6, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
              {siteUrl?.replace("https://", "").replace("http://", "")}
            </div>
          </div>
          {/* Screen — scale miniaturiza, wheel event mueve el iframe */}
          <div
            ref={screenRef}
            style={{ height: screenHeight, overflow: "hidden", position: "relative", background: "#f5f5f5", cursor: "ns-resize" }}
            onTouchStart={(e) => { touchY.current = e.touches[0].clientY; }}
            onTouchMove={(e) => {
              const dy = touchY.current - e.touches[0].clientY;
              touchY.current = e.touches[0].clientY;
              setScrollY(prev => Math.max(0, Math.min(maxScroll, prev + dy)));
            }}
          >
            <iframe
              src={siteUrl}
              title={label}
              style={{
                position: "absolute",
                top: -scrollY,
                left: 0,
                width: renderW,
                height: iframeH,
                border: "none",
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
      {/* Hinge */}
      <div style={{ height: 2, background: "#b0b0b0", margin: "0 2px" }} />
      {/* Base */}
      <div style={{ background: "linear-gradient(180deg, #d8d8d8 0%, #c8c8c8 100%)", borderRadius: "0 0 10px 10px", height: 22, border: "1px solid #bbb", borderTop: "none", position: "relative", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 3, background: "#b8b8b8", borderRadius: "4px 4px 0 0" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 11, background: "#c0c0c0", borderRadius: 4, border: "1px solid #b0b0b0" }} />
      </div>
      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="font-serif font-bold text-font-secondary group-hover:text-accent transition-colors mb-1.5" style={{ fontSize: large ? 18 : 15 }}>{label}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[9px] uppercase tracking-widest text-font-primary opacity-50">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   iPhone mockup — iframe live preview
───────────────────────────────────── */
function Phone({ siteUrl, label, tags }) {
  const viewW = 200; // 216px outer - 8px padding x2
  const renderW = 375;
  const scale = viewW / renderW;
  const screenH = 290;
  const iframeH = 5000;
  const maxScroll = iframeH * scale - screenH;
  const [scrollY, setScrollY] = useState(0);
  const screenRef = useRef(null);
  const touchY = useRef(0);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setScrollY(prev => Math.max(0, Math.min(maxScroll, prev + e.deltaY)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [maxScroll]);

  return (
    <div>
      <div style={{ background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)", borderRadius: 32, padding: "10px 8px", border: "1px solid #3a3a3a", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0 20px 50px rgba(0,0,0,0.35)" }}>
        {/* Dynamic island */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ width: 56, height: 16, background: "#000", borderRadius: 10 }} />
        </div>
        {/* Screen — scale + wheel scroll */}
        <div
          ref={screenRef}
          style={{ borderRadius: 22, overflow: "hidden", height: screenH, position: "relative", background: "#f5f5f5", cursor: "ns-resize" }}
          onTouchStart={(e) => { touchY.current = e.touches[0].clientY; }}
          onTouchMove={(e) => {
            const dy = touchY.current - e.touches[0].clientY;
            touchY.current = e.touches[0].clientY;
            setScrollY(prev => Math.max(0, Math.min(maxScroll, prev + dy)));
          }}
        >
          <iframe
            src={siteUrl}
            title={label}
            style={{
              position: "absolute",
              top: -scrollY,
              left: 0,
              width: renderW,
              height: iframeH,
              border: "none",
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
          />
        </div>
        {/* Home indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <div style={{ width: 48, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 2 }} />
        </div>
      </div>
      {/* Caption */}
      <div className="mt-4 text-center">
        <p className="font-serif font-bold text-font-secondary group-hover:text-accent transition-colors mb-1.5" style={{ fontSize: 14 }}>{label}</p>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {tags.map((tag) => (
            <span key={tag} className="font-mono text-[8px] uppercase tracking-widest text-font-primary opacity-50">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { t, lang } = useLang();
  const worksRef = useRef(null);
  const worksInView = useInView(worksRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ═══════════════════════════
          HERO
      ═══════════════════════════ */}
      <section className="flex items-center pt-28 pb-24 xl:pt-36 xl:pb-32">
        <div className="w-full px-8 xl:px-[10vw] 2xl:px-[12vw]">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">

            {/* Left: text — ~65% */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 xl:basis-[65%]"
            >
              <motion.h1
                variants={fadeUp}
                className="font-serif font-bold text-font-secondary"
                style={{ fontSize: "clamp(42px, 5.8vw, 86px)", lineHeight: 1.05 }}
              >
                {t.hero.greeting} <span className="text-accent">{t.hero.name}</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[17px] xl:text-[19px] text-font-primary leading-relaxed"
              >
                {t.hero.bio}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <button className="bg-accent text-white font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-sm hover:bg-accent-hover transition-all duration-300">
                    {t.hero.cta}
                  </button>
                </Link>
                <a href={lang === "en" ? "/Sofia Costamagna-eng.pdf" : "/Sofia Costamagna-esp.pdf"} download>
                  <button className="border border-divider text-font-primary font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-sm hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2">
                    {t.hero.cv} <FiDownload size={11} />
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right: arch photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center xl:justify-end xl:basis-[35%] flex-shrink-0"
            >
              {/* Card + photo overflow — float loop */}
              <motion.div
                className="relative flex-shrink-0"
                style={{ width: "clamp(280px, 30vw, 420px)", paddingTop: "72px" }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
              >
                {/* Card background - full width, bottom portion */}
                <div
                  style={{
                    backgroundColor: "#eeedfe",
                    borderRadius: "48px",
                    height: "clamp(280px, 30vw, 400px)",
                  }}
                />

                {/* Photo — overflows above the card */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "72%",
                    height: "calc(100% - 24px)",
                    borderRadius: "36px",
                  }}
                >
                  <Image
                    src="/photo1.png"
                    fill
                    priority
                    quality={100}
                    alt="Sofía Costamagna"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          SELECTED WORK — browser mockups
      ═══════════════════════════ */}
      <section
        ref={worksRef}
        className="py-20 xl:py-28"
      >
        {/* Section header */}
        <div className="px-8 xl:px-[10vw] 2xl:px-[12vw]">
          <motion.div
            initial="hidden"
            animate={worksInView ? "show" : "hidden"}
            variants={stagger}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <motion.span variants={fadeUp} className="label block mb-3">
                {t.work.label}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-serif font-bold text-font-secondary"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
              >
                {t.work.heading}
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="hidden lg:block">
              <Link href="/work">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors">
                  {t.work.viewAll} →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── MOBILE/TABLET: carrusel 1 item a la vez ── */}
        <div
          className="lg:hidden flex overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {/* WiPlex — laptop slide */}
          <div
            className="snap-start flex-shrink-0 flex justify-center pb-6 pt-2"
            style={{ width: "100vw" }}
          >
            <div className="group cursor-pointer" style={{ width: 280 }}>
              <a href={t.work.projects[0].url} target="_blank" rel="noopener noreferrer" className="block">
                <MacBook screenHeight={160} siteUrl={t.work.projects[0].url} label={t.work.projects[0].title} tags={t.work.projects[0].tags} viewW={250} />
              </a>
            </div>
          </div>

          {/* Buildeezy — laptop slide */}
          <div
            className="snap-start flex-shrink-0 flex justify-center pb-6 pt-2"
            style={{ width: "100vw" }}
          >
            <div className="group cursor-pointer" style={{ width: 280 }}>
              <a href={t.work.projects[1].url} target="_blank" rel="noopener noreferrer" className="block">
                <MacBook screenHeight={160} siteUrl={t.work.projects[1].url} label={t.work.projects[1].title} tags={t.work.projects[1].tags} viewW={250} />
              </a>
            </div>
          </div>

          {/* UpToPlay — phone slide */}
          <div
            className="snap-start flex-shrink-0 flex justify-center items-end pb-6 pt-2"
            style={{ width: "100vw" }}
          >
            <div className="group cursor-pointer" style={{ width: 200 }}>
              <a href={t.work.projects[2].url} target="_blank" rel="noopener noreferrer" className="block">
                <Phone siteUrl={t.work.projects[2].url} label={t.work.projects[2].title} tags={t.work.projects[2].tags} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Dots navegación carrusel (solo mobile) ── */}
        <div className="lg:hidden flex justify-center gap-2 pb-6">
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === 0 ? "#7f77dd" : "#d0d0d0", display: "inline-block" }} />
          ))}
        </div>

        {/* ── DESKTOP (1024px+): dispositivos escalonados ── */}
        <div className="hidden lg:flex items-end justify-center gap-6 xl:gap-10 px-8 xl:px-[6vw]">

          {/* LEFT LAPTOP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={worksInView ? { opacity: 1, y: 24 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: 16, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: 320 }}
          >
            <motion.div
              animate={worksInView ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            >
              <a href={t.work.projects[0].url} target="_blank" rel="noopener noreferrer" className="block">
                <MacBook screenHeight={190} siteUrl={t.work.projects[0].url} label={t.work.projects[0].title} tags={t.work.projects[0].tags} />
              </a>
            </motion.div>
          </motion.div>

          {/* CENTER LAPTOP */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={worksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: 460 }}
          >
            <motion.div
              animate={worksInView ? { y: [0, -12, 0] } : {}}
              transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
            >
              <a href={t.work.projects[1].url} target="_blank" rel="noopener noreferrer" className="block">
                <MacBook screenHeight={270} siteUrl={t.work.projects[1].url} label={t.work.projects[1].title} tags={t.work.projects[1].tags} large />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={worksInView ? { opacity: 1, y: 24 } : {}}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: 16, transition: { duration: 0.25 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: 216 }}
          >
            <motion.div
              animate={worksInView ? { y: [0, -7, 0] } : {}}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            >
              <a href={t.work.projects[2].url} target="_blank" rel="noopener noreferrer" className="block">
                <Phone siteUrl={t.work.projects[2].url} label={t.work.projects[2].title} tags={t.work.projects[2].tags} />
              </a>
            </motion.div>
          </motion.div>

        </div>

        {/* Mobile/tablet: ver todos */}
        <div className="lg:hidden mt-8 text-center">
          <Link href="/work">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5">
              {t.work.viewAll} →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
