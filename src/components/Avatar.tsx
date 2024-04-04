import React from "react";
import { GoPerson } from "react-icons/go";

function Avatar() {
  return (
    <div className="flex gap-2 sm:items-center sm:justify-start justify-center">
      <div className="sm:flex sm:flex-col hidden">
        <p className="text-neutral-50 text-xs text-nowrap font-bold uppercase glitch">
          Arthur Schumacher
        </p>
        <p className="text-xs text-secondary">R$ 0</p>
      </div>
    </div>
  );
}

export default Avatar;
