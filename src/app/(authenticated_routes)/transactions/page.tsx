import History from "@/components/History";
import HistoryItem from "@/components/HistoryItem";
import * as queries from "@/queries";

export default async function Transactions() {
  const incomesList = await queries.userIncomes();
  const expensesList = await queries.userExpenses();
  const mergedList = [...incomesList, ...expensesList];
  mergedList.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const incomesMap: Record<string, boolean> = {};
  incomesList.forEach((incomeItem: any) => {
    incomesMap[incomeItem.title] = true;
  });
  return (
    <main>
      <History>
        {mergedList.map((item) => {
          // Verifica se o ID do item está presente no mapa de rendimentos
          const isIncome = incomesMap[item.title] === true;
          return <HistoryItem key={item.id} money={item} isIncome={isIncome} />;
        })}
      </History>
    </main>
  );
}
