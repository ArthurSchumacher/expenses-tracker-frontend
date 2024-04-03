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

function Chart() {
  const data = {
    labels: ["03/04/2024", "03/05/2024", "03/06/2024"],
    datasets: [
      {
        label: "Income",
        data: [2000, 2500, 1500],
        backgroundColor: "#84cc16",
        borderColor: "#84cc16",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [2000, 1500, 1250],
        backgroundColor: "#eb055a",
        borderColor: "#eb055a",
        tension: 0.2,
      },
      {
        label: "Total",
        data: [0, 100, 250],
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
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
