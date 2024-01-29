import {
  RiHome4Line,
  RiAccountPinCircleLine,
  RiBriefcase2Line,
  RiContactsBook2Line,
} from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";

// Array de datos para la barra de navegación
export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: (
      <RiHome4Line className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl" />
    ),
  },
  {
    name: "about",
    path: "/about",
    icon: (
      <RiAccountPinCircleLine className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl" />
    ),
  },
  {
    name: "projects",
    path: "/project",
    icon: (
      <RiBriefcase2Line className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl" />
    ),
  },
  {
    name: "video",
    path: "/video",
    icon: (
      <IoVideocamOutline className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl" />
    ),
  },
  {
    name: "contact me",
    path: "/contact",
    icon: (
      <RiContactsBook2Line className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl" />
    ),
  },
];
