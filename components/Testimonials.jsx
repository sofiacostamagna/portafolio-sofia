"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar, FiCheckCircle, FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLang } from "./LanguageContext";
import { testimonials, UPWORK_PROFILE_URL } from "../lib/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          size={14}
          className="text-accent"
          style={{ fill: i < rating ? "currentColor" : "none" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t, lang } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0];
    const step = card.offsetWidth + 24; // ancho + gap-6
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setActive(end ? testimonials.length - 1 : Math.round(el.scrollLeft / step));
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(end);
  };

  const scrollTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.max(0, Math.min(testimonials.length - 1, i));
    el.scrollTo({ left: el.children[index].offsetLeft, behavior: "smooth" });
  };

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.children[0].offsetWidth + 24), behavior: "smooth" });
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("resize", onScroll);
    return () => window.removeEventListener("resize", onScroll);
  }, []);

  const formatDate = (ym) =>
    new Date(`${ym}-01T00:00:00`).toLocaleDateString(lang === "es" ? "es-AR" : "en-US", {
      month: "short",
      year: "numeric",
    });

  return (
    <section ref={ref} className="py-20 xl:py-28">
      <div className="px-8 xl:px-[10vw] 2xl:px-[12vw]">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <motion.span variants={fadeUp} className="label block mb-3">
              {t.testimonials.label}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif font-bold text-font-secondary"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
            >
              {t.testimonials.heading}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mt-4">
              <Stars rating={5} />
              <span className="text-[14px] text-font-primary">{t.testimonials.rating}</span>
            </motion.div>
          </div>
          <motion.div variants={fadeUp}>
            <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors inline-flex items-center gap-1">
                {t.testimonials.viewAll} <FiArrowUpRight size={12} />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Carrusel — scroll-snap nativo + flechas y dots */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((item) => (
              <figure
                key={item.project}
                className="snap-start flex-shrink-0 w-full lg:w-[calc((100%-24px)/2)] xl:w-[calc((100%-48px)/3)] bg-white border border-divider rounded-2xl p-7 flex flex-col gap-5 hover:border-accent transition-colors duration-300"
              >
                <Stars rating={item.rating} />
                <blockquote className="flex-1 text-[16px] text-font-secondary leading-relaxed">
                  “{item.quote}”
                </blockquote>
                <figcaption className="flex flex-col gap-2 pt-4 border-t border-divider">
                  <span className="text-[13px] font-medium text-font-secondary">{item.project}</span>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-font-primary opacity-70">
                      {formatDate(item.date)}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent inline-flex items-center gap-1">
                      <FiCheckCircle size={11} /> {t.testimonials.verified}
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`${i + 1} / ${testimonials.length}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === active ? 20 : 6, background: i === active ? "#7f77dd" : "#d0d0d0" }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-divider flex items-center justify-center text-font-secondary hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-divider flex items-center justify-center text-font-secondary hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
