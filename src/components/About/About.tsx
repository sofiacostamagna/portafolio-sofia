"use client";
import { motionTransitionsAbout } from "@/utils/motionTransitions";

import { motion } from "framer-motion";
import { dataAboutSkills } from "./About.data";

import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";
import SkillsSection from "./Skills.data";
import ExperienceSection from "./Experience.data";
import StudiesSection from "./Studies.data";

export function About() {
  const [index, setIndex] = useState(0);

  const sections = [
    { id: 0, text: "Skills", component: <SkillsSection /> },
    { id: 1, text: "Experience", component: <ExperienceSection /> },
    { id: 2, text: "Studies", component: <StudiesSection /> },
  ];

  const currentSection = sections[index];

  return (
    <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
      <motion.div
        initial={motionTransitionsAbout.initial}
        animate={motionTransitionsAbout.animate}
        transition={motionTransitionsAbout.transition}
      >
        <h1 className="mb-6 md:text-4xl">
          Transforming ideas
          <br /> <span className="text-secondary">great designs</span>
        </h1>
        <p>
          I am passionate about front-end development and UX/UI design! Check
          out my portfolio to see the cool things I&apos;ve worked on and the
          skills I&apos;ve picked up along the way.{" "}
        </p>

        <div className="flex flex-col mt-5 mb-3 md:flex-row justify-evenly md:mt-28 md:mb-5">
          {dataAboutSkills.map((dataText, itemIndex) => {
            const { id, text } = dataText;

            return (
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
            );
          })}
        </div>
        <div className="max-w-4xl p-4 mx-auto bg-secondary/20 rounded-xl">
          {currentSection.component}
        </div>
      </motion.div>
    </div>
  );
}
