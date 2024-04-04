import ExpenseForm from "@/components/ExpenseForm";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Expenses() {
  return (
    <main>
      <h1 className="text-3xl">Expenses</h1>
      <div className="flex flex-col items-center justify-center p-4 bg-primarylighter border border-border rounded-md mt-4 text-2xl uppercase">
        <p>Total expense:</p>
        <p className="text-secondary">
          -R$ <span>1000,00</span>
        </p>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-1 col-span-4">
          <ExpenseForm />
        </div>
        <div className="sm:col-span-3 col-span-4">
          <div className="w-full border border-border rounded-md bg-primarylighter p-4 flex items-center">
            <div className="p-2 sm:flex hidden">
              <FaMoneyBill className="aspect-square text-3xl" />
            </div>
            <div className="px-5">
              <p className="py-2 inline-flex items-center gap-x-2">
                <FaDotCircle className="text-secondary text-xs" />
                Dentist appointment
              </p>
              <div className="flex flex-wrap items-center justify-between gap-x-4">
                <p className="py-2">R$ 4000</p>
                <p className="py-2 text-neutral-50 flex items-center gap-x-2">
                  <CiCalendarDate size={20} />
                  04/03/2024
                </p>
                <p className="py-2 text-neutral-50 flex items-center gap-x-2">
                  <IoChatbubbleEllipsesSharp size={20} />
                  Dentist appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
