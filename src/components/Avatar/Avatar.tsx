"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";

export function Avatar() {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bottom-0 right-0 hidden md:inline-block md:absolute"
    >
      <iframe
        width="70%"
        height="400"
        src="https://www.youtube.com/embed/SBsr4vASr2Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="justify-center items-center"
      ></iframe>
    </motion.div>
  );
}
