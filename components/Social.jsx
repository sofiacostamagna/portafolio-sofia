"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sofiacostamagna" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sofia-costamagna/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/i/flow/login?redirect_after_login=%2FSofiLCostamagna",
  },
];

const Social = ({ containerStyle = "", iconStyles = "" }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
