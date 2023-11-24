"use client";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import { cardContent } from "./Project.data";
import { useState } from "react";

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
      opacity: 1,
    },
    collapsed: {
      width: "400px",
      opacity: 0.9,
    },
  };

  return (
    <div className="grid pb-32 md:min-h-screen mt-40 md:mt-0 place-items-center">
      <div>
        <motion.h1
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-5 text-3xl text-center md:text-4-xl"
        >
          My <span className="text-secondary">fulfilled projects.</span>
        </motion.h1>
        <motion.div
          className="flex flex-col items-center h-full gap-10 px-2 md:flex-row"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {cardContent.map(
            ({
              id,
              title,
              imageUrl,
              description,
              skills,
              pageLink,
              videoLink,
            }) => (
              <motion.div
                key={id}
                className={`card cursor-pointer h-[350px] w-full md:w-[400px] bg-cover rounded-[20px] ${
                  id === expandedIndex ? "expanded" : "collapsed"
                }`}
                variants={cardVariants}
                animate={id === expandedIndex ? "expanded" : "collapsed"}
                exit={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => handleClick(id)}
                style={{
                  backgroundImage: `url(/assets/${imageUrl})`,
                  backgroundSize: id === expandedIndex ? "contain" : "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Título siempre visible */}
                <div className="flex flex-col justify-end h-full">
                  <div className="card-footer rounded-b-[20px] bg-gray-600 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                    <h2
                      className={`text-xl mb-2 font-semibold text-center text-white ${
                        id !== expandedIndex && "mt-16 justify-center "
                      }`}
                    >
                      {title}
                    </h2>

                    {/* Contenido adicional si está expandido */}
                    {id === expandedIndex && (
                      <>
                        <p className="text-sm justify-center items-center">
                          {description}
                        </p>
                        <div className="flex gap-5 mt-3 mb-3">
                          {skills.map((data, index) => (
                            <p key={index}>{data.icon}</p>
                          ))}
                        </div>
                        {/* Cambiar enlaces a botones */}
                        <div className="mt-3 mb-3">
                          {pageLink && (
                            <a
                              href={pageLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mx-2 py-1 px-4 bg-secondary text-white rounded-full"
                            >
                              Open page
                            </a>
                          )}
                          {videoLink && (
                            <a
                              href={videoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mx-2 py-1 px-4 bg-secondary text-white rounded-full"
                            >
                              Watch video
                            </a>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
