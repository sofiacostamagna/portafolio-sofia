"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiMessageCircle, FiUsers, FiLayers, FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import { useLang } from "../../components/LanguageContext";
import { RevealTitle, Parallax } from "../../components/motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─────────────────────────────────────
   Historia — línea de tiempo
───────────────────────────────────── */
const STORY = [
  {
    when: { en: "Before code", es: "Antes del código" },
    title: { en: "Human Resources", es: "Recursos Humanos" },
    text: {
      en: "I worked in Human Resources at a clinic in Argentina.",
      es: "Trabajé en Recursos Humanos en un sanatorio de Argentina.",
    },
  },
  {
    when: { en: "2020", es: "2020" },
    title: { en: "The pandemic", es: "La pandemia" },
    text: {
      en: "The way we work changed, and I started thinking about changing too.",
      es: "Cambió la forma de trabajar y empecé a pensar en cambiar yo también.",
    },
  },
  {
    when: { en: "2021", es: "2021" },
    title: { en: "Canada", es: "Canadá" },
    text: {
      en: "I lived there for four months and met people who helped me believe in myself.",
      es: "Viví cuatro meses allá y conocí gente que me ayudó a creer en mí.",
    },
  },
  {
    when: { en: "2023", es: "2023" },
    title: { en: "Learning to code", es: "Aprender a programar" },
    text: {
      en: "I did Henry's 800-hour Full Stack bootcamp. It was hard, but I kept going.",
      es: "Hice el bootcamp Full Stack de Henry, de 800 horas. Costó, pero seguí.",
    },
  },
  {
    when: { en: "Today", es: "Hoy" },
    title: { en: "Frontend & UX/UI", es: "Frontend y UX/UI" },
    text: {
      en: "I design and build websites for clients, working remotely.",
      es: "Diseño y desarrollo sitios web para clientes, trabajando de forma remota.",
    },
  },
];

