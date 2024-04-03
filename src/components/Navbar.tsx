import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <nav className="sm:self-start sm:justify-start self-center">{children}</nav>
  );
}

export default Navbar;
