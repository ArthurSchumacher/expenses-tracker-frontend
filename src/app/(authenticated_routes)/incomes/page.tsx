import IncomeForm from "@/components/IncomeForm";
import { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";

export default function Incomes() {
  return (
    <main>
      <h1 className="text-3xl">Incomes</h1>
      <div className="flex flex-col items-center justify-center p-4 bg-primarylighter border border-border rounded-md mt-4 text-2xl uppercase">
        <p>Total income:</p>
        <p className="text-lime-500">
          R$ <span>1000,00</span>
        </p>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="col-span-1">
          <IncomeForm />
        </div>
        <div className="col-span-3">
          <div className="w-full border border-border rounded-md bg-primarylighter p-4 flex items-center">
            <div className="p-2">
              <FaMoneyBill className="aspect-square text-3xl" />
            </div>
            <div className="px-5">
              <p className="inline-flex items-center gap-x-2">
                <FaDotCircle className="text-lime-500 text-xs" />
                Title
              </p>
              <div className="flex items-center gap-x-4">
                <p>R$ 4000</p>
                <p>04/03/2024</p>
                <p>My freelance earnings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
