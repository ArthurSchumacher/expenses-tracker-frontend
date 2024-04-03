import IncomeForm from "@/components/IncomeForm";
import { useState } from "react";

export default function Incomes() {
  return (
    <main>
      <h1 className="text-3xl">Incomes</h1>
      <div className="flex flex-col items-center justify-center p-4 bg-primarylighter border border-border rounded-md mt-4 text-2xl uppercase">
        <p>Total income:</p>
        <p className="text-secondary">
          R$ <span>1000,00</span>
        </p>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="col-span-1">
          <IncomeForm />
        </div>
        <div className="col-span-3"></div>
      </div>
    </main>
  );
}
