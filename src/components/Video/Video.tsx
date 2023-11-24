"use client";
// Import necessary dependencies
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";

// Define the Video component
export function Video() {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-2 text-3xl md:text-3xl text-center md:my-5"
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
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full md:w-[600px] md:h-[450px] lg:w-[600px] lg:h-[450px] xl:w-[600px] xl:h-[450px]"
              src="https://www.youtube.com/embed/SBsr4vASr2Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

//
//In this code, we have a `Video` component that displays a YouTube video. The component uses the `motion` library from Framer for animations. The `fadeIn` function is imported from the `@/utils/motionTransitions` module and is used to define the animation for the title and video.
//
//The component is wrapped in a `div` with a `h-screen` class, which sets its height to 100% of the viewport height. Inside this `div`, we have a `div` with a `flex flex-col justify-center items-center min-h-screen` class, which centers its content vertically and horizontally.
//
//The title is displayed using a `motion.h1` component, which applies the `fadeIn` animation. The video is displayed using an `iframe` element inside a `div` with an `aspect-w-16 aspect-h-9` class, which maintains a 16:9 aspect ratio.
//
//The `Video` component can be used in any part of the application where you want to display a YouTube video with a title..</s>
