// Import the "client" module from the "use" library
"use client";
// Import the "Link" and "Image" components from "next/link" and "next/image" respectively
import Link from "next/link";
import Image from "next/image";
// Import the "fadeIn" function from the "motionTransitions" file in the "@/utils" directory
import { fadeIn } from "@/utils/motionTransitions";
// Import the "motion" component from the "framer-motion" library
import { motion } from "framer-motion";

// Define the functional component "DownloadPDF"
const DownloadPDF: React.FC = () => {
  return (
    <div className="overflow-y-auto min-h-screen mb-16 mt-10 md:mt-60 ">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Section for the English CV */}
        <motion.div
          className="flex flex-col items-center flex-1"
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* Display the English CV image using the "Image" component */}
          <Image
            src="/assets/imageCvEnglish.png"
            priority
            alt="CV in English"
            width={300}
            height={300}
            className="rounded mb-2 md:mb-4"
          />
          <div className="items-center">
            {/* Download link for the English CV */}
            <p className="bg-secondary mb-5 text-white px-4 py-2 rounded transition-transform transform hover:scale-110 flex items-center ">
              <Link legacyBehavior href="/assets/Sofia_Costamagna.pdf" download>
                <a target="_blank" rel="noopener noreferrer">
                  Download English
                </a>
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Section for the Spanish CV */}
        <motion.div
          className="flex flex-col items-center flex-1"
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {/* Display the Spanish CV image using the "Image" component */}
          <Image
            src="/assets/imageCVSpan.png"
            priority
            alt="CV in Spanish"
            width={300}
            height={300}
            className="rounded mb-2 md:mb-4"
          />
          <div className="flex items-center">
            {/* Download link for the Spanish CV */}
            <p className="relative bg-secondary text-white px-4 py-2 rounded transition-transform transform hover:scale-110 flex items-center">
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

export default DownloadPDF;
