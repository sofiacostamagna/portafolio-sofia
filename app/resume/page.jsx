"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const experience = {
  title: "Experience",
  items: [
    {
      company: "Freelance",
      position: "Frontend Developer & UX/UI Designer",
      duration: "Mar 2024 — Present",
      description:
        "Specialized in frontend development with React, Next.js, and TypeScript. Designed and built interfaces in Figma, ensuring brand alignment and optimized user experience across multiple client projects.",
    },
    {
      company: "Ambassadoria",
      position: "Frontend Developer & UX/UI Designer",
      duration: "Aug 2023 — Present · Part-time",
      description:
        "Contributed to building user-friendly, visually consistent interfaces using TypeScript, Next.js, and Figma. Responsible for improving platform usability and integrating new features.",
    },
    {
      company: "Anywhere",
      position: "UX/UI Designer & Frontend Developer",
      duration: "Mar 2023 — Aug 2023",
      description:
        "Designed user interfaces in Figma ensuring brand compliance and a cohesive user experience across the product.",
    },
    {
      company: "No Country",
      position: "Frontend Developer",
      duration: "Aug 2023 — Sep 2023",
      description:
        "Member of a cross-functional frontend team. Delivered features using JavaScript, React, Next.js, and React Hook Form. Collaborated on UI design in Figma and managed code via GitHub.",
    },
  ],
};

const education = {
  title: "Education",
  items: [
    {
      institution: "Codo a Codo",
      degree: "Frontend Development (PHP & Frontend)",
      duration: "2024",
      certificate: "certificate.png",
    },
    {
      institution: "Henry Bootcamp",
      degree: "Full Stack Developer",
      duration: "2023 · 800 hours",
      certificate: "certificate1.png",
    },
    {
      institution: "Udemy",
      degree: "UX/UI Design & Figma",
      duration: "22 hours · In progress",
    },
    {
      institution: "University of Buenos Aires (UBA)",
      degree: "Advanced Excel",
      duration: "20 weeks · 198 hours",
    },
  ],
};

const skills = {
  title: "Skills",
  items: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
  ],
};

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] py-12 xl:py-20"
    >
      <div className="container mx-auto">
        <span className="label mb-4 block">My background</span>
        <h2 className="mb-12">Resume</h2>

        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12">
          {/* Tab list */}
          <TabsList className="flex flex-row xl:flex-col w-full xl:w-[200px] gap-1 flex-shrink-0 bg-transparent p-0 h-auto justify-start">
            {["experience", "education", "skills"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-font-primary data-[state=active]:text-accent data-[state=active]:border-b-2 xl:data-[state=active]:border-b-0 xl:data-[state=active]:border-l-2 border-accent px-4 py-2.5 text-left justify-start rounded-none bg-transparent hover:text-font-secondary transition-colors"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="flex-1">
            {/* Experience */}
            <TabsContent value="experience">
              <div className="space-y-10">
                {experience.items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 xl:grid-cols-[180px_1fr] gap-4 xl:gap-10 border-b border-divider pb-10 last:border-0 last:pb-0"
                  >
                    <div>
                      <span className="font-mono text-[11px] text-accent tracking-wide block leading-relaxed">
                        {item.duration}
                      </span>
                      <span className="font-mono text-[12px] text-font-secondary font-medium mt-1 block">
                        {item.company}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-[20px] font-medium text-font-secondary mb-3">
                        {item.position}
                      </h3>
                      <p className="text-font-primary text-[14px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="space-y-10">
                {education.items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 xl:grid-cols-[180px_1fr] gap-4 xl:gap-10 border-b border-divider pb-10 last:border-0 last:pb-0"
                  >
                    <div>
                      <span className="font-mono text-[11px] text-accent tracking-wide block">
                        {item.duration}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-[20px] font-medium text-font-secondary mb-1">
                        {item.degree}
                      </h3>
                      <span className="font-mono text-[12px] text-font-primary">
                        {item.institution}
                      </span>
                      {item.certificate && (
                        <div className="mt-4">
                          <button
                            onClick={() => openModal(item.certificate)}
                            className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors"
                          >
                            View Certificate →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.items.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger className="w-full h-[110px] border border-divider hover:border-accent rounded-lg flex justify-center items-center group transition-all duration-300">
                          <div className="text-5xl text-font-primary group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-mono text-[11px] uppercase tracking-wide">
                            {skill.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Certificate modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-font-secondary/60 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-lg relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 font-mono text-[11px] uppercase tracking-wide text-font-primary hover:text-accent transition-colors"
            >
              Close ✕
            </button>
            {modalContent && (
              <img
                src={modalContent}
                alt="Certificate"
                className="w-full h-auto rounded mt-4"
              />
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Resume;
