"use server";

import { nextAuthOptions } from "@/auth";
import axios from "axios";
import { getServerSession } from "next-auth";

export async function deleteIncome(id: number) {
  const session = await getServerSession(nextAuthOptions);
  if (!session?.access_token || !session) {
    throw new Error("You must be logged in.");
  }

  const req = await axios
    .delete(`${process.env.API_URL}/incomes/${id}`, {
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
