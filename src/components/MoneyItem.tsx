"use client";

import { Money } from "@/types/money";
import formatDate from "@/utils/formatDate";
import formatPrice from "@/utils/formatPrice";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaDotCircle, FaRegTrashAlt } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import * as actions from "@/actions";
import { Button, Link } from "@nextui-org/react";

interface MoneyItemProps {
  money: Money;
  isIncome: boolean;
}

function MoneyItem({ money, isIncome }: MoneyItemProps) {
  const handleDelete = async () => {
    await actions.deleteIncome(money.id);
  };

  return (
    <div className="w-full border border-border rounded-md bg-primarylighter flex items-center mb-2">
      <div className="sm:flex hidden border-r border-border">
        <FaMoneyBill className="aspect-square text-6xl p-2" />
      </div>
      <div className="p-2">
        <p className=" inline-flex items-center">
          <FaDotCircle
            className={`${
              isIncome === true ? "text-lime-500" : "text-secondary"
            } text-xs mr-2`}
          />
          {money.title}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-x-4">
          <p className="">
            {isIncome === true ? "" : "-"}
            {formatPrice(money.amount)}
          </p>
          <p className=" text-neutral-50 flex items-center gap-x-2">
            <CiCalendarDate size={20} />
            {formatDate(money.date.toString())}
          </p>
          <p className=" text-neutral-50 flex items-center gap-x-2">
            <IoChatbubbleEllipsesSharp size={20} />
            {money.description}
          </p>
        </div>
      </div>
      <form onSubmit={handleDelete} className="sm:flex hidden ml-auto mr-4">
        <Button
          isIconOnly
          type="submit"
          size="sm"
          radius="sm"
          color="secondary"
        >
          <FaRegTrashAlt className="aspect-square text-4xl p-2" />
        </Button>
      </form>
    </div>
  );
}

export default MoneyItem;
