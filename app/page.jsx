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

export default function Home() {
  const { t } = useLang();
  const collageRef = useRef(null);
  const inView     = useInView(collageRef, { once: true, margin: "-80px" });

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
          ABOUT — collage animado
      ═══════════════════════════ */}
      <section className="py-20 xl:py-28 overflow-hidden" ref={collageRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-center">

            {/* Left: texto */}
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="label block mb-6">{t.about.label}</motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-serif mb-7"
                style={{ fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: "1.1" }}
              >
                {t.about.heading1}<br />
                <em className="text-accent italic">{t.about.heading2}</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-font-primary text-[15px] xl:text-[16px] leading-relaxed mb-5">
                {t.about.p1}
              </motion.p>
              <motion.p variants={fadeUp} className="text-font-primary text-[15px] xl:text-[16px] leading-relaxed mb-9">
                {t.about.p2}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/contact">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors">
                    {t.about.cta}
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: fotos scattered */}
            <div className="relative h-[420px] xl:h-[500px]">
              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={photoCard(-5, 0.1)}
                className="absolute top-0 left-[0%] w-[170px] xl:w-[195px] overflow-hidden rounded-2xl shadow-lg"
                style={{ aspectRatio: "3/4" }}
              >
                <Image src="/photo1.png" fill className="object-cover object-top" alt="Sofía" />
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={photoCard(3, 0.22)}
                className="absolute top-[6%] left-[30%] w-[180px] xl:w-[210px] overflow-hidden rounded-2xl shadow-xl z-10"
                style={{ aspectRatio: "3/4" }}
              >
                <Image src="/photo1.png" fill className="object-cover object-top" alt="Sofía" />
              </motion.div>

              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={photoCard(-2, 0.34)}
                className="absolute top-[16%] left-[57%] w-[165px] xl:w-[190px] overflow-hidden rounded-2xl shadow-lg"
                style={{ aspectRatio: "3/4" }}
              >
                <Image src="/photo1.png" fill className="object-cover object-top" alt="Sofía" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
