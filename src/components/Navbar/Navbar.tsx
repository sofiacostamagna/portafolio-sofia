// Import the "client" module from the "use" package
"use client";
// Import the "usePathname" hook from "next/navigation"
import { usePathname } from "next/navigation";
// Import the "motion" component from the "framer-motion" library
import { motion } from "framer-motion";
// Import the "fadeIn" function from the custom motion transitions utility
import { fadeIn } from "@/utils/motionTransitions";
// Import the "dataNavbar" array from the "Navbar.data" file
import { dataNavbar } from "./Navbar.data";
// Import the "Link" component from "next/link"
import Link from "next/link";

// Define the functional component "Navbar"
export function Navbar() {
  // Get the current pathname using the "usePathname" hook
  const pathName = usePathname();

  // Return JSX for the "Navbar" component
  return (
    <motion.div
      className="fixed bottom-0 z-20 flex flex-col items-center w-full mt-auto md:justify-center h-max md:top-1/4 md:right-10 md:w-16 md:max-w-md md:h-screen"
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {/* Navbar container with motion effects */}
      <div className="flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-black/20 backdrop-blur-sm md:rounded-full">
        {/* Map through the dataNavbar array and render each navigation item */}
        {dataNavbar.map(({ name, path, icon }) => (
          <div key={name}>
            {/* Navigation link using the "Link" component from "next/link" */}
            <Link
              href={path}
              className={`${
                path === pathName && "currentIconPage"
              } group transition-all duration-300`}
            >
              {/* Navigation icon and optional current page indicator */}
              <div className="absolute right-0 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center">
                <div className="relative flex items-center p-2 leading-none text-black capitalize bg-white rounded-sm">
                  {name}
                </div>
                <div className="absolute border-l-8 border-r-0 border-solid border-l-white border-y-transparent border-y-4 -right-2" />
              </div>
              {icon}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
