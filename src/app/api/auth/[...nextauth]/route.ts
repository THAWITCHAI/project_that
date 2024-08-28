import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// ขยายประเภท Session
declare module "next-auth" {
  interface Session {
    user: {
      uid?: string;
      uname?: string;
      unick_name?: string;
      uemail?: string;
      upwd?: string;
      uphone?: string;
      udive?: string;
      uprofile?: string;
      rname?: string;
      // เพิ่มคุณสมบัติอื่น ๆ ที่ต้องการใน user object
    } & DefaultSession["user"];
  }
}

// ขยายประเภท JWT
declare module "next-auth/jwt" {
  interface JWT {
    uid?: string;
    uname?: string;
    unick_name?: string;
    uemail?: string;
    upwd?: string;
    uphone?: string;
    udive?: string;
    uprofile?: string;
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
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify({
            uemail: credentials?.username,
            upwd: credentials?.password,
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
  // pages:{
  //   signIn:'/'
  // },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      // Forward ข้อมูลจาก token ไปยัง session object
      if (token) {
        session.user = {
          ...session.user,
          uid: token.uid,
          uname: token.uname,
          unick_name: token.unick_name,
          uemail: token.uemail,
          upwd: token.upwd,
          uphone: token.uphone,
          udive: token.udive,
          uprofile: token.uprofile,
          rname: token.rname,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.uid = user.uid;
        token.uname = user.uname;
        token.unick_name = user.unick_name;
        token.uemail = user.uemail;
        token.upwd = user.upwd;
        token.uphone = user.uphone;
        token.udive = user.udive;
        token.uprofile = user.uprofile;
        token.rname = user.rname;
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
