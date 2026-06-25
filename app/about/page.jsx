"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../../components/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const TRAVEL = [
  {
    src: "/Paris.jpeg",
    city: { en: "Paris", es: "París" },
    country: { en: "France", es: "Francia" },
    year: "2022",
    fact: { en: "Croissants for breakfast every single day", es: "Croissants para desayunar todos los días" },
  },
  {
    src: "/roma.jpeg",
    city: { en: "Rome", es: "Roma" },
    country: { en: "Italy", es: "Italia" },
    year: "2022",
    fact: { en: "Threw a coin in the Trevi Fountain — had to come back", es: "Tiré una moneda en la Fontana di Trevi — tenía que volver" },
  },
  {
    src: "/Niagara Falls.jpeg",
    city: { en: "Niagara Falls", es: "Cataratas del Niágara" },
    country: { en: "Canada", es: "Canadá" },
    year: "2021",
    fact: { en: "The place that changed everything for me", es: "El lugar que cambió todo para mí" },
  },
  {
    src: "/Portugal.jpeg",
    city: { en: "Lisbon", es: "Lisboa" },
    country: { en: "Portugal", es: "Portugal" },
    year: "2023",
    fact: { en: "Pastel de nata and ocean views — perfect combo", es: "Pastel de nata y vistas al océano — combo perfecto" },
  },
  {
    src: "/espana.jpeg",
    city: { en: "Madrid", es: "Madrid" },
    country: { en: "Spain", es: "España" },
    year: "2023",
    fact: { en: "Tapas at midnight hits different", es: "Las tapas a medianoche son otra cosa" },
  },
  {
    src: "/mexico.jpeg",
    city: { en: "Cancún", es: "Cancún" },
    country: { en: "Mexico", es: "México" },
    year: "2024",
    fact: { en: "Caribbean water so blue it doesn't look real", es: "El agua del Caribe tan azul que parece irreal" },
  },
];

