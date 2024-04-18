import { Money } from "@/types/money";
import formatPrice from "@/utils/formatPrice";
import React from "react";

interface HistoryItemProps {
  money: Money;
  isIncome: boolean;
}

function HistoryItem({ money, isIncome }: HistoryItemProps) {
  return (
    <div
      className={`w-full border border-border bg-primarylighter p-4 rounded-md flex items-center justify-between mb-4 ${
        isIncome === true ? "text-lime-500" : "text-secondary"
      }`}
    >
      <p className="text-lg">{money.title}</p>
      <p>
        {isIncome === true ? "" : "-"}
        {formatPrice(money.amount)}
      </p>
    </div>
  );
}

export default HistoryItem;
