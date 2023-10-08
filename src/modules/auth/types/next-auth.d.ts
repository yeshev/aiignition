import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    email: string;
    name: string;
    id: number;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: number;
  }
}
