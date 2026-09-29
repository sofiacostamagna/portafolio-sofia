"use client";

import { useRef, useState, useEffect } from "react";

/* ─────────────────────────────────────
   Captura de página completa que se scrollea dentro de la pantalla del mockup
   (rueda del mouse o dedo). Cuando llega arriba/abajo del todo, deja pasar
   el scroll a la página para no "atrapar" al usuario.
───────────────────────────────────── */
export default function ScrollableScreenshot({ src, alt, height, radius = 0 }) {
  const screenRef = useRef(null);
  const imgRef = useRef(null);
  const touchY = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const measure = () => {
    const img = imgRef.current;
    if (!img) return;
    setMaxScroll(Math.max(0, img.offsetHeight - height));
  };

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (imgRef.current) ro.observe(imgRef.current);
    return () => ro.disconnect();
  }, [height]);

  useEffect(() => {
    setScrollY((prev) => Math.min(prev, maxScroll));
    const el = screenRef.current;
    if (!el) return;
    const onWheel = (e) => {
      setScrollY((prev) => {
        const next = Math.max(0, Math.min(maxScroll, prev + e.deltaY));
        return next;
      });
      const atTop = e.deltaY < 0 && el.dataset.scroll === "0";
      const atBottom = e.deltaY > 0 && Number(el.dataset.scroll) >= maxScroll;
      if (!atTop && !atBottom) e.preventDefault();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [maxScroll]);

  return (
    <div
      ref={screenRef}
      data-scroll={Math.round(scrollY)}
      style={{ height, overflow: "hidden", position: "relative", background: "#f5f5f5", cursor: "ns-resize", borderRadius: radius }}
      onTouchStart={(e) => { touchY.current = e.touches[0].clientY; }}
      onTouchMove={(e) => {
        const dy = touchY.current - e.touches[0].clientY;
        touchY.current = e.touches[0].clientY;
        setScrollY((prev) => Math.max(0, Math.min(maxScroll, prev + dy)));
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        onLoad={measure}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          transform: `translateY(${-scrollY}px)`,
          transition: "transform 0.12s ease-out",
          userSelect: "none",
        }}
      />
    </div>
  );
}
