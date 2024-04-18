import Chart from "@/components/Chart";
import Status from "@/components/Status";
import History from "@/components/History";
import MinMaxCon from "@/components/MinMaxCon";
import * as queries from "@/queries";
import HistoryItem from "@/components/HistoryItem";

export default async function Dashboard() {
  const incomesList = await queries.userIncomes();
  const expensesList = await queries.userExpenses();
  const total_expenses = expensesList.reduce(
    (acc: any, curr: any) => acc + curr.amount,
    0
  );
  const total_income = incomesList.reduce(
    (acc: any, curr: any) => acc + curr.amount,
    0
  );

  let incomeMaxAmount = -Infinity;
  let incomeMinAmount = Infinity;

  incomesList.forEach((income: any) => {
    if (income.amount > incomeMaxAmount) {
      incomeMaxAmount = income.amount;
    }
    if (income.amount < incomeMinAmount) {
      incomeMinAmount = income.amount;
    }
  });

  let expenseMaxAmount = -Infinity;
  let expenseMinAmount = Infinity;

  expensesList.forEach((expense: any) => {
    if (expense.amount > expenseMaxAmount) {
      expenseMaxAmount = expense.amount;
    }
    if (expense.amount < expenseMinAmount) {
      expenseMinAmount = expense.amount;
    }
  });

  const mergedList = [...incomesList, ...expensesList];
  mergedList.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const incomesMap: Record<string, boolean> = {};
  incomesList.forEach((incomeItem: any) => {
    incomesMap[incomeItem.title] = true;
  });

  return (
    <main>
      <h1 className="text-2xl">All Transactions</h1>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-2 col-span-4">
          <Chart
            list={mergedList}
            expenses={expensesList}
            incomes={incomesList}
          />
          <Status
            total_income={total_income}
            total_expenses={total_expenses}
            total_balance={total_income - total_expenses}
          />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <History>
            {mergedList.slice(0, 3).map((item) => {
              // Verifica se o ID do item está presente no mapa de rendimentos
              const isIncome = incomesMap[item.title] === true;
              return (
                <HistoryItem key={item.id} money={item} isIncome={isIncome} />
              );
            })}
          </History>

          <MinMaxCon
            title="Income"
            min={incomeMinAmount}
            max={incomeMaxAmount}
          />
          <MinMaxCon
            title="Expenses"
            min={expenseMinAmount}
            max={expenseMaxAmount}
          />
        </div>
      </div>
    </main>
  );
}
