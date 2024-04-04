import React, { ReactNode } from "react";

interface HistoryProps {
  children: ReactNode;
}

function History({ children }: HistoryProps) {
  return (
    <>
      <h2 className="text-2xl mb-4">Recent History</h2>
      {children}
    </>
  );
}

export default History;
