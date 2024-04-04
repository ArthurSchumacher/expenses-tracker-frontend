import formatPrice from "@/utils/formatPrice";
import React from "react";

interface StatusProps {
  total_income: number;
  total_expenses: number;
  total_balance: number;
}

function Status({ total_income, total_expenses, total_balance }: StatusProps) {
  return (
    <div className="grid grid-cols-3 mt-4 gap-4">
      <div className="sm:col-span-1 col-span-3 w-full border border-border bg-primarylighter p-4 rounded-md">
        <p className="text-nowrap text-lg">Total Income</p>
        <p className="text-lg text-lime-500">{formatPrice(total_income)}</p>
      </div>
      <div className="sm:col-span-1 col-span-3 w-full border border-border bg-primarylighter p-4 rounded-md">
        <p className="text-nowrap text-lg">Total Expenses</p>
        <p className="text-lg text-secondary">{formatPrice(total_expenses)}</p>
      </div>
      <div className="sm:col-span-1 col-span-3 w-full border border-border bg-primarylighter p-4 rounded-md">
        <p className="text-nowrap text-lg">Total Balance</p>
        <p className="text-lg">{formatPrice(total_balance)}</p>
      </div>
    </div>
  );
}

export default Status;
