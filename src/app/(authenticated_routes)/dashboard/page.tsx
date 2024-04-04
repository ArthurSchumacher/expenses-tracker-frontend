import Chart from "@/components/Chart";

export default function Dashboard() {
  return (
    <main>
      <h1 className="text-3xl">All Transactions</h1>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <div className="sm:col-span-2 col-span-4">
          <Chart />

          <div className="grid grid-cols-3 mt-4 gap-4">
            <div className="sm:col-span-1 col-span-3 w-full border border-border bg-primarylighter p-4 rounded-md">
              <p className="text-nowrap text-lg">Total Income</p>
              <p className="text-lg text-lime-500">R$ 3000</p>
            </div>
            <div className="sm:col-span-1 col-span-3 w-full border border-border bg-primarylighter p-4 rounded-md">
              <p className="text-nowrap text-lg">Total Expenses</p>
              <p className="text-lg text-secondary">R$ 3000</p>
            </div>
            <div className="sm:col-span-1 col-span-3 w-full border border-border bg-primarylighter p-4 rounded-md">
              <p className="text-nowrap text-lg">Total Balance</p>
              <p className="text-lg">R$ 0</p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 col-span-4">
          <h2 className="text-2xl mb-4">Recent History</h2>
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

          <div className="w-full grid grid-cols-3 gap-x-4 mb-4 mt-8">
            <div className="w-full flex items-center justify-start text-xs">
              Min
            </div>
            <div className="w-full flex items-center justify-center text-lg">
              Income
            </div>
            <div className="w-full flex items-center justify-end text-xs">
              Max
            </div>
            <div className="col-span-3 w-full flex items-center justify-between text-xs">
              <p>R$ 0</p>
              <p>R$ 3000</p>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-x-4">
            <div className="w-full flex items-center justify-start text-xs">
              Min
            </div>
            <div className="w-full flex items-center justify-center text-lg">
              Expenses
            </div>
            <div className="w-full flex items-center justify-end text-xs">
              Max
            </div>
            <div className="col-span-3 w-full flex items-center justify-between text-xs">
              <p>R$ 0</p>
              <p>R$ 3000</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
