"use client";
// Importa los módulos y componentes necesarios
import QRCode from "qrcode.react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import Image from "next/image";

// Define la función del componente Contact
// ... (importaciones)

// ... (importaciones)

// ... (import statements)

export function Contact() {
  const phoneNumber = "+54 387 4545 109";
  const email = "sofiacostamagna@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/sofia-costamagna/";
  const imageUrl = "/assets/sofi2.JPG";

  return (
    <motion.div
      className="flex flex-col items-center"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={fadeIn("up", 0.5)}
    >
      {/* Contenido principal */}
      <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
        <div className="flex flex-col items-center md:items-start md:mr-8 text-center md:text-left">
          <motion.h1 className="my-5 text-4xl md:text-2xl lg:text-4xl text-center md:text-left">
            Contact
            <span className="text-secondary"> Me </span>
          </motion.h1>
          <motion.div className="flex items-center text-lg md:text-lg lg:text-xl space-x-2 mb-4">
            <FiPhone size={20} />
            <p>{phoneNumber}</p>
          </motion.div>
          <motion.div className="flex items-center text-lg md:text-lg lg:text-xl space-x-2 mb-4">
            <MdOutlineEmail size={20} />
            <p>{email}</p>
          </motion.div>
          <motion.div
            className="mb-4"
            variants={fadeIn("up", 0.7)} // adjust the animation properties
          >
            <QRCode value={linkedinLink} size={200} />
          </motion.div>
        </div>
        <motion.div
          className="mb-4 md:mb-0 md:ml-8 flex-shrink-0"
          variants={fadeIn("right", 0.7)} // adjust the animation properties
        >
          <Image
            src={imageUrl}
            alt="Sofia"
            width={400}
            height={400}
            className="rounded-full md:h-[200] md:w-[200] object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
