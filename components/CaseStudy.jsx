"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck } from "react-icons/fi";
import { useLang } from "./LanguageContext";
import { RevealTitle, Parallax } from "./motion";
import ScrollableScreenshot from "./ScrollableScreenshot";
import { caseStudies, getCaseStudy } from "../lib/caseStudies";
import { previewSrc } from "../lib/previews";

const EASE = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: EASE },
});

const PAD = "px-8 xl:px-[10vw] 2xl:px-[12vw]";

function BrowserFrame({ url, title }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-divider bg-white shadow-[0_30px_80px_-30px_rgba(17,17,17,0.35)]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#f3f3f5] border-b border-divider">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 max-w-sm rounded-md bg-white/80 px-3 py-1 font-mono text-[10px] text-font-primary truncate">
          {url.replace(/^https?:\/\//, "")}
        </span>
      </div>
      <ScrollableScreenshot src={previewSrc(url)} alt={title} height={520} />
    </div>
  );
}

function PhoneFrame({ url, title }) {
  return (
    <div
      className="rounded-[36px] p-2.5 bg-[#1a1a1a] border border-[#3a3a3a]"
      style={{ width: 250, boxShadow: "0 30px 70px -20px rgba(0,0,0,0.45)" }}
    >
      <div className="flex justify-center mb-2">
        <div className="w-16 h-4 bg-black rounded-full" />
      </div>
      <ScrollableScreenshot src={previewSrc(url, "mobile")} alt={`${title} — mobile`} height={440} radius={26} />
      <div className="flex justify-center mt-2.5">
        <div className="w-14 h-1 bg-white/25 rounded-full" />
      </div>
    </div>
  );
}

export default function CaseStudy({ slug }) {
  const { lang } = useLang();
  const en = lang === "en";
  const l = en ? "en" : "es";
  const study = getCaseStudy(slug);
  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="pt-24 pb-16 min-h-screen">

      {/* ── Header ── */}
      <section className={`${PAD} pt-12 xl:pt-20`}>
        <motion.div {...fadeUp(0)}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-font-primary hover:text-accent transition-colors"
          >
            <FiArrowLeft size={13} /> {en ? "All projects" : "Todos los proyectos"}
          </Link>
        </motion.div>

        <motion.span {...fadeUp(0.05)} className="label block mt-10 mb-4">
          {en ? "Case study" : "Caso de estudio"} · {study.category[l]}
        </motion.span>
        <RevealTitle
          as="h1"
          className="font-serif font-bold text-font-secondary"
          style={{ fontSize: "clamp(42px, 6.4vw, 96px)", lineHeight: 1.02 }}
        >
          {study.title}
        </RevealTitle>
        <motion.p
          {...fadeUp(0.2)}
          className="text-[18px] xl:text-[22px] text-font-primary leading-relaxed mt-6 max-w-3xl"
        >
          {study.summary[l]}
        </motion.p>

        {/* Meta */}
        <motion.dl
          {...fadeUp(0.28)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-divider"
        >
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-primary opacity-60 mb-2">{en ? "My role" : "Mi rol"}</dt>
            <dd className="text-[15px] text-font-secondary">{study.role[l]}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-primary opacity-60 mb-2">Stack</dt>
            <dd className="flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <span key={s} className="font-mono text-[10px] text-accent border border-accent/25 px-3 py-1 rounded-full">{s}</span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-primary opacity-60 mb-2">{en ? "Live site" : "Sitio"}</dt>
            <dd>
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[15px] text-font-secondary hover:text-accent border-b border-divider hover:border-accent transition-colors"
              >
                {study.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} <FiArrowUpRight size={13} />
              </a>
            </dd>
          </div>
        </motion.dl>
      </section>

      {/* ── Showcase: desktop + mobile ── */}
      <section className={`${PAD} pt-16 xl:pt-24`}>
        <div className="relative rounded-[32px] bg-accent-light px-5 sm:px-10 xl:px-16 pt-10 xl:pt-16 pb-10 xl:pb-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-0">
            <motion.div {...fadeUp(0.1)} className="w-full lg:w-[78%]">
              <BrowserFrame url={study.url} title={study.title} />
            </motion.div>
            <Parallax speed={50} className="lg:-ml-24 lg:mb-[-40px] relative z-10 flex-shrink-0">
              <motion.div {...fadeUp(0.25)}>
                <PhoneFrame url={study.url} title={study.title} />
              </motion.div>
            </Parallax>
          </div>
          <p className="mt-8 lg:mt-14 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-font-primary opacity-60">
            {en ? "Scroll inside the screens to explore the site" : "Scrolleá dentro de las pantallas para recorrer el sitio"}
          </p>
        </div>
      </section>

      {/* ── Brief ── */}
      <section className={`${PAD} pt-20 xl:pt-32`}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-16">
          <div>
            <motion.span {...fadeUp(0)} className="label block mb-4">{en ? "The brief" : "El desafío"}</motion.span>
            <RevealTitle
              as="h2"
              className="font-serif font-bold text-font-secondary"
              style={{ fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: 1.08 }}
            >
              {study.briefTitle[l][0]} <em className="text-accent italic">{study.briefTitle[l][1]}</em>
            </RevealTitle>
          </div>
          <motion.p {...fadeUp(0.1)} className="text-[17px] xl:text-[19px] text-font-primary leading-relaxed lg:pt-10">
            {study.brief[l]}
          </motion.p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={`${PAD} pt-20 xl:pt-28`}>
        <motion.span {...fadeUp(0)} className="label block mb-4">{en ? "Process" : "Proceso"}</motion.span>
        <RevealTitle
          as="h2"
          className="font-serif font-bold text-font-secondary mb-12"
          style={{ fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: 1.08 }}
        >
          {en ? <>From idea to <em className="text-accent italic">live site</em></> : <>De la idea al <em className="text-accent italic">sitio publicado</em></>}
        </RevealTitle>
        <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {study.process.map((step, i) => {
            const [title, text] = step[l];
            return (
              <motion.li
                key={i}
                {...fadeUp(0.06 + i * 0.08)}
                className="bg-white border border-divider rounded-3xl p-7 flex flex-col gap-3"
              >
                <span className="font-serif italic text-accent text-[34px] leading-none">0{i + 1}</span>
                <h3 className="font-serif font-bold text-font-secondary text-[21px] leading-tight">{title}</h3>
                <p className="text-[15px] text-font-primary leading-relaxed">{text}</p>
              </motion.li>
            );
          })}
        </ol>
      </section>

      {/* ── Highlights ── */}
      <section className={`${PAD} pt-20 xl:pt-28`}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16">
          <div>
            <motion.span {...fadeUp(0)} className="label block mb-4">{en ? "What I built" : "Lo que construí"}</motion.span>
            <RevealTitle
              as="h2"
              className="font-serif font-bold text-font-secondary"
              style={{ fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: 1.08 }}
            >
              {en ? <>Design <em className="text-accent italic">decisions</em></> : <>Decisiones de <em className="text-accent italic">diseño</em></>}
            </RevealTitle>
          </div>
          <ul className="flex flex-col">
            {study.highlights[l].map((h, i) => (
              <motion.li
                key={i}
                {...fadeUp(0.05 + i * 0.07)}
                className="flex gap-4 py-5 border-b border-divider first:border-t text-[16px] xl:text-[17px] text-font-secondary leading-relaxed"
              >
                <span className="mt-1 w-6 h-6 rounded-full bg-accent-light text-accent flex items-center justify-center flex-shrink-0">
                  <FiCheck size={13} strokeWidth={3} />
                </span>
                {h}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Next project ── */}
      <section className={`${PAD} pt-24 xl:pt-32`}>
        <Link href={`/work/${next.slug}`} className="group block">
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl border border-divider bg-white px-8 py-10 xl:px-12 xl:py-12 flex items-center justify-between gap-6 hover:border-accent transition-colors duration-300"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-primary opacity-60">
                {en ? "Next case study" : "Siguiente caso"}
              </span>
              <p className="font-serif font-bold text-font-secondary group-hover:text-accent transition-colors mt-2" style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.05 }}>
                {next.title}
              </p>
            </div>
            <span className="w-14 h-14 rounded-full border border-divider group-hover:bg-accent group-hover:border-accent group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
              <FiArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </motion.div>
        </Link>
      </section>
    </main>
  );
}
