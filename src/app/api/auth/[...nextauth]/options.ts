import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
  providers: [
    CredentialsProvider({
      name: "Username/Password",
      credentials: {
        username: { label: "Usernamae", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          username: "thawitchai",
          password: "13495000",
          name: "Thawitchai Boonsong",
        };
        if (
          credentials?.username === user.username &&
          credentials.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }:any) {
      // If the user is logging out, redirect them to the home page
      if (url === "/api/auth/signout") {
        return `${baseUrl}/`;
      }
      // For other cases (e.g., login), redirect to /profile
      return `${baseUrl}/profile`;
    },
  },
  pages: {
    signIn: "/",
    error:'/components/Error'
  },
};