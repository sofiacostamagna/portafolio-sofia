"use client";

import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center p-6">
      {/* Outer subtle ring */}
      <div className="absolute w-[292px] h-[292px] sm:w-[392px] sm:h-[392px] lg:w-[472px] lg:h-[472px] rounded-full border border-accent/15" />

      {/* Accent ring */}
      <div className="absolute w-[276px] h-[276px] sm:w-[376px] sm:h-[376px] lg:w-[456px] lg:h-[456px] rounded-full border-2 border-accent/50" />

      {/* Image */}
      <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden bg-accent/10">
        <Image
          src="/photo1.png"
          priority
          quality={100}
          fill
          alt="Sofía Costamagna"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Photo;
