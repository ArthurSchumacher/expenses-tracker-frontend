"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface NavbarLinkProps {
  children: ReactNode;
  to: string;
}

function NavbarLink({ to, children }: NavbarLinkProps) {
  const pathname = usePathname();
  if (pathname === to) {
    return (
      <Link
        href={to}
        className="sm:text-neutral-50 text-secondary flex items-center gap-2 sm:border-l-4 sm:pl-2 py-2 border-secondary"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={to}
      className="text-neutral-50 flex items-center gap-2 sm:pl-3 py-2"
    >
      {children}
    </Link>
  );
}

export default NavbarLink;
