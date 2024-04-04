import formatPrice from "@/utils/formatPrice";
import React from "react";

interface MinMaxConProps {
  title: string;
  min: number;
  max: number;
}

function MinMaxCon({ title, min, max }: MinMaxConProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-x-4 mb-4 mt-8">
      <div className="w-full flex items-center justify-start text-xs">Min</div>
      <div className="w-full flex items-center justify-center text-lg">
        {title}
      </div>
      <div className="w-full flex items-center justify-end text-xs">Max</div>
      <div className="col-span-3 w-full flex items-center justify-between text-xs">
        <p>{formatPrice(min)}</p>
        <p>{formatPrice(max)}</p>
      </div>
    </div>
  );
}

export default MinMaxCon;
