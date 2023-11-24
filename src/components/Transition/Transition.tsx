"use client";
// Import necessary dependencies
import { AnimatePresence, motion } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motionTransitions";

// Define the Transition component
export function Transition() {
  return (
    <>
      {/* Use AnimatePresence to wrap the motion.div elements. This ensures that the elements are only rendered when they are being animated. */}
      <AnimatePresence mode="wait">
        <div>
          {/* Define the first motion.div element with the necessary properties. */}
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          {/* Define the second motion.div element with the necessary properties. */}
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#d946ef] opacity-50"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}

//
//This code defines a `Transition` component that uses Framer Motion for animations. The component consists of two `motion.div` elements, each with different properties. The `AnimatePresence` component ensures that the elements are only rendered when they are being animated..</s>
