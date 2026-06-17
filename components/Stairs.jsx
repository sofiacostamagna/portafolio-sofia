"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
};

const Stairs = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="h-full w-full bg-white absolute"
        />
      ))}
    </>
  );
};

export default Stairs;
