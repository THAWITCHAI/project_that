import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// ขยายประเภท Session
declare module "next-auth" {
    interface Session {
        user: {
            id?: number;
            roleId?: number;
            name?: string;
            nick_name?: string;
            profileImage?: string;
        } & DefaultSession["user"];
    }
}

// ขยายประเภท JWT
declare module "next-auth/jwt" {
    interface JWT {
        roleId?: number;
        name?: string;
        nick_name?: string;
        profileImage?: string;
        // เพิ่มคุณสมบัติอื่น ๆ ที่ต้องการใน JWT object
    }
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Your username",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your Password",
                },
            },
            async authorize(credentials, req) {
                const res = await fetch(`http://localhost:8000/login`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.username,
                        password: credentials?.password,
                    }),
                    headers: { "Content-Type": "application/json" },
                });
                const response = await res.json();
                if (res.ok) {
                    return response;
                }

                return null;
            },
        }),
    ],
    // pages:{
    //   signIn:'/'
    // },
    callbacks: {
        async session({ session, token }: { session: Session; token: JWT }) {
            // Forward ข้อมูลจาก token ไปยัง session object
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id,
                    roleId: token.roleId,
                    name: token.name,
                    nick_name: token.nick_name,
                    profileImage: token.profileImage,
                };
            }
            return session;
        },
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user) {
                token.id = user.id;
                token.roleId = user.roleId;
                token.nick_name = user.nick_name;
                token.profileImage = user.profileImage;
            }
            return token;
        },

        async redirect({ url, baseUrl }) {
            // ตรวจสอบว่าผู้ใช้ได้ล็อกอินสำเร็จหรือไม่
            if (url === "/api/auth/signin" || url === baseUrl) {
                // const session = await getSession();
                // // Redirect ไปที่ /data_car หลังจากล็อกอิน
                // if (session?.user.rname === "admin") {
                //   return `${baseUrl}/data_car`;
                // }else{
                //   return `${baseUrl}/profile`;
                // }
            }
            return url;
        },
    },
});

export { handler as GET, handler as POST };