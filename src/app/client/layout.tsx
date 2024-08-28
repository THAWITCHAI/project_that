"use client";
import {useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (session.user.rname === "Admin") {
      return router.replace("/");
    } else {
      return <div className="w-full h-full">{children}</div>;
    }
  }
  if (status === "unauthenticated") {
    return router.replace("/");
  }
}
