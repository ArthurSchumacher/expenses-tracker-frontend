"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";

function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });

    toast.success("Logout realizado com sucesso!");
    router.refresh();
  }

  return (
    <Link
      onClick={logout}
      href={""}
      className="text-neutral-50 flex items-center gap-2 mt-auto sm:self-start sm:justify-start self-center pb-2"
    >
      <FaSignOutAlt className="text-md" />
      <p className="text-sm sm:flex hidden">Sign out</p>
    </Link>
  );
}

export default LogoutButton;
