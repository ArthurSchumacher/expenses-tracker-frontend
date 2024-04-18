"use server";

import { nextAuthOptions } from "@/auth";
import axios from "axios";
import { getServerSession } from "next-auth";

export async function createIncome(incomeDto: any) {
  const session = await getServerSession(nextAuthOptions);
  if (!session?.access_token || !session) {
    throw new Error("You must be logged in.");
  }

  const req = await axios
    .post(`${process.env.API_URL}/incomes`, incomeDto, {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });

  return req;
}
