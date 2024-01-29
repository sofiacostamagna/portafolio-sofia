// Import the "client" module from the "use" package
"use client";
// Import the "fadeIn" function from the custom motion transitions utility
import { fadeIn } from "@/utils/motionTransitions";
// Import the "motion" component from the "framer-motion" library
import { motion } from "framer-motion";
// Import the "Link" component from the "next/link" library
import Link from "next/link";
// Import the "socialNetworks" array from the "dataHeader" file
import { socialNetworks } from "./dataHeader";

// Define the functional component "Header"
export function Header() {
  // Return JSX for the "Header" component
  return (
    <div className="absolute z-20 inline-block w-full top-5 md:top-10">
      {/* Apply motion effects to the container using "framer-motion" */}
      <motion.div
        variants={fadeIn("up", 0.5)} // Move from bottom to top animation
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {/* Header content within a container */}
        <div className="container justify-between mx-auto md:flex">
          {/* Link to the home page with a stylized title */}
          <Link href="/">
            <h1 className="my-3 text-4xl text-center text-white md:text-lef">
              S<span className="text-secondary">C</span>
            </h1>
          </Link>
          {/* Social network links displayed in a flex container */}
          <div className="flex items-center justify-center gap-7">
            {/* Map through socialNetworks array and render each link */}
            {socialNetworks.map(({ logo, src }) => (
              <Link
                key={src}
                href={src}
                target="_blank" // Open in a new tab
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
