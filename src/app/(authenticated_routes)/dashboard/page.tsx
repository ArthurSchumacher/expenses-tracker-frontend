import Chart from "@/components/Chart";
import Status from "@/components/Status";
import History from "@/components/History";
import MinMaxCon from "@/components/MinMaxCon";

export default function Dashboard() {
  return (
    <main>
      <h1 className="text-2xl">All Transactions</h1>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-2 col-span-4">
          <Chart />
          <Status total_income={3000} total_expenses={3000} total_balance={0} />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <History>
            <div className="w-full border border-border bg-primarylighter p-4 rounded-md flex items-center justify-between mb-4 text-secondary">
              <p className="text-lg">Dentist appointment</p>
              <p>-R$ 120</p>
            </div>
            <div className="w-full border border-border bg-primarylighter p-4 rounded-md flex items-center justify-between mb-4 text-secondary">
              <p className="text-lg">Travelling</p>
              <p>-R$ 3000</p>
            </div>
            <div className="w-full border border-border bg-primarylighter p-4 rounded-md flex items-center justify-between mb-4 text-lime-500">
              <p className="text-lg">From Freelance</p>
              <p>+R$ 4000</p>
            </div>
          </History>

          <MinMaxCon title="Income" min={0} max={3000} />
          <MinMaxCon title="Expenses" min={0} max={3000} />
        </div>
      </div>
    </main>
  );
}
