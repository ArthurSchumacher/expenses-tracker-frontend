import React from "react";
import Image from "next/image";

function Avatar() {
  return (
    <div className="flex gap-2 sm:items-center sm:justify-start justify-center">
      <div className="rounded-full border-2 border-border xl:w-12 xl:h-12 2xl:flex lg:hidden md:hidden sm:hidden">
        <Image
          src={"/perfil.jpg"}
          alt="Perfil profile"
          width={184}
          height={184}
          className="rounded-full object-cover"
        />
      </div>
      <div className="sm:flex sm:flex-col hidden flex-shrink">
        <p className="text-neutral-50 2xl:text-lg xl:text-sm text-xs text-nowrap font-bold uppercase glitch">
          Arthur Schumacher
        </p>
        <p className="text-xs lg:text-sm text-secondary">R$ 0</p>
      </div>
    </div>
  );
}

export default Avatar;