/* La línea se dibuja con el scroll y cada hito se enciende cuando la línea lo alcanza */
function Timeline({ l }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [reached, setReached] = useState(reduce ? STORY.length : 0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    setReached(Math.min(STORY.length, Math.floor(v * (STORY.length - 1) + 1.05)));
  });

  const lineScale = reduce ? 1 : progress;

  return (
    <ol ref={ref} className="relative grid grid-cols-1 xl:grid-cols-5 gap-10 xl:gap-6">
      {/* Riel gris + trazo violeta que se dibuja (vertical en mobile, horizontal en desktop) */}
      <span aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-divider xl:hidden" />
      <motion.span
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-[2px] -ml-[0.5px] bg-accent xl:hidden origin-top"
        style={{ scaleY: lineScale }}
      />
      <span aria-hidden className="hidden xl:block absolute left-0 right-0 top-[7px] h-px bg-divider" />
      <motion.span
        aria-hidden
        className="hidden xl:block absolute left-0 right-0 top-[7px] h-[2px] -mt-[0.5px] bg-accent origin-left"
        style={{ scaleX: lineScale }}
      />

      {STORY.map((step, i) => {
        const on = i < reached;
        return (
          <li key={i} className="relative pl-10 xl:pl-0 xl:pt-10">
            <motion.span
              aria-hidden
              className="absolute left-0 top-0.5 xl:top-0 w-[15px] h-[15px] rounded-full border-2"
              animate={{
                scale: on ? [1, 1.45, 1] : 1,
                backgroundColor: on ? "#6a5fd0" : "#fafafa",
                borderColor: on ? "#6a5fd0" : "#d6d3f3",
                boxShadow: on ? "0 0 0 6px rgba(106,95,208,0.15)" : "0 0 0 0px rgba(106,95,208,0)",
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent block mb-2">
              {step.when[l]}
            </span>
            <motion.div
              animate={{ y: on ? 0 : 10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif font-bold text-font-secondary text-[21px] leading-tight mb-2">
                {step.title[l]}
              </h3>
              <p className="text-[15px] text-font-primary leading-relaxed">{step.text[l]}</p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}

/* ─────────────────────────────────────
   Lo que traigo — cada punto respaldado por un endorsement de Upwork
───────────────────────────────────── */
const STRENGTHS = [
  {
    icon: FiMessageCircle,
    title: { en: "Communication & empathy", es: "Comunicación y empatía" },
    text: {
      en: "My time in HR taught me to listen, ask the right questions and keep everyone on the same page.",
      es: "Mi paso por RRHH me enseñó a escuchar, hacer las preguntas correctas y mantener a todos alineados.",
    },
    endorsement: "Clear Communicator",
  },
  {
    icon: FiUsers,
    title: { en: "Teamwork & perseverance", es: "Trabajo en equipo y constancia" },
    text: {
      en: "27+ years of hockey: I show up, I commit, and I don't give up on a hard problem.",
      es: "Más de 27 años de hockey: me comprometo, estoy presente y no abandono un problema difícil.",
    },
    endorsement: "Collaborative",
  },
  {
    icon: FiLayers,
    title: { en: "Design + code", es: "Diseño + código" },
    text: {
      en: "I design in Figma and build it myself, so nothing gets lost between the design and the final site.",
      es: "Diseño en Figma y lo construyo yo misma, así nada se pierde entre el diseño y el sitio final.",
    },
    endorsement: "Detail Oriented",
  },
];

/* ─────────────────────────────────────
   Más allá de la pantalla — deporte + viajes
───────────────────────────────────── */
const MOMENTS = [
  {
    src: "/hockey.jpeg",
    objPos: "center 20%",
    label: { en: "Field hockey", es: "Hockey" },
    caption: { en: "I've played hockey for over 27 years, since I was 5 🏑", es: "Juego al hockey hace más de 27 años, desde los 5 🏑" },
  },
  {
    src: "/Niagara Falls.jpeg",
    label: { en: "Niagara Falls · Canada · 2022", es: "Cataratas del Niágara · Canadá · 2022" },
    caption: { en: "The place that changed everything for me", es: "El lugar que cambió todo para mí" },
  },
  {
    src: "/carrera.jpeg",
    label: { en: "Trail running", es: "Carrera de montaña" },
    caption: { en: "Running clears my head like nothing else. Race day is my favorite day 🏃‍♀️", es: "Correr despeja mi cabeza como nada. El día de carrera es mi favorito 🏃‍♀️" },
  },
  {
    src: "/roma.jpeg",
    label: { en: "Rome · Italy · 2026", es: "Roma · Italia · 2026" },
    caption: { en: "Threw a coin in the Trevi Fountain — had to come back", es: "Tiré una moneda en la Fontana di Trevi — tenía que volver" },
  },
  {
    src: "/Paris.jpeg",
    label: { en: "Paris · France · 2026", es: "París · Francia · 2026" },
    caption: { en: "Croissants for breakfast every single day", es: "Croissants para desayunar todos los días" },
  },
  {
    src: "/foto-2.jpeg",
    label: { en: "Trekking", es: "Trekking" },
    caption: { en: "Mountains, waterfalls, fresh air — my reset button 🌿", es: "Montañas, cascadas, aire puro — mi botón de reset 🌿" },
  },
  {
    src: "/Portugal.jpeg",
    label: { en: "Lisbon · Portugal · 2026", es: "Lisboa · Portugal · 2026" },
    caption: { en: "Pastel de nata and ocean views — perfect combo", es: "Pastel de nata y vistas al océano — combo perfecto" },
  },
  {
    src: "/espana.jpeg",
    label: { en: "Madrid · Spain · 2026", es: "Madrid · España · 2026" },
    caption: { en: "Tapas at midnight hits different", es: "Las tapas a medianoche son otra cosa" },
  },
  {
    src: "/mexico.jpeg",
    label: { en: "Cancún · Mexico · 2022", es: "Cancún · México · 2022" },
    caption: { en: "Caribbean water so blue it doesn't look real", es: "El agua del Caribe tan azul que parece irreal" },
  },
];

const ROTATIONS = [-2, 1.5, -1, 2, -1.5, 1];

function Moments({ l }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.children[0].offsetWidth + 24), behavior: "smooth" });
  };

  const arrowClass =
    "w-10 h-10 rounded-full border border-divider bg-white flex items-center justify-center text-font-secondary hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none";

  return (
    <>
      <div
        ref={trackRef}
        onScroll={update}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 xl:px-[10vw] 2xl:px-[12vw] pt-4 pb-10"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch", scrollPaddingLeft: "2rem" }}
      >
        {MOMENTS.map((m, i) => (
          <motion.figure
            key={m.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: Math.min(i, 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="snap-start flex-shrink-0 bg-white p-2.5 pb-5 rounded-[4px]"
            style={{
              width: "clamp(230px, 24vw, 290px)",
              rotate: ROTATIONS[i % ROTATIONS.length],
              boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div className="relative overflow-hidden rounded-[2px]" style={{ aspectRatio: "1/1" }}>
              <Image
                src={m.src}
                fill
                sizes="290px"
                alt={m.label[l]}
                className="object-cover"
                style={{ objectPosition: m.objPos ?? "center" }}
              />
            </div>
            <figcaption className="pt-3.5 px-1">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-font-secondary mb-1">
                {m.label[l]}
              </p>
              <p className="text-[13px] text-font-primary leading-snug">{m.caption[l]}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <div className="px-8 xl:px-[10vw] 2xl:px-[12vw] flex justify-end gap-2">
        <button onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous" className={arrowClass}>
          <FiChevronLeft size={18} />
        </button>
        <button onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next" className={arrowClass}>
          <FiChevronRight size={18} />
        </button>
      </div>
    </>
  );
}

export default function About() {
  const { t, lang } = useLang();
  const en = lang === "en";
  const l = en ? "en" : "es";

  return (
    <main className="pt-24 pb-16 min-h-screen">

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-16 pb-20 xl:pt-24 xl:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

          {/* Left */}
          <div className="lg:w-[54%]">
            <motion.span className="animate-in label block mb-5" style={{ "--d": "0ms" }}>
              {t.about.label}
            </motion.span>
            <RevealTitle as="h1"
              className="font-serif font-bold text-font-secondary mb-8"
              style={{ fontSize: "clamp(40px, 5vw, 70px)", lineHeight: 1.05 }}
            >
              {t.about.heading1}{" "}
              <em className="text-accent italic">{t.about.heading2}</em>
            </RevealTitle>
            <motion.div className="animate-in flex flex-col gap-5" style={{ "--d": "200ms" }}>
              <p className="text-[19px] xl:text-[21px] text-font-secondary leading-relaxed">{t.about.p1}</p>
              <p className="text-[17px] xl:text-[18px] text-font-primary leading-relaxed">{t.about.p2}</p>
            </motion.div>
            <motion.div className="animate-in mt-10" style={{ "--d": "350ms" }}>
              <Link href="/contact">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent border-b border-accent pb-0.5 hover:text-accent-hover transition-colors">
                  {t.about.cta}
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right: retrato */}
          <div className="lg:w-[46%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "clamp(220px, 30vw, 360px)" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                style={{ rotate: 3, transformOrigin: "bottom center", cursor: "pointer" }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "3/4" }}>
                  {/* La foto se mueve dentro del marco → sensación de profundidad */}
                  <Parallax speed={-30} className="absolute -inset-y-10 inset-x-0">
                    <Image src="/norte.jpeg" fill sizes="360px" alt="Sofía en el norte argentino" className="object-cover object-center" />
                  </Parallax>
                </div>
                <span className="block text-center font-mono text-[9px] uppercase tracking-[0.16em] text-font-muted mt-3">
                  Salta, Argentina
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ STORY — timeline ════════════════════════ */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] py-20 xl:py-28 border-t border-divider">
        <motion.span {...fadeUp(0)} className="label block mb-4">
          {en ? "How I got here" : "Cómo llegué hasta acá"}
        </motion.span>
        <RevealTitle as="h2"
          className="font-serif font-bold text-font-secondary mb-14 xl:mb-20"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
        >
          {en
            ? <>From HR to <em className="text-accent italic">frontend</em></>
            : <>De RRHH al <em className="text-accent italic">frontend</em></>}
        </RevealTitle>

        <Timeline l={l} />
      </section>

      {/* ════════════════════════ WHAT I BRING ════════════════════════ */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] py-20 xl:py-28 border-t border-divider" style={{ background: "#f8f7ff" }}>
        <motion.span {...fadeUp(0)} className="label block mb-4">
          {en ? "What I bring" : "Lo que traigo"}
        </motion.span>
        <RevealTitle as="h2"
          className="font-serif font-bold text-font-secondary mb-12 xl:mb-16 max-w-3xl"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
        >
          {en
            ? <>More than code — <em className="text-accent italic">a teammate</em></>
            : <>Más que código — <em className="text-accent italic">una compañera de equipo</em></>}
        </RevealTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STRENGTHS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.endorsement}
                {...fadeUp(0.08 + i * 0.08)}
                className="bg-white border border-divider rounded-3xl p-8 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-light text-accent flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif font-bold text-font-secondary text-[24px] leading-tight">{s.title[l]}</h3>
                <p className="text-[15px] text-font-primary leading-relaxed flex-1">{s.text[l]}</p>
                <p className="pt-4 border-t border-divider font-mono text-[10px] uppercase tracking-[0.12em] text-font-primary">
                  {en ? "Endorsed on Upwork: " : "Destacado en Upwork: "}
                  <span className="text-accent">“{s.endorsement}”</span>
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════ BEYOND THE SCREEN ════════════════════════ */}
      <section className="py-20 xl:py-28 border-t border-divider">
        <div className="px-8 xl:px-[10vw] 2xl:px-[12vw] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <motion.span {...fadeUp(0)} className="label block mb-4">
              {en ? "Beyond the screen" : "Más allá de la pantalla"}
            </motion.span>
            <RevealTitle as="h2"
              className="font-serif font-bold text-font-secondary"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
            >
              {en ? <>Always <em className="text-accent italic">moving</em></> : <>Siempre en <em className="text-accent italic">movimiento</em></>}
            </RevealTitle>
          </div>
          <motion.p {...fadeUp(0.12)} className="text-[16px] text-font-primary leading-relaxed max-w-md">
            {en
              ? "Sport taught me discipline; code gave me the freedom to work from anywhere and fulfill a dream I always had: getting to know the world."
              : "El deporte me enseñó disciplina; el código me dio la libertad de trabajar desde cualquier lugar y cumplir un sueño que siempre tuve: conocer el mundo."}
          </motion.p>
        </div>

        <Moments l={l} />
      </section>

      {/* ════════════════════════ LEARNING → résumé ════════════════════════ */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-4">
        <motion.div
          {...fadeUp(0)}
          className="rounded-3xl border border-divider bg-white px-8 py-10 xl:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <RevealTitle as="h2" className="font-serif font-bold text-font-secondary text-[28px] xl:text-[34px] leading-tight mb-3">
              {en ? <>Always <em className="text-accent italic">learning</em></> : <>Siempre <em className="text-accent italic">aprendiendo</em></>}
            </RevealTitle>
            <div className="flex flex-wrap gap-2">
              {["Henry · Full Stack Web Developer", "Codo a Codo · Full Stack PHP", "Udemy · UX/UI & Figma"].map((c) => (
                <span key={c} className="font-mono text-[10px] text-accent border border-accent/25 px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </div>
          <Link
            href="/resume?tab=education"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-font-secondary border border-divider hover:border-accent hover:text-accent px-6 py-3.5 rounded-full transition-colors w-fit flex-shrink-0"
          >
            {en ? "See education & certificates" : "Ver educación y certificados"} <FiArrowRight size={13} />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
