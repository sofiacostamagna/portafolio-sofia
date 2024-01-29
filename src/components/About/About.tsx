// Importing necessary dependencies and utilities
"use client";
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import SkillsSection from "./Skills.data";
import ExperienceSection from "./Experience.data";
import StudiesSection from "./Studies.data";

// Definition of the About component
export function About() {
  // State to manage the active section index
  const [index, setIndex] = useState(0);

  // Array of sections with their corresponding text and component
  const sections = [
    { id: 0, text: "Skills", component: <SkillsSection /> },
    { id: 1, text: "Experience", component: <ExperienceSection /> },
    { id: 2, text: "Studies", component: <StudiesSection /> },
  ];

  // Get the currently active section
  const currentSection = sections[index];

  // JSX structure representing the About component
  return (
    <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
      <motion.div
        className="w-full h-auto mx-auto md:block overflow-hidden mt-36"
        initial={motionTransitionsAbout.initial}
        animate={motionTransitionsAbout.animate}
        transition={motionTransitionsAbout.transition}
      >
        {/* Title and introduction */}
        <h1 className="mb-5 text-3xl leading-tight md:mb-10 text-center md:text-left">
          Transforming ideas
          <br /> <span className="text-secondary">into great designs</span>
        </h1>
        <p>
          Check out my portfolio to see the cool things I&apos;ve worked on and
          the skills I&apos;ve picked up along the way.{" "}
        </p>

        {/* Tabs for switching between sections */}
        <div className="flex flex-col mt-5 mb-3 md:flex-row justify-evenly ">
          {sections.map(({ id, text }, itemIndex) => (
            <div
              key={id}
              className={`${
                index === id
                  ? "text-secondary duration-300 transition-all border-secondary"
                  : "border-white"
              } 
                cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
              onClick={() => setIndex(itemIndex)}
            >
              <p className="mr-4 text-md md:text-lg">{text}</p>
              {index === id ? <BiDownArrow /> : <BiLeftArrow />}
            </div>
          ))}
        </div>

        {/* Displaying the content of the current section */}
        <div className="max-w-4xl p-4 mx-auto bg-secondary/20 rounded-xl">
          {currentSection.component}
        </div>
      </motion.div>
    </div>
  );
}
