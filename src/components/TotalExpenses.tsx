import formatPrice from "@/utils/formatPrice";
import React from "react";

interface TotalExpensesProps {
  total: number;
}

function TotalExpenses({ total }: TotalExpensesProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-primarylighter border border-border rounded-md mt-4 text-2xl uppercase">
      <p>Total expense:</p>
      <p className="text-secondary">
        -<span>{formatPrice(total)}</span>
      </p>
    </div>
  );
}

export default TotalExpenses;
