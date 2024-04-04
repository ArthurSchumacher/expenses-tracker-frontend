import History from "@/components/History";
import { useState } from "react";

export default function Transactions() {
  return (
    <main>
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
    </main>
  );
}
