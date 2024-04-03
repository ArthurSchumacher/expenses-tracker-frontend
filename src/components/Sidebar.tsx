import React from "react";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import NavbarLink from "./NavbarLink";
import { SiGoogleanalytics } from "react-icons/si";
import { GoCreditCard } from "react-icons/go";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { paths } from "@/paths";

function Sidebar() {
  return (
    <div className="col-span-1 border border-border rounded-md sm:p-4 p-1 bg-primarylight min-h-[96vh] flex flex-col gap-8">
      <Avatar />
      <Navbar>
        <NavbarLink to={paths.dashboard()}>
          <SiGoogleanalytics className="text-md" />
          <p className="text-md sm:flex hidden">Dashboard</p>
        </NavbarLink>
        <NavbarLink to={paths.transactions()}>
          <GoCreditCard className="text-md" />
          <p className="text-md sm:flex hidden">View Transactions</p>
        </NavbarLink>
        <NavbarLink to={paths.incomes()}>
          <FaMoneyBillTrendUp className="text-md" />
          <p className="text-md sm:flex hidden">Incomes</p>
        </NavbarLink>
        <NavbarLink to={paths.expenses()}>
          <FaMoneyBillTransfer className="text-md" />
          <p className="text-md sm:flex hidden">Expenses</p>
        </NavbarLink>
      </Navbar>
      <div className="text-neutral-50 flex items-center gap-2 mt-auto sm:self-start sm:justify-start self-center pb-2">
        <FaSignOutAlt className="text-md" />
        <p className="text-md sm:flex hidden">Sign Out</p>
      </div>
    </div>
  );
}

export default Sidebar;
