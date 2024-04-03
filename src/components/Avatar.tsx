import React from "react";
import { GoPerson } from "react-icons/go";

function Avatar() {
  return (
    <div className="flex gap-2 sm:items-center sm:justify-start justify-center">
      <GoPerson className="text-neutral-50 border border-border rounded-full sm:text-6xl text-3xl sm:mt-0 mt-4 p-1 bg-primarylighter" />
      <div className="sm:flex sm:flex-col hidden">
        <p className="text-neutral-50 text-base font-bold uppercase glitch">
          Arthur Schumacher
        </p>
        <p className="text-xs text-secondary">R$ 1000</p>
      </div>
    </div>
  );
}

export default Avatar;
