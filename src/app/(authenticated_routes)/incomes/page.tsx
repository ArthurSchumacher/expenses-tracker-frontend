import IncomeForm from "@/components/IncomeForm";
import TotalIncomes from "@/components/TotalIncomes";
import * as queries from "@/queries";
import MoneyItem from "@/components/MoneyItem";

export default async function Incomes() {
  const incomesList = await queries.userIncomes();
  const total_income = incomesList.reduce(
    (acc: any, curr: any) => acc + curr.amount,
    0
  );
  return (
    <main>
      <h1 className="text-2xl">Incomes</h1>
      <TotalIncomes total={total_income} />
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-1 col-span-4">
          <IncomeForm />
        </div>
        <div className="sm:col-span-3 col-span-4">
          {incomesList.reverse().map((income: any) => {
            return <MoneyItem key={income.id} money={income} isIncome />;
          })}
        </div>
      </div>
    </main>
  );
}
