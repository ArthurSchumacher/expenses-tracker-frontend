import IncomeForm from "@/components/IncomeForm";
import TotalIncomes from "@/components/TotalIncomes";
import { CiCalendarDate } from "react-icons/ci";
import { FaDotCircle } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Incomes() {
  return (
    <main>
      <h1 className="text-2xl">Incomes</h1>
      <TotalIncomes total={3000} />
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-1 col-span-4">
          <IncomeForm />
        </div>
        <div className="sm:col-span-3 col-span-4">
          <div className="w-full border border-border rounded-md bg-primarylighter p-4 flex items-center">
            <div className="p-2 sm:flex hidden">
              <FaMoneyBill className="aspect-square text-3xl" />
            </div>
            <div className="px-5">
              <p className="py-2 inline-flex items-center gap-x-2">
                <FaDotCircle className="text-lime-500 text-xs" />
                Title
              </p>
              <div className="flex flex-wrap items-center justify-between gap-x-4">
                <p className="py-2">R$ 4000</p>
                <p className="py-2 text-neutral-50 flex items-center gap-x-2">
                  <CiCalendarDate size={20} />
                  04/03/2024
                </p>
                <p className="py-2 text-neutral-50 flex items-center gap-x-2">
                  <IoChatbubbleEllipsesSharp size={20} />
                  My freelance earnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
