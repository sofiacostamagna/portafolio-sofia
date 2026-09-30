"use client";

import { Children, isValidElement, cloneElement, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* ─────────────────────────────────────
   RevealTitle — el título aparece palabra por palabra (cada palabra sube
   desde una "máscara") y las <em> se subrayan al final.
   Uso: <RevealTitle as="h2" className="…" style={…}>Hola <em>mundo</em></RevealTitle>
───────────────────────────────────── */
const wordVariant = {
  hidden: { y: "105%" },
  show:   { y: "0%", transition: { duration: 0.75, ease: EASE } },
};

const underlineVariant = {
  hidden: { scaleX: 0 },
  show:   { scaleX: 1, transition: { duration: 0.6, delay: 0.35, ease: EASE } },
};

// Máscara con un poco de aire para descendentes (g, y) y el vuelo de la itálica
const maskStyle = {
  display: "inline-block",
  overflow: "hidden",
  verticalAlign: "top",
  paddingBottom: "0.14em",
  marginBottom: "-0.14em",
  paddingRight: "0.1em",
  marginRight: "-0.1em",
};

function splitWords(text, keyPrefix) {
  return text.split(/(\s+)/).map((part, i) =>
    /^\s+$/.test(part) || part === "" ? (
      part
    ) : (
      <span key={`${keyPrefix}-${i}`} style={maskStyle}>
        <motion.span variants={wordVariant} style={{ display: "inline-block" }}>
          {part}
        </motion.span>
      </span>
    )
  );
}

function revealChildren(children, keyPrefix = "w") {
  return Children.map(children, (child, i) => {
    const key = `${keyPrefix}-${i}`;
    if (typeof child === "string") return splitWords(child, key);
    if (!isValidElement(child)) return child;
    if (child.type === "br") return child;

    const inner = revealChildren(child.props.children, key);
    if (child.type === "em") {
      return cloneElement(
        child,
        { key, style: { ...child.props.style, position: "relative", display: "inline-block" } },
        <>
          {inner}
          <motion.span
            aria-hidden
            variants={underlineVariant}
            style={{
              position: "absolute",
              left: "0.04em",
              right: "0.1em",
              bottom: "0.02em",
              height: "0.07em",
              background: "currentColor",
              opacity: 0.35,
              borderRadius: 99,
              transformOrigin: "left",
            }}
          />
        </>
      );
    }
    return cloneElement(child, { key }, inner);
  });
}

/* Versión CSS: sin JS, para títulos visibles al cargar (el h1 de cada página) */
function cssReveal(children, counter, keyPrefix = "c") {
  return Children.map(children, (child, i) => {
    const key = `${keyPrefix}-${i}`;
    if (typeof child === "string") {
      return child.split(/(\s+)/).map((part, j) =>
        /^\s+$/.test(part) || part === "" ? (
          part
        ) : (
          <span key={`${key}-${j}`} style={maskStyle}>
            <span className="reveal-word" style={{ "--d": `${counter.i++ * 60}ms` }}>{part}</span>
          </span>
        )
      );
    }
    if (!isValidElement(child) || child.type === "br") return child;
    const inner = cssReveal(child.props.children, counter, key);
    if (child.type === "em") {
      return cloneElement(
        child,
        { key, style: { ...child.props.style, position: "relative", display: "inline-block" } },
        <>
          {inner}
          <span
            aria-hidden
            className="reveal-underline"
            style={{
              "--d": `${counter.i * 60 + 350}ms`,
              position: "absolute",
              left: "0.04em",
              right: "0.1em",
              bottom: "0.02em",
              height: "0.07em",
              background: "currentColor",
              opacity: 0.35,
              borderRadius: 99,
              transformOrigin: "left",
            }}
          />
        </>
      );
    }
    return cloneElement(child, { key }, inner);
  });
}

// immediate: anima con CSS apenas se pinta (por defecto en h1); si no, al entrar en pantalla
export function RevealTitle({ as = "h2", children, className, style, delay = 0, immediate = as === "h1" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (immediate) {
    const Plain = as;
    return <Plain className={className} style={style}>{cssReveal(children, { i: Math.round(delay * 1000 / 60) })}</Plain>;
  }

  if (reduce) {
    const Plain = as;
    return <Plain className={className} style={style}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {revealChildren(children)}
    </Tag>
  );
}

/* ─────────────────────────────────────
   Parallax — el contenido se desplaza a otra velocidad que el scroll.
   speed > 0 → sube más rápido que la página; speed < 0 → más lento.
───────────────────────────────────── */
export function Parallax({ speed = 40, children, className, style }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y: reduce ? 0 : y }}>
      {children}
    </motion.div>
  );
}
