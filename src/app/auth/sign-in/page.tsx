import { FC } from 'react';
import { NextPage } from 'next';

import { AuthWrapper } from '@/modules/auth/components/auth-wrapper';
import { SignInForm } from '@/modules/auth/containers/sign-in-form';
import { redirect } from 'next/navigation';

import { ROUTES_MAP } from '@/modules/core/constants/routes.constants';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const SignIn: FC<NextPage> = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES_MAP.home.path);
  }

  return (
    <AuthWrapper title='Log in an account'>
      <SignInForm />
    </AuthWrapper>
  );
};

export default SignIn;
