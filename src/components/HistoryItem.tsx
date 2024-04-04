import { Money } from "@/types/money";
import formatPrice from "@/utils/formatPrice";
import React from "react";

interface HistoryItemProps {
  money: Money;
}

function HistoryItem({ money }: HistoryItemProps) {
  return (
    <div
      className={`w-full border border-border bg-primarylighter p-4 rounded-md flex items-center justify-between mb-4 ${
        money.categoryId === 1 ? "text-lime-500" : "text-secondary"
      }`}
    >
      <p className="text-lg">{money.title}</p>
      <p>-{formatPrice(money.price)}</p>
    </div>
  );
}

export default HistoryItem;
