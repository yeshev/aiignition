import { FC } from 'react';
import { NextPage } from 'next';
import { ROUTES_MAP } from '@/modules/core/constants/routes.constants';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const Home: FC<NextPage> = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(ROUTES_MAP.signIn.path);
  }

  return <div>home page</div>;
};

export default Home;
