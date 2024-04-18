import ExpenseForm from "@/components/ExpenseForm";
import TotalExpenses from "@/components/TotalExpenses";
import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import * as queries from "@/queries";
import MoneyItem from "@/components/MoneyItem";

export default async function Expenses() {
  const expensesList = await queries.userExpenses();
  const total_expenses = expensesList.reduce(
    (acc: any, curr: any) => acc + curr.amount,
    0
  );
  return (
    <main>
      <h1 className="text-2xl">Expenses</h1>
      <TotalExpenses total={total_expenses} />
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-1 col-span-4">
          <ExpenseForm />
        </div>
        <div className="sm:col-span-3 col-span-4">
          {expensesList.reverse().map((expense: any) => {
            return (
              <MoneyItem key={expense.id} money={expense} isIncome={false} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
