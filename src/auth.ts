import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { paths } from "./paths";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user && res.ok) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: paths.dashboard(),
    signOut: paths.login(),
    error: paths.login(),
    newUser: paths.dashboard(),
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },
};

export { nextAuthOptions };
