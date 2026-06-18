"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../../components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};

const PHOTOS = [
  { src: "/carrera.jpeg", label: "Runner",   cx: 95,  cy: 75,  w: 106, rotate: -6 },
  { src: "/hockey.jpeg",  label: "Hockey",   cx: 425, cy: 75,  w: 100, rotate:  5 },
  { src: "/Paris.jpeg",   label: "Paris",    cx: 50,  cy: 250, w: 102, rotate: -4 },
  { src: "/norte.jpeg",   label: "Salta",    cx: 470, cy: 250, w: 100, rotate:  4 },
  { src: "/roma.jpeg",    label: "Roma",     cx: 95,  cy: 445, w: 104, rotate:  7 },
  { src: "/foto-2.jpeg",  label: "Aventura", cx: 425, cy: 445, w: 102, rotate: -6 },
];

const PATHS = [
  "M 260,260 Q 180,170 95,75",
  "M 260,260 Q 340,170 425,75",
  "M 260,260 Q 160,255 50,250",
  "M 260,260 Q 360,255 470,250",
  "M 260,260 Q 175,355 95,445",
  "M 260,260 Q 345,355 425,445",
];

export default function About() {
  const { t } = useLang();
  const treeRef = useRef(null);
  const inView = useInView(treeRef, { once: true, margin: "-80px" });

  return (
    <main className="pt-24 min-h-screen" style={{ backgroundColor: "#fafafa" }}>

      {/* ── Hero intro ── */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] py-20 xl:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className="label block mb-5"
          >
            {t.about.label}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-serif font-bold text-font-secondary mb-6"
            style={{ fontSize: "clamp(42px, 5.5vw, 76px)", lineHeight: 1.05 }}
          >
            {t.about.heading1}{" "}
            <em className="text-accent italic">{t.about.heading2}</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[17px] xl:text-[18px] text-font-primary leading-relaxed mb-4"
          >
            {t.about.p1}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-[17px] xl:text-[18px] text-font-primary leading-relaxed"
          >
            {t.about.p2}
          </motion.p>
        </motion.div>
      </section>

      {/* ── Photo tree ── */}
      <section
        ref={treeRef}
        className="relative overflow-hidden py-16 xl:py-24"
        style={{ backgroundColor: "#f3f2fd" }}
      >
        <div className="flex justify-center">
          <div className="relative flex-shrink-0" style={{ width: 520, height: 520 }}>

            {/* Curved branches */}
            <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {PATHS.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="#7f77dd"
                  strokeWidth="1.2"
                  strokeDasharray="5 5"
                  opacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.09, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Center circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25, type: "spring", stiffness: 200 }}
              className="absolute flex items-center justify-center"
              style={{
                width: 116, height: 116,
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center shadow-xl"
                style={{ background: "linear-gradient(135deg, #7f77dd 0%, #a78bfa 100%)" }}
              >
                <span className="font-serif font-bold text-white" style={{ fontSize: 22 }}>Sofía</span>
              </div>
            </motion.div>

            {/* Photos */}
            {PHOTOS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.65 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.55 + i * 0.09, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
                className="absolute cursor-pointer"
                style={{
                  width: p.w,
                  top: p.cy, left: p.cx,
                  transform: `translate(-50%, -50%) rotate(${p.rotate}deg)`,
                  zIndex: 10,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: "3/4" }}>
                  <Image src={p.src} fill sizes="110px" alt={p.label} className="object-cover object-center" />
                </div>
                <span className="block text-center font-mono text-[8.5px] uppercase tracking-widest text-font-primary mt-1.5 opacity-50">
                  {p.label}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] py-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/contact">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors">
              {t.about.cta}
            </span>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
