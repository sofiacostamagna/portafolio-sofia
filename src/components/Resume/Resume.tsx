"use client";
import Link from "next/link";
import Image from "next/image";
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";

const DescargarPDF: React.FC = () => {
  return (
    <div className="overflow-y-auto min-h-screen mb-16 mt-40 md:mt-40 ">
      <div className="flex flex-col md:w-auto justify-center items-center md:flex-row ">
        <motion.div
          className="flex flex-col items-center flex-1"
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Image
            src="/assets/imageCvEnglish.png"
            priority
            alt="CV en inglés"
            width={300}
            height={300}
            className="rounded mb-2 md:mb-4"
          />
          <div className="items-center">
            <p className="bg-secondary mb-5 text-white px-4 py-2 rounded transition-transform transform hover:scale-110 flex items-center ">
              <Link legacyBehavior href="/assets/Sofia_Costamagna.pdf" download>
                <a target="_blank" rel="noopener noreferrer">
                  Download English
                </a>
              </Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center flex-1"
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Image
            src="/assets/imageCVSpan.png"
            priority
            alt="CV en español"
            width={300}
            height={300}
            className="rounded mb-2 md:mb-4"
          />
          <div className="flex items-center">
            <p className="relative  bg-secondary text-white px-4 py-2 rounded transition-transform transform hover:scale-110 flex items-center">
              <Link
                legacyBehavior
                href="/assets/Sofia_Laura_Costamagna.pdf"
                download
              >
                <a target="_blank" rel="noopener noreferrer">
                  Download Spanish
                </a>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DescargarPDF;
