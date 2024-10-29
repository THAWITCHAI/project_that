'use client'

import { Toaster } from "@/components/ui/sonner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { data: session, status } = useSession()
    const router = useRouter()
    console.log(session?.user);
    if (status == "unauthenticated") {
        return router.replace('/')
    }
    if (status === "authenticated" && session.user) {
        if (session.user.roleId == 2) {
            return (
                <html lang='en'>
                    <body>
                        {children}
                        <Toaster />
                    </body>
                </html>
            )
        }
        if (Number(session.user.roleId) == 1) {
            return router.replace('/admin/show/cars')
        }
    }
}