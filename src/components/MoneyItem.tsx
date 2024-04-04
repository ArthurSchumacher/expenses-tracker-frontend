import { Money } from "@/types/money";
import formatDate from "@/utils/formatDate";
import formatPrice from "@/utils/formatPrice";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

interface MoneyItemProps {
  money: Money;
}

function MoneyItem({ money }: MoneyItemProps) {
  return (
    <div className="w-full border border-border rounded-md bg-primarylighter p-4 flex items-center">
      <div className="p-2 sm:flex hidden">
        <FaMoneyBill className="aspect-square text-3xl" />
      </div>
      <div className="px-5">
        <p className="py-2 inline-flex items-center gap-x-2">
          <FaDotCircle
            className={`${
              money.categoryId === 1 ? "text-lime-500" : "text-secondary"
            } text-xs`}
          />
          {money.title}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-x-4">
          <p className="py-2">{formatPrice(money.price)}</p>
          <p className="py-2 text-neutral-50 flex items-center gap-x-2">
            <CiCalendarDate size={20} />
            {formatDate(money.date.toString())}
          </p>
          <p className="py-2 text-neutral-50 flex items-center gap-x-2">
            <IoChatbubbleEllipsesSharp size={20} />
            {money.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoneyItem;
