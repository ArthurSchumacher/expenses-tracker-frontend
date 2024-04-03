import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

function Grid({ children }: GridProps) {
  return <div className="grid grid-cols-6 gap-4 p-4">{children}</div>;
}

export default Grid;
