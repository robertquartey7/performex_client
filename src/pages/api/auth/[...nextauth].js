import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
export default NextAuth({
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        const user = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
          {
            email: credentials.email,
            password: credentials.password,
          }
        );

        if (user.status === 200) {
          return user.data;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET_KEY,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.id = token.id;
      }
      return session;
    },
  },
});
