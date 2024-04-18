"use client";
import React from "react";
import { Image } from "@nextui-org/react";

async function Avatar({ avatar }: any) {
  return (
    <div className="flex gap-2 sm:items-center sm:justify-start justify-center">
      <div className="rounded-full xl:w-12 xl:h-12 2xl:flex lg:hidden md:hidden sm:hidden items-center justify-center">
        <Image
          src={avatar.profile_picture}
          alt="Perfil profile"
          className="rounded-full object-contain border-2 border-border"
        />
      </div>
      <div className="sm:flex sm:flex-col hidden flex-shrink">
        <p className="text-neutral-50 2xl:text-lg xl:text-sm text-xs text-nowrap font-bold uppercase glitch">
          {avatar.username}
        </p>
        <p className="text-xs lg:text-sm text-secondary">R$ 0</p>
      </div>
    </div>
  );
}

export { Avatar };
