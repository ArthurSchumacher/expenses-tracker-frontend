import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="col-span-5 border border-border rounded-md p-4 bg-primarylight min-h-[96vh] text-neutral-50">
      {children}
    </div>
  );
}

export default Container;
