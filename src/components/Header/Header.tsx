"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Link from "next/link";
import { socialNetworks } from "./dataHeader";

export function Header() {
  return (
    <div className="absolute z-20 inline-block w-full top-5 md:top-10">
      <motion.div
        variants={fadeIn("up", 0.5)} // se mueve de abajo hacia arriba
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="container justify-between mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-4xl text-center text-white md:text-lef">
              S<span className="text-secondary">C</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src }) => (
              <Link
                key={src}
                href={src}
                target="_blank" //para que se abra en otra pestaña
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
