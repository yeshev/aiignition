import { SignUp } from '@/modules/auth/types/auth.types';
import { AuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        const { query } = req;

        // find user from database with information with token
        const userInfo = query as Pick<SignUp, 'firstName' | 'lastName'>;

        if (credentials?.email) {
          const user: User = {
            id: 1,
            email: credentials.email,
            name: `${userInfo.firstName} ${userInfo.lastName}`,
          };

          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        return {
          ...token,
          id: user.id as number,
          email: user.email,
        };
      }

      return token;
    },

    session: async ({ session, token }) => {
      if (token && session.user) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
          },
        };
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
