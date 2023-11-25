import {
  RiHome4Line,
  RiAccountPinCircleLine,
  RiBriefcase2Line,
  RiContactsBook2Line,
  RiSdCardLine,
} from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },

  {
    name: "projects",
    path: "/project",
    icon: <RiBriefcase2Line size="30" />,
  },
  {
    name: "video",
    path: "/video",
    icon: <IoVideocamOutline size="30" />,
  },

  {
    name: "contac me",
    path: "/contact",
    icon: <RiContactsBook2Line size="30" />,
  },
];
