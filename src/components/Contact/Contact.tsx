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
export function Contact() {
  const phoneNumber = "+54 387 4545 109";
  const email = "sofiacostamagna@gmail.com";
  const linkedinLink = "https://www.linkedin.com/in/sofia-costamagna/";
  const imageUrl = "/assets/sofi2.jpg";

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row items-center justify-center container mx-auto">
      {/* Sección de información de contacto a la izquierda */}
      <div className="flex flex-col items-center md:items-start md:mr-8 text-center md:text-left">
        {/* Título animado */}
        <motion.h1
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-5 text-4xl md:text-2xl lg:text-4xl"
        >
          Contáct
          <span className="text-secondary"> Me </span>
        </motion.h1>
        {/* Número de teléfono */}
        <div className="flex items-center text-lg md:text-lg lg:text-xl space-x-2 mb-4">
          <FiPhone size={20} />
          <p>{phoneNumber}</p>
        </div>
        {/* Dirección de correo electrónico */}
        <div className="flex items-center text-lg md:text-lg lg:text-xl space-x-2 mb-4">
          <MdOutlineEmail size={20} />
          <p>{email}</p>
        </div>
        {/* Código QR para LinkedIn */}
        <div className="mb-4">
          <QRCode value={linkedinLink} size={200} />
        </div>
      </div>
      {/* Sección de la imagen a la derecha */}
      <div className="mb-4 md:mb-0 md:ml-8">
        <Image
          src={imageUrl}
          alt="Sofia"
          width={400}
          height={400}
          className="rounded-full  md:w-200 md:h-200"
        />
      </div>
    </div>
  );
}
