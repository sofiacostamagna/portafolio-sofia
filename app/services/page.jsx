"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Development of responsive, accessible websites using React, Next.js, and Tailwind CSS. I specialize in translating Figma designs into clean, high-quality code — pixel-perfect and production-ready.",
  },
  {
    num: "02",
    title: "UX/UI Design",
    description:
      "Design of intuitive and visually cohesive user interfaces in Figma. From wireframes to interactive prototypes, I focus on user flows, hierarchy, and the details that make experiences feel right.",
  },
  {
    num: "03",
    title: "Design-to-Code",
    description:
      "I bridge the gap between design and engineering — taking Figma files and building them faithfully in code, maintaining design tokens, spacing, and visual consistency throughout.",
  },
  {
    num: "04",
    title: "Frontend Optimization",
    description:
      "Performance audits and improvements for existing web interfaces. From Core Web Vitals to accessibility and responsive refinements, I help make good products better.",
  },
];

const ServiceItem = ({ service, isOpen, onClick }) => {
  return (
    <div
      className="border-b border-divider py-8 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent mb-4 block">
            {service.num}
          </span>
          <h3
            className={`font-serif text-[26px] xl:text-[36px] font-medium transition-colors duration-300 ${
              isOpen ? "text-accent" : "text-font-secondary group-hover:text-accent"
            }`}
          >
            {service.title}
          </h3>
          <AnimatePresence>
            {isOpen && (
              <motion.p
                className="text-font-primary text-[15px] leading-relaxed mt-5 max-w-[560px]"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {service.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <button
          aria-expanded={isOpen}
          className={`mt-1 w-9 h-9 rounded-full border flex-shrink-0 flex justify-center items-center transition-all duration-300 ${
            isOpen
              ? "border-accent bg-accent text-white"
              : "border-divider text-font-primary group-hover:border-accent group-hover:text-accent"
          }`}
        >
          {isOpen ? <SlArrowUp size={12} /> : <SlArrowDown size={12} />}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="min-h-[80vh] py-12 xl:py-20 flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="max-w-[720px]">
          <span className="label mb-4 block">What I do</span>
          <h2 className="mb-12">Services</h2>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
