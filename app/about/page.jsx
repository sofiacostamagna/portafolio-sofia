"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../../components/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const TRAVEL_PHOTOS_UPDATED = [
  { src: "/Paris.jpeg",         label: { en: "Paris, France",           es: "París, Francia"               }, offsetY: 0,   rotate: -2 },
  { src: "/roma.jpeg",          label: { en: "Rome, Italy",             es: "Roma, Italia"                 }, offsetY: 40,  rotate: 2  },
  { src: "/Niagara Falls.jpeg", label: { en: "Niagara Falls, Canada",   es: "Cataratas del Niágara"        }, offsetY: 10,  rotate: -1 },
  { src: "/Portugal.jpeg",      label: { en: "Lisbon, Portugal",        es: "Lisboa, Portugal"             }, offsetY: 55,  rotate: 3  },
  { src: "/espana.jpeg",        label: { en: "Madrid, Spain",           es: "Madrid, España"               }, offsetY: 20,  rotate: -2 },
];

function TravelCarousel({ lang }) {
  // Duplicamos para el loop infinito
  const track = [...TRAVEL_PHOTOS_UPDATED, ...TRAVEL_PHOTOS_UPDATED];

  return (
    <>
      <style>{`
        @keyframes marquee-travel {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-travel {
          animation: marquee-travel 22s linear infinite;
          will-change: transform;
        }
        .marquee-travel:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fade edges */}
      <div
        style={{
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          paddingBottom: 60,
        }}
      >
        <div className="marquee-travel" style={{ display: "flex", gap: 16, width: "max-content", alignItems: "flex-start" }}>
          {track.map((photo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
              transition={{ duration: 0.3 }}
              style={{
                width: 220,
                flexShrink: 0,
                marginTop: photo.offsetY,
                rotate: photo.rotate,
                position: "relative",
                cursor: "pointer",
              }}
            >
              <div
                className="overflow-hidden shadow-xl"
                style={{ aspectRatio: "3/4", borderRadius: 18 }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={photo.src}
                    fill
                    sizes="220px"
                    alt={photo.label[lang]}
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, transparent 50%)" }}
                  />
                  <span className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white opacity-80">
                    {photo.label[lang]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

function SportStack({ en }) {
  const [fanned, setFanned] = useState(false);

  const photos = [
    {
      src: "/foto-2.jpeg",
      alt: en ? "Trekking" : "Trekking",
      stack: { rotate: -9, x: 10,   y: 0  },
      fan:   { rotate: -14, x: -155, y: 32 },
    },
    {
      src: "/carrera.jpeg",
      alt: en ? "Trail run" : "Carrera",
      stack: { rotate: 5,  x: -6, y: 0   },
      fan:   { rotate: 0,  x: 0,  y: -18 },
    },
    {
      src: "/hockey.jpeg",
      alt: en ? "Field Hockey" : "Hockey",
      stack: { rotate: -2, x: 0,   y: 0  },
      fan:   { rotate: 13, x: 155, y: 32 },
    },
  ];

  return (
    <div className="lg:w-[52%] flex justify-center lg:justify-end items-center">
      <div
        style={{ position: "relative", width: 220, height: 310, cursor: "pointer" }}
        onMouseEnter={() => setFanned(true)}
        onMouseLeave={() => setFanned(false)}
      >
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            animate={{
              rotate: fanned ? p.fan.rotate : p.stack.rotate,
              x:      fanned ? p.fan.x      : p.stack.x,
              y:      fanned ? p.fan.y      : p.stack.y,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={fanned ? { scale: 1.06, zIndex: 10 } : {}}
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              marginLeft: -110,
              width: 220,
              zIndex: i + 1,
              transformOrigin: "bottom center",
            }}
          >
            <div className="overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4", borderRadius: 18 }}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src={p.src} fill sizes="220px" alt={p.alt} className="object-cover object-center" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const { t, lang } = useLang();
  const en = lang === "en";
  const [activePhoto, setActivePhoto] = useState(null);

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

          {/* Right: retrato Roma */}
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

          <motion.span {...fadeUp(0)} className="label block mb-10 xl:mb-14">
            {en ? "Sport & outdoor" : "Deporte y aire libre"}
          </motion.span>

          {/* IG-style post cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                src: "/hockey.jpeg",
                objPos: "center 20%",
                tag:    { en: "Field Hockey",          es: "Hockey sobre césped"    },
                time:   { en: "3y",                    es: "hace 3 años"            },
                likes:  "1,847",
                caption:{ en: "25+ years on the field 🏑 Discipline, teamwork and competing at the highest level.", es: "25+ años en la cancha 🏑 Disciplina, trabajo en equipo y competencia al máximo nivel." },
              },
              {
                src: "/carrera.jpeg",
                tag:    { en: "Trail Running",         es: "Carrera de montaña"     },
                time:   { en: "1y",                    es: "hace 1 año"             },
                likes:  "923",
                caption:{ en: "Race day 🏃‍♀️ Nothing beats crossing that finish line.", es: "Día de carrera 🏃‍♀️ Nada supera cruzar esa línea de llegada." },
              },
              {
                src: "/foto-2.jpeg",
                tag:    { en: "Trekking",              es: "Trekking"               },
                time:   { en: "8mo",                   es: "hace 8 meses"           },
                likes:  "2,104",
                caption:{ en: "Found paradise 🌿 Always chasing waterfalls and peaks.", es: "Paraíso encontrado 🌿 Siempre buscando cascadas y cumbres." },
              },
            ].map((p, i) => (
              <motion.div
                key={p.src}
                {...fadeUp(0.08 + i * 0.08)}
                style={{
                  background: "#fff",
                  border: "1px solid #efefef",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "monospace",
                    border: "2px solid #e9d5ff",
                  }}>SC</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 12, fontWeight: 600, margin: 0, color: "#111", fontFamily: "sans-serif", lineHeight: 1.3 }}>sofiacostamagna</p>
                    <p style={{ fontSize: 10, color: "#aaa", margin: 0, fontFamily: "sans-serif" }}>{p.tag[en ? "en" : "es"]}</p>
                  </div>
                  <span style={{ fontSize: 16, color: "#bbb", letterSpacing: 1, cursor: "pointer" }}>···</span>
                </div>

                {/* Foto cuadrada */}
                <div style={{ aspectRatio: "1/1", position: "relative" }}>
                  <Image src={p.src} fill sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 30vw" alt={p.tag[en ? "en" : "es"]} className="object-cover" style={{ objectPosition: p.objPos ?? "center" }} />
                </div>

                {/* Footer */}
                <div style={{ padding: "10px 14px 14px" }}>
                  {/* Iconos */}
                  <div style={{ display: "flex", gap: 14, marginBottom: 8 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#111", margin: "0 0 4px", fontFamily: "sans-serif" }}>{p.likes} {en ? "likes" : "Me gusta"}</p>
                  <p style={{ fontSize: 12, color: "#111", margin: "0 0 4px", fontFamily: "sans-serif", lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 700 }}>sofiacostamagna</span>{" "}{p.caption[en ? "en" : "es"]}
                  </p>
                  <p style={{ fontSize: 10, color: "#aaa", margin: 0, fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.time[en ? "en" : "es"]}</p>
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
              Italia · Francia · Canadá · España · Portugal
            </motion.p>
          </div>

          {/* Texto */}
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
            <TravelCarousel lang={lang} />
          </motion.div>
        </div>
      </section>

    </main>
  );
}