function TravelPolaroids({ lang }) {
  const l = lang === "en" ? "en" : "es";

  return (
    <div
      className="flex gap-3 overflow-x-auto pb-3"
      style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {TRAVEL.map((p, i) => (
        <motion.div
          key={p.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="group flex-shrink-0"
          style={{ width: "clamp(180px, 22vw, 240px)", scrollSnapAlign: "start" }}
        >
          <div className="relative overflow-hidden rounded-xl"
            style={{ aspectRatio: "3/4" }}>
            <Image
              src={p.src}
              fill
              sizes="200px"
              alt={p.city[l]}
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/70 mb-0.5">{p.country[l]}</p>
              <p className="font-serif text-white text-[13px] font-medium leading-tight">{p.city[l]}</p>
              <p className="font-sans text-white/70 text-[10px] leading-relaxed mt-1">{p.fact[l]}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function About() {
  const { t, lang } = useLang();
  const en = lang === "en";

  return (
    <main className="pt-24 pb-28 min-h-screen">

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] pt-16 pb-20 xl:pt-24 xl:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-start gap-14 xl:gap-20">

          {/* Left */}
          <div className="lg:w-[54%]">
            <motion.span {...fadeUp(0)} className="label block mb-5">
              {t.about.label}
            </motion.span>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-serif font-bold text-font-secondary mb-8"
              style={{ fontSize: "clamp(40px, 5vw, 70px)", lineHeight: 1.05 }}
            >
              {t.about.heading1}{" "}
              <em className="text-accent italic">{t.about.heading2}</em>
            </motion.h1>
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-5">
              <p className="text-[17px] xl:text-[18px] text-font-primary leading-relaxed">{t.about.p1}</p>
              <p className="text-[17px] xl:text-[18px] text-font-primary leading-relaxed">{t.about.p2}</p>
            </motion.div>
            <motion.div {...fadeUp(0.35)} className="mt-10">
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
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
                style={{ rotate: 3, transformOrigin: "bottom center", cursor: "pointer" }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "3/4" }}>
                  <Image src="/norte.jpeg" fill sizes="360px" alt="Sofía en el norte argentino" className="object-cover object-center" />
                </div>
                <span className="block text-center font-mono text-[9px] uppercase tracking-[0.16em] text-font-primary mt-3 opacity-40">
                  Salta, Argentina
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ STORY ════════════════════════ */}
      <section className="px-8 xl:px-[10vw] 2xl:px-[12vw] py-20 xl:py-28 border-t border-divider">
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
          <motion.span {...fadeUp(0)} className="label block">
            {en ? "How I got here" : "Cómo llegué hasta acá"}
          </motion.span>
          <motion.h2
            {...fadeUp(0.08)}
            className="font-serif font-bold text-font-secondary"
            style={{ fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: 1.1 }}
          >
            {en
              ? <>From HR to<br /><em className="text-accent italic">building things</em></>
              : <>De RRHH a<br /><em className="text-accent italic">construir cosas</em></>
            }
          </motion.h2>
          <motion.div {...fadeUp(0.16)} className="flex flex-col gap-5">
            <p className="text-[16px] xl:text-[17px] text-font-primary leading-relaxed">
              {en
                ? "Before I wrote a single line of code, I was building teams. I worked in Human Resources at a clinic in Argentina, helping people find their place. Then the pandemic arrived — and turned everything upside down."
                : "Antes de escribir una línea de código, construía equipos. Trabajé en Recursos Humanos en un Sanatorio en Argentina, ayudando a personas a encontrar su lugar. Después llegó la pandemia — y puso todo patas para arriba."
              }
            </p>
            <p className="text-[16px] xl:text-[17px] text-font-primary leading-relaxed">
              {en
                ? "I spent 4 months living in Canada. That changed something in me. People crossed my path who shifted my perspective and made me believe in myself. The way we work had changed, the world had changed — and I wanted to be part of that change: building websites, creating platforms, making things."
                : "Viví cuatro meses en Canadá. Eso cambió algo en mí. Se cruzaron personas en mi camino que cambiaron mi visión y me inspiraron a creer en mí misma. Las formas de trabajar habían cambiado, el mundo había cambiado — y yo quería ser parte de ese cambio: construir páginas, crear plataformas, hacer cosas."
              }
            </p>
            <p className="text-[16px] xl:text-[17px] text-font-primary leading-relaxed">
              {en
                ? "I dove into programming. It was hard — long nights, imposter syndrome, a lot of 'this isn't for me.' But it was also the first time in a long time I felt genuinely challenged in a way that excited me. The hockey player in me doesn't give up easily. And I haven't looked back."
                : "Me metí de lleno en la programación. Fue duro — noches largas, síndrome del impostor, muchos 'esto no es para mí'. Pero también fue la primera vez en mucho tiempo que me sentí desafiada de una manera que de verdad me entusiasmaba. La jugadora de hockey que hay en mí no se rinde fácil. Y no volví atrás."
              }
            </p>
            <p className="text-[16px] xl:text-[17px] text-font-primary leading-relaxed">
              {en
                ? "But programming didn't just teach me — it opened doors. It gave me the freedom and the tools to keep exploring the world, to work from anywhere, and to turn what once felt like a dream into something real."
                : "Pero la programación no solo me enseñó — me abrió puertas. Me dio la libertad y las herramientas para seguir conociendo el mundo, para poder trabajar desde cualquier lugar, y para convertir lo que antes parecía un sueño en algo posible."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════ DEPORTE ════════════════════════ */}
      <section className="border-t border-divider py-20 xl:py-28" style={{ background: "#f8f7ff" }}>
        <div className="px-8 xl:px-[10vw] 2xl:px-[12vw]">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16">
            <div>
              <motion.span {...fadeUp(0)} className="label block mb-2">
                {en ? "Sport & outdoor" : "Deporte y aire libre"}
              </motion.span>
              <motion.h2
                {...fadeUp(0.08)}
                className="font-serif font-bold text-font-secondary"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1 }}
              >
                {en ? <>Always <em className="text-accent italic">moving</em></> : <>Siempre en <em className="text-accent italic">movimiento</em></>}
              </motion.h2>
            </div>
          </div>

          {/* Polaroid grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:gap-8">
            {[
              {
                src: "/hockey.jpeg",
                objPos: "center 20%",
                rotate: -2,
                label: { en: "Field Hockey · 25 years", es: "Hockey · 25 años" },
                caption: { en: "I played hockey for 25 years of my life. The sport gave me more than goals — it gave me friends, discipline, commitment and teamwork 🏑", es: "Jugué al hockey durante 25 años de mi vida. El deporte no solo me entregó amigos, sino disciplina, compromiso y trabajo en equipo 🏑" },
              },
              {
                src: "/carrera.jpeg",
                objPos: "center",
                rotate: 1.5,
                label: { en: "Trail Running", es: "Carrera de montaña" },
                caption: { en: "Running clears my head like nothing else. Race day is my favorite day 🏃‍♀️", es: "Correr despeja mi cabeza como nada. El día de carrera es mi favorito 🏃‍♀️" },
              },
              {
                src: "/foto-2.jpeg",
                objPos: "center",
                rotate: -1,
                label: { en: "Trekking", es: "Trekking" },
                caption: { en: "Mountains, waterfalls, fresh air — my reset button 🌿", es: "Montañas, cascadas, aire puro — mi botón de reset 🌿" },
              },
            ].map((p, i) => (
              <motion.div
                key={p.src}
                {...fadeUp(0.08 + i * 0.08)}
                whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.35 }}
                style={{ rotate: p.rotate, transformOrigin: "bottom center" }}
              >
                <div style={{
                  background: "#fff",
                  borderRadius: 4,
                  padding: "10px 10px 20px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                }}>
                  <div style={{ aspectRatio: "1/1", position: "relative", overflow: "hidden", borderRadius: 2 }}>
                    <Image
                      src={p.src}
                      fill
                      sizes="(max-width:640px) 90vw, 30vw"
                      alt={p.label[lang]}
                      className="object-cover"
                      style={{ objectPosition: p.objPos }}
                    />
                  </div>
                  <div style={{ paddingTop: 14, paddingLeft: 4, paddingRight: 4 }}>
                    <p style={{ fontFamily: "'Courier New', monospace", fontSize: 11, fontWeight: 700, color: "#222", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {p.label[en ? "en" : "es"]}
                    </p>
                    <p style={{ fontFamily: "sans-serif", fontSize: 12, color: "#555", margin: 0, lineHeight: 1.5 }}>
                      {p.caption[en ? "en" : "es"]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ VIAJES ════════════════════════ */}
      <section className="border-t border-divider py-20 xl:py-28">
        <div className="px-8 xl:px-[10vw] 2xl:px-[12vw]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 xl:mb-16">
            <div>
              <motion.span {...fadeUp(0)} className="label block mb-2">
                {en ? "Around the world" : "Por el mundo"}
              </motion.span>
              <motion.h2
                {...fadeUp(0.08)}
                className="font-serif font-bold text-font-secondary"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1 }}
              >
                {en ? (
                  <>Always with<br /><em className="text-accent italic">bags packed</em></>
                ) : (
                  <>Siempre con<br /><em className="text-accent italic">las valijas listas</em></>
                )}
              </motion.h2>
            </div>
            <motion.p {...fadeUp(0.12)} className="text-[14px] text-font-primary opacity-60 max-w-xs leading-relaxed">
              {en ? "Italy · France · Canada · Spain · Portugal · Mexico" : "Italia · Francia · Canadá · España · Portugal · México"}
            </motion.p>
          </div>

          <motion.p
            {...fadeUp(0.1)}
            className="text-[16px] xl:text-[17px] text-font-primary leading-relaxed max-w-2xl mb-10 xl:mb-12"
          >
            {en
              ? "Programming didn't just give me knowledge — it opened doors I hadn't imagined. Being able to work from anywhere in the world made it possible to fulfill a dream I'd always carried: knowing it. Each trip is also a reminder of why I do what I do."
              : "La programación no solo me dio conocimiento — me abrió puertas que no imaginaba. Poder trabajar desde cualquier lugar del mundo fue lo que me permitió cumplir un sueño que siempre tuve: conocerlo. Cada viaje también es un recordatorio de por qué hago lo que hago."
            }
          </motion.p>

          <motion.div {...fadeUp(0.15)}>
            <TravelPolaroids lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════ CERTIFICADOS ════════════════════════ */}
      <section className="border-t border-divider py-20 xl:py-28" style={{ background: "#f8f7ff" }}>
        <div className="px-8 xl:px-[10vw] 2xl:px-[12vw]">
          <motion.span {...fadeUp(0)} className="label block mb-4">
            {en ? "Education & Certificates" : "Educación y Certificados"}
          </motion.span>
          <motion.h2
            {...fadeUp(0.08)}
            className="font-serif font-bold text-font-secondary mb-12 xl:mb-16"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1 }}
          >
            {en ? <>Always<br /><em className="text-accent italic">learning</em></> : <>Siempre<br /><em className="text-accent italic">aprendiendo</em></>}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                institution: "Henry Bootcamp",
                program: { en: "Full Stack Web Developer", es: "Full Stack Web Developer" },
                detail: { en: "800 hours · Theoretical & practical training", es: "800 horas · Formación teórico-práctica" },
                year: "2023",
                href: "/certificate.png",
              },
              {
                institution: "Codo a Codo · Agencia de Habilidades para el Futuro",
                program: { en: "Full Stack PHP (Codo a Codo 4.0)", es: "Full Stack PHP (Codo a Codo 4.0)" },
                detail: { en: "198 hours · 20 weeks · Buenos Aires Ciudad", es: "198 horas · 20 semanas · Buenos Aires Ciudad" },
                year: "2024",
                href: "/diploma-cac.pdf",
              },
              {
                institution: "Udemy",
                program: { en: "UX/UI Design & Figma", es: "Diseño UX/UI & Figma" },
                detail: { en: "22 hours · Design systems & prototyping", es: "22 horas · Design systems y prototipado" },
                year: "2024",
                href: null,
              },
            ].map((cert, i) => (
              <motion.div key={i} {...fadeUp(0.08 + i * 0.08)}>
                <div
                  className="h-full flex flex-col justify-between rounded-2xl p-6 xl:p-7"
                  style={{ background: "#fff", border: "1px solid var(--color-divider)" }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">{cert.year}</span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-font-primary opacity-50 leading-relaxed">{cert.institution}</p>
                    <h3 className="font-serif font-bold text-font-secondary text-[18px] xl:text-[20px] leading-tight">
                      {cert.program[en ? "en" : "es"]}
                    </h3>
                    <p className="text-[13px] text-font-primary opacity-60 leading-relaxed">
                      {cert.detail[en ? "en" : "es"]}
                    </p>
                  </div>
                  {cert.href && (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors w-fit"
                    >
                      {en ? "View certificate →" : "Ver certificado →"}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
