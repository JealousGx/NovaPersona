"use client";

import { Login } from "./login";
import { Link } from "./ui/link";

import { authClient } from "@/lib/auth/client";

export const AuthButtons = () => {
  const { data: session, isPending } = authClient.useSession();

  if (!session || isPending) {
    return <Login />;
  }

  return <Link href="/dashboard">Dashboard</Link>;
};
