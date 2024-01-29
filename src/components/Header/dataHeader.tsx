import { RiInstagramLine, RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export const socialNetworks = [
  {
    logo: (
      <FaLinkedin className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl" />
    ),
    src: "https://www.linkedin.com/in/sofia-costamagna/",
  },
  {
    logo: (
      <FaSquareGithub className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl" />
    ),
    src: "https://github.com/sofiacostamagna",
  },
  {
    logo: (
      <RiInstagramLine className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl" />
    ),
    src: "https://www.instagram.com/costamagnasofi/",
  },
  {
    logo: (
      <RiTwitterXFill className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl" />
    ),
    src: "https://twitter.com/SofiLCostamagna",
  },
];
