"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import formatDate from "@/utils/formatDate";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement
);

interface ChartProps {
  expenses: any[];
  incomes: any[];
}

function Chart({ expenses, incomes }: ChartProps) {
  const formattedLabels = incomes.map((item) => formatDate(item.date));
  const incomeData = incomes.map((item) => Number(item.amount));
  const expenseData = expenses.map((item) => Number(item.amount));

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "#84cc16",
        borderColor: "#84cc16",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: expenseData,
        backgroundColor: "#eb055a",
        borderColor: "#eb055a",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="border border-border rounded-md bg-primarylighter p-2">
      <Line data={data} />
    </div>
  );
}

export default Chart;
