"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (session.user.rname === "User") {
      return router.replace("/");
    } else {
      return <div className="w-full h-full">{children}</div>;
    }
  }
  if (status === "unauthenticated") {
    return router.replace("/");
  }
}
