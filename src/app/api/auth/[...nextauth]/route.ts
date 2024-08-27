import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

// ขยายประเภท Session
declare module "next-auth" {
  interface Session {
    user: {
      uname?: string;
      uemail?: string;
      rname?: string;
      // เพิ่มคุณสมบัติอื่น ๆ ที่ต้องการใน user object
    } & DefaultSession["user"];
  }
}

// ขยายประเภท JWT
declare module "next-auth/jwt" {
  interface JWT {
    uname?: string;
    uemail?: string;
    rname?: string;
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
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
          method: "POST",
          body: JSON.stringify({
            uemail: credentials?.username,
            upassword: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const response = await res.json();
        console.log(response);
        if (response) {
          return response;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      // Forward ข้อมูลจาก token ไปยัง session object
      if (token) {
        session.user = {
          ...session.user,
          uname: token.uname,
          uemail: token.uemail,
          rname: token.rname,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.uname = user.uname;
        token.uemail = user.uemail;
        token.rname = user.rname;
      }
      return token;
    },

    async redirect({ url, baseUrl }) {
      // ตรวจสอบว่าผู้ใช้ได้ล็อกอินสำเร็จหรือไม่
      if (url === "/api/auth/signin" || url === baseUrl) {
        const session = await getSession();
        // Redirect ไปที่ /data_car หลังจากล็อกอิน
        if (session?.user.rname === "admin") {
          return `${baseUrl}/data_car`;
        }else{
          return `${baseUrl}/profile`;
        }
      }
      return url;
    },
  },
});

export { handler as GET, handler as POST };