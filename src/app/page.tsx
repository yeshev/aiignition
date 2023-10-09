import { FC } from 'react';
import { NextPage } from 'next';
import { ROUTES_MAP } from '@/modules/core/constants/routes.constants';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { PageContainer } from '@/modules/core/components/page-container/page-container';
import { HomeList } from '@/modules/home/containers/home-list';

const Home: FC<NextPage> = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(ROUTES_MAP.signIn.path);
  }

  return (
    <PageContainer>
      <HomeList />
    </PageContainer>
  );
};

export default Home;
