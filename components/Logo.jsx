import Link from "next/link";

// Firma "Sofía." — Fraunces itálica con el punto violeta
export default function Logo({ size = 26, className = "" }) {
  return (
    <Link
      href="/"
      aria-label="Sofía Costamagna — Home"
      className={`font-serif italic font-semibold leading-none tracking-tight w-fit ${className}`}
      style={{ fontSize: size }}
    >
      Sofía<span className="text-accent">.</span>
    </Link>
  );
}
