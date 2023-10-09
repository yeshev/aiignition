import { FC } from 'react';

import { AuthWrapper } from '@/modules/auth/components/auth-wrapper';
import { SignUpForm } from '@/modules/auth/containers/sign-up-form/sign-up-form';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { ROUTES_MAP } from '@/modules/core/constants/routes.constants';
import { redirect } from 'next/navigation';

const SignUp: FC = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect(ROUTES_MAP.home.path);
  }
  return (
    <AuthWrapper title='Create an account'>
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignUp;
