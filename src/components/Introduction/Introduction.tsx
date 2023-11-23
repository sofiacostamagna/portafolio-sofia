import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import Image from "next/image";

export function Introduction() {
  return (
    <div className="bg-[#131424]/60 w-full z-10">
      {/* A semi-transparent background layer */}
      <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
        {/* A container with a grid layout for the introduction section */}
        <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
          {/* A motion-controlled div that displays an image of Sofia Costamagna */}
          <motion.div
            className="hidden w-auto h-auto mx-auto md:block"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Image
              src="/assets/image_6487327.JPG"
              priority
              width="900"
              height="700"
              alt="Sofia Costamagna"
              className="p-10"
            />
          </motion.div>

          {/* A motion-controlled div that contains the introduction text and buttons */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <h1 className="mb-5 text-3xl leading-tight md:mb-10">
              Sofía Costamagna
              <br />
              <span className="text-secondary text-2xl ">
                {" "}
                Frontend Developer & UX/UI Designer
              </span>
            </h1>
            <p className="max-w-sm mb-10 text-lg md:max-w-lg md-0 md-16 md:text">
              I am a passionate Frontend Developer and UUI who is ed in the
              exciting world of technology. My focus is on continuous learning
              and improvement, which drives me to embrace challenges and seek
              creative solutions. My goal is to bring your ideas to life and
              deliver exceptional experiences to users. <br />I am excited about
              the opportunity to create something amazing together!
            </p>

            <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
              <a
                href="/project"
                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/80"
              >
                View projects
              </a>
              <a
                href="/contact"
                className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/80"
              >
                Contact me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
