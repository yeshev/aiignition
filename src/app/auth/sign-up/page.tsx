import { FC } from 'react';
import { NextPage } from 'next';

import { AuthWrapper } from '@/modules/auth/components';
import { SignUpForm } from '@/modules/auth/containers/sign-up-form/sign-up-form';

const SignUp: FC<NextPage> = () => {
  return (
    <AuthWrapper title='Create an account'>
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignUp;
