"use client";

import { useRef, useState, useEffect } from "react";

/* ─────────────────────────────────────
   Captura de página completa que se scrollea dentro de la pantalla del mockup
   (rueda del mouse o dedo). Cuando llega arriba/abajo del todo, deja pasar
   el scroll a la página para no "atrapar" al usuario.
───────────────────────────────────── */
// height: alto fijo en px — o aspect ("16/10"): el alto sale del ancho disponible
// srcSet/sizes: versiones responsive · priority: carga inmediata (imagen principal de la página)
// poster: imagen liviana de la primera pantalla. Se muestra al instante y la captura completa
// (pesada) se pide recién cuando terminó de cargar la página o cuando el usuario interactúa.
export default function ScrollableScreenshot({ src, srcSet, sizes = "(max-width: 1023px) 90vw, 45vw", poster, alt, height, aspect, radius = 0, priority = false }) {
  const screenRef = useRef(null);
  const imgRef = useRef(null);
  const touchY = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [wantFull, setWantFull] = useState(!poster);
  const [fullLoaded, setFullLoaded] = useState(false);

  // Pedir la captura completa después del evento "load" (no compite con lo importante)
  useEffect(() => {
    if (wantFull) return;
    const go = () => setTimeout(() => setWantFull(true), 150);
    if (document.readyState === "complete") go();
    else window.addEventListener("load", go, { once: true });
    return () => window.removeEventListener("load", go);
  }, [wantFull]);

  const measure = () => {
    const img = imgRef.current;
    const screen = screenRef.current;
    if (!img || !screen) return;
    setMaxScroll(Math.max(0, img.offsetHeight - screen.clientHeight));
  };

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (imgRef.current) ro.observe(imgRef.current);
    if (screenRef.current) ro.observe(screenRef.current);
    return () => ro.disconnect();
  }, [height, aspect, wantFull]);

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
      style={{ height: aspect ? undefined : height, aspectRatio: aspect, overflow: "hidden", position: "relative", background: "#f5f5f5", cursor: "ns-resize", borderRadius: radius }}
      onPointerEnter={() => setWantFull(true)}
      onTouchStart={(e) => { setWantFull(true); touchY.current = e.touches[0].clientY; }}
      onTouchMove={(e) => {
        const dy = touchY.current - e.touches[0].clientY;
        touchY.current = e.touches[0].clientY;
        setScrollY((prev) => Math.max(0, Math.min(maxScroll, prev + dy)));
      }}
    >
      {poster && !fullLoaded && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={wantFull ? "" : alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          draggable={false}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", userSelect: "none" }}
        />
      )}
      {wantFull && (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        loading={poster ? "eager" : priority ? "eager" : "lazy"}
        fetchPriority={!poster && priority ? "high" : undefined}
        decoding="async"
        draggable={false}
        onLoad={() => { setFullLoaded(true); measure(); }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          transform: `translateY(${-scrollY}px)`,
          transition: "transform 0.12s ease-out",
          userSelect: "none",
          opacity: poster && !fullLoaded ? 0 : 1,
        }}
      />
      )}
    </div>
  );
}
