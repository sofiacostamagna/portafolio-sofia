"use client";
// Importa los módulos y componentes necesarios
import QRCode from "qrcode.react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionTransitions";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

// Define la función del componente Contact
// ... (importaciones)

// ... (importaciones)

export function Contact() {
  const phoneNumber = "+54 387 4545 109";
  const email = "sofiacostamagna@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/sofia-costamagna/";
  const imageUrl = "/assets/sofi2.JPG";

  return (
    <div className="flex flex-col items-center">
      {/* Contenido principal */}
      <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex md:max-w-4xl pb-36 md:pb-0">
        <div className="flex flex-col items-center md:items-start md:mr-8 text-center md:text-left">
          <motion.h1
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-5 text-4xl md:text-2xl lg:text-4xl text-center md:text-left "
          >
            Contact
            <span className="text-secondary"> Me </span>
          </motion.h1>
          <div className="flex items-center text-lg md:text-lg lg:text-xl space-x-2 mb-4">
            <FiPhone size={20} />
            <p>{phoneNumber}</p>
          </div>
          <div className="flex items-center text-lg md:text-lg lg:text-xl space-x-2 mb-4">
            <MdOutlineEmail size={20} />
            <p>{email}</p>
          </div>
          <div className="mb-4">
            <QRCode value={linkedinLink} size={200} />
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:ml-8 flex-shrink-0">
          <Image
            src={imageUrl}
            alt="Sofia"
            width={400}
            height={400}
            className="rounded-full md:h-[200] md:w-[200] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
