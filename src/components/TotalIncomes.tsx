import formatPrice from "@/utils/formatPrice";
import React from "react";

interface TotalIncomesProps {
  total: number;
}

function TotalIncomes({ total }: TotalIncomesProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-primarylighter border border-border rounded-md mt-4 text-2xl uppercase">
      <p>Total income:</p>
      <p className="text-lime-500">
        <span>{formatPrice(total)}</span>
      </p>
    </div>
  );
}

export default TotalIncomes;
