"use client";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motionTransitions";

export function Video() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-5 text-2xl md:text-4xl text-center md:my-10"
        >
          Find out more <br />
          <span className="text-secondary">about me.</span>
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3"
        >
          {/* Aquí se agrega el video de YouTube */}
          <iframe
            width="600"
            height="450"
            src="https://www.youtube.com/embed/SBsr4vASr2Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
