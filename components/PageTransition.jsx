"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

// Al navegar entre páginas el contenido entra con un fundido corto.
// En la primera carga NO se anima: el HTML del servidor se ve de inmediato
// (clave para el LCP — antes una capa tapaba la página 1,4 s).
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const firstRender = useRef(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={firstRender.current || reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
