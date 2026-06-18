"use client";

import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef } from "react";
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
   MacBook mockup — scrollable screen
───────────────────────────────────── */
function MacBook({ screenHeight, bg, url, image, label, tags, large }) {
  return (
    <div>
      {/* Lid */}
      <div
        style={{
          background: "linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%)",
          borderRadius: "14px 14px 4px 4px",
          padding: "7px 7px 0",
          border: "1px solid #bbb",
          boxShadow: "0 2px 0 #b0b0b0, 0 20px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* Screen bezel */}
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
            <div style={{ flex: 1, background: "#e0e0e0", borderRadius: 4, padding: "2px 8px", fontFamily: "monospace", fontSize: 9, color: "#888", marginLeft: 6 }}>
              {url}
            </div>
          </div>

          {/* Screen — scrollable */}
          <div
            style={{
              height: screenHeight,
              overflowY: "auto",
              overflowX: "hidden",
              background: "#fff",
              scrollbarWidth: "none",     /* Firefox */
              msOverflowStyle: "none",    /* IE */
            }}
          >
            {image ? (
              /* Real project screenshot — tall image, scroll to explore */
              <div style={{ position: "relative", width: "100%", minHeight: screenHeight * 2.5 }}>
                <Image src={image} fill style={{ objectFit: "cover", objectPosition: "top" }} alt={label} sizes="500px" />
              </div>
            ) : (
              /* Placeholder UI skeleton */
              <div style={{ background: bg, minHeight: screenHeight * 2, padding: "16px 14px" }}>
                <div style={{ width: "60%", height: 8, background: "rgba(127,119,221,0.3)", borderRadius: 4, marginBottom: 10 }} />
                <div style={{ width: "85%", height: 5, background: "rgba(0,0,0,0.08)", borderRadius: 4, marginBottom: 6 }} />
                <div style={{ width: "70%", height: 5, background: "rgba(0,0,0,0.08)", borderRadius: 4, marginBottom: 18 }} />
                <div style={{ width: "100%", height: 90, background: "rgba(255,255,255,0.55)", borderRadius: 8, marginBottom: 12 }} />
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <div style={{ flex: 1, height: 55, background: "rgba(255,255,255,0.45)", borderRadius: 6 }} />
                  <div style={{ flex: 1, height: 55, background: "rgba(255,255,255,0.45)", borderRadius: 6 }} />
                </div>
                <div style={{ width: "100%", height: 70, background: "rgba(255,255,255,0.4)", borderRadius: 8, marginBottom: 12 }} />
                <div style={{ width: "55%", height: 8, background: "rgba(127,119,221,0.2)", borderRadius: 4, marginBottom: 10 }} />
                <div style={{ width: "100%", height: 60, background: "rgba(255,255,255,0.4)", borderRadius: 6, marginBottom: 10 }} />
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ flex: 1, height: 45, background: "rgba(255,255,255,0.35)", borderRadius: 6 }} />
                  <div style={{ flex: 1, height: 45, background: "rgba(255,255,255,0.35)", borderRadius: 6 }} />
                  <div style={{ flex: 1, height: 45, background: "rgba(255,255,255,0.35)", borderRadius: 6 }} />
                </div>
              </div>
            )}
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
        <p className="font-serif font-bold text-font-secondary group-hover:text-accent transition-colors mb-1.5" style={{ fontSize: large ? 18 : 15 }}>
          {label}
        </p>
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
   iPhone mockup — scrollable screen
───────────────────────────────────── */
function Phone({ bg, image, label, tags }) {
  return (
    <div>
      {/* Body */}
      <div style={{ background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)", borderRadius: 32, padding: "10px 5px", border: "1px solid #3a3a3a", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07), 0 20px 50px rgba(0,0,0,0.35)" }}>
        {/* Dynamic island */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ width: 56, height: 16, background: "#000", borderRadius: 10 }} />
        </div>

        {/* Screen — scrollable */}
        <div style={{ borderRadius: 22, overflow: "hidden", height: 260 }}>
          <div style={{ height: "100%", overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {image ? (
              <div style={{ position: "relative", width: "100%", minHeight: 650 }}>
                <Image src={image} fill style={{ objectFit: "cover", objectPosition: "top" }} alt={label} sizes="150px" />
              </div>
            ) : (
              <div style={{ background: bg, minHeight: 650, padding: "12px 10px" }}>
                <div style={{ width: "70%", height: 6, background: "rgba(127,119,221,0.3)", borderRadius: 3, marginBottom: 8 }} />
                <div style={{ width: "90%", height: 4, background: "rgba(0,0,0,0.08)", borderRadius: 3, marginBottom: 5 }} />
                <div style={{ width: "75%", height: 4, background: "rgba(0,0,0,0.08)", borderRadius: 3, marginBottom: 14 }} />
                <div style={{ width: "100%", height: 110, background: "rgba(255,255,255,0.5)", borderRadius: 8, marginBottom: 10 }} />
                <div style={{ width: "100%", height: 52, background: "rgba(255,255,255,0.38)", borderRadius: 6, marginBottom: 8 }} />
                <div style={{ width: "100%", height: 52, background: "rgba(255,255,255,0.38)", borderRadius: 6, marginBottom: 8 }} />
                <div style={{ width: "100%", height: 52, background: "rgba(255,255,255,0.38)", borderRadius: 6, marginBottom: 8 }} />
                <div style={{ width: "100%", height: 80, background: "rgba(255,255,255,0.3)", borderRadius: 8 }} />
              </div>
            )}
          </div>
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
  const { t } = useLang();
  const worksRef = useRef(null);
  const worksInView = useInView(worksRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ═══════════════════════════
          HERO
      ═══════════════════════════ */}
      <section
        className="flex items-center pt-24"
        style={{ minHeight: "100vh" }}
      >
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
                <a href="/SofiaCostamagna.pdf" download>
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
              {/* Card + photo overflow */}
              <div
                className="relative flex-shrink-0"
                style={{
                  width: "clamp(280px, 30vw, 420px)",
                  paddingTop: "72px",
                }}
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
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          SELECTED WORK — browser mockups
      ═══════════════════════════ */}
      <section
        ref={worksRef}
        className="py-24 xl:py-32 overflow-hidden"
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
            <motion.div variants={fadeUp} className="hidden xl:block">
              <Link href="/work">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors">
                  {t.work.viewAll} →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Devices — laptop left, laptop center (hero), phone right */}
        <div className="flex items-end justify-center gap-4 xl:gap-8 px-4 xl:px-[4vw]">

          {/* ── LEFT LAPTOP (smaller, lower) ── */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={worksInView ? { opacity: 1, y: 50 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: 42, transition: { duration: 0.3 } }}
            className="group cursor-pointer hidden xl:block"
            style={{ width: 340 }}
          >
            <Link href="/work" className="block">
              <MacBook
                screenHeight={200}
                bg="linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
                url="sofiacostamagna.com/work"
                label={t.work.projects[0].title}
                tags={t.work.projects[0].tags}
              />
            </Link>
          </motion.div>

          {/* ── CENTER LAPTOP (biggest, highest) ── */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={worksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group cursor-pointer flex-shrink-0"
            style={{ width: 480 }}
          >
            <Link href="/work" className="block">
              <MacBook
                screenHeight={290}
                bg="linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)"
                url="sofiacostamagna.com/work"
                label={t.work.projects[1].title}
                tags={t.work.projects[1].tags}
                large
              />
            </Link>
          </motion.div>

          {/* ── RIGHT PHONE ── */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={worksInView ? { opacity: 1, y: 30 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: 22, transition: { duration: 0.3 } }}
            className="group cursor-pointer hidden xl:block"
            style={{ width: 140 }}
          >
            <Link href="/work" className="block">
              <Phone
                bg="linear-gradient(160deg, #fdf4ff 0%, #e9d5ff 100%)"
                label={t.work.projects[2].title}
                tags={t.work.projects[2].tags}
              />
            </Link>
          </motion.div>

        </div>

        {/* Mobile view all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={worksInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="xl:hidden mt-10 text-center"
        >
          <Link href="/work">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5">
              {t.work.viewAll} →
            </span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
