"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Language Learning",
    title: "Mate Speak",
    description:
      "An innovative language learning platform connecting people worldwide through interactive live rooms and real-time conversation practice.",
    stack: ["Next.js", "Tailwind CSS", "Figma"],
    image: "/MateSpeak.png",
    live: "https://s11-15-m-csharp-react.vercel.app/",
    video: "https://www.youtube.com/watch?v=NkRgB-PTmqA",
  },
  {
    num: "02",
    category: "Event Discovery",
    title: "Me Sumo",
    description:
      "A dynamic MVP designed to simplify event discovery across multiple cities — search, filter, and join events near you.",
    stack: ["React", "Tailwind CSS", "Figma"],
    image: "/MeSumo.png",
    live: "https://me-sumo-app.vercel.app/",
    video: "https://www.youtube.com/watch?v=GqakF4RFBbU",
  },
  {
    num: "03",
    category: "Non-profit & E-commerce",
    title: "Petbook",
    description:
      "A platform for a non-profit dedicated to pet adoption — connecting animals in need with loving families.",
    stack: ["React", "Tailwind CSS", "Figma"],
    image: "/PetBook.png",
    live: "https://proyecto-final-pet-book.vercel.app/",
    video: "https://www.youtube.com/watch?v=KHBpbhKo0Jw",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-20"
    >
      <div className="container mx-auto">
        <span className="label mb-4 block">My work</span>
        <h2 className="mb-12">Selected Projects</h2>

        <div className="flex flex-col xl:flex-row xl:gap-16 items-start">
          {/* Left: project info */}
          <div className="w-full xl:w-[45%] flex flex-col order-2 xl:order-none mt-10 xl:mt-0">
            <span className="font-mono text-[72px] leading-none font-bold text-divider select-none block mb-6">
              {project.num}
            </span>
            <h3 className="font-serif text-[30px] xl:text-[40px] font-medium text-font-secondary mb-2">
              {project.title}
            </h3>
            <span className="label mb-5 block">{project.category}</span>
            <p className="text-font-primary text-[15px] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] text-accent border border-accent/30 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 border-t border-divider pt-6">
              <Link href={project.live} target="_blank">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-font-secondary border-b border-divider pb-0.5 hover:text-accent hover:border-accent transition-colors flex items-center gap-1.5">
                  Live <BsArrowUpRight size={11} />
                </span>
              </Link>
              {project.video && (
                <Link href={project.video} target="_blank">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-font-secondary border-b border-divider pb-0.5 hover:text-accent hover:border-accent transition-colors flex items-center gap-1.5">
                    Video <FaVideo size={11} />
                  </span>
                </Link>
              )}
            </div>
          </div>

          {/* Right: slider */}
          <div className="w-full xl:w-[55%] order-1 xl:order-none">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setProject(projects[swiper.activeIndex])
              }
              className="h-[280px] xl:h-[400px] rounded-lg overflow-hidden"
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={p.image}
                      fill
                      alt={p.title}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
