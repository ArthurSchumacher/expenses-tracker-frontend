"use server";

import { nextAuthOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function userProfile() {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/");
  }

  const res = await fetch(`${process.env.API_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
    },
  })
    .then(async (res) => {
      return await res.json();
    })
    .catch((error) => {
      console.log(
        `An error has occured: ${error.status}: ${error.message} - CEX1001`
      );
    });

  return res;
}
