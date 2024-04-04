import { Money } from "@/types/money";
import formatPrice from "@/utils/formatPrice";
import React from "react";

interface HistoryItemProps {
  expense: Money;
}

function HistoryItem({ expense }: HistoryItemProps) {
  return (
    <div
      className={`w-full border border-border bg-primarylighter p-4 rounded-md flex items-center justify-between mb-4 ${
        expense.categoryId === 1 ? "text-lime-500" : "text-secondary"
      }`}
    >
      <p className="text-lg">{expense.title}</p>
      <p>-{formatPrice(expense.price)}</p>
    </div>
  );
}

export default HistoryItem;
