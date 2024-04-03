import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import Grid from "@/components/Grid";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expenses Tracker V1",
  description: "Generated by create next app, Expenses Tracker V1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${josefin.className} bg-primary`}>{children}</body>
    </html>
  );
}
