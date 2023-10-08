'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col, Form } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { signIn } from 'next-auth/react';

import { ROUTES_MAP } from '@/modules/core/constants/routes.constants';

import { Button, InputText, Typography } from '@/modules/core/components';

import { AuthDivider } from '@/modules/auth/components';

import { signInSchema } from '@/modules/auth/schemas/sign-in.schema';

import { SignIn } from '@/modules/auth/types/auth.types';
import { INITIAL_SIGN_IN_VALUES } from '@/modules/auth/constants/initial-sign-in-values.constants';

import styles from './sign-in-form.module.scss';

export const SignInForm: FC = () => {
  const { handleSubmit, control } = useForm<SignIn>({
    defaultValues: INITIAL_SIGN_IN_VALUES,
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data: SignIn) => {
    const { email, password } = data;
    await signIn('credentials', {
      callbackUrl: ROUTES_MAP.home.path,
      email,
      password,
    });
  };

  const onGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: ROUTES_MAP.home.path });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col xs={12} className='mt-2'>
          <Button
            outline
            color='secondary'
            onClick={onGoogleSignIn}
            startAddon={<Image src='/icons/google.png' alt='google' fill />}
          >
            <Typography variant='span' size='sm'>
              Continue with Google
            </Typography>
          </Button>
        </Col>

        <Col xs={12}>
          <AuthDivider className={styles.divider} />
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <Controller
                control={control}
                name='email'
                render={({ field, fieldState: { error } }) => (
                  <InputText
                    id='email'
                    label='Email'
                    placeholder='Jane@gmail.com'
                    invalid={!!error?.message}
                    errorMessage={error?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={12}>
              <Controller
                control={control}
                name='password'
                render={({ field, fieldState: { error } }) => (
                  <InputText
                    id='password'
                    label='Password'
                    type='password'
                    placeholder='********'
                    invalid={!!error?.message}
                    errorMessage={error?.message}
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={12}>
          <Button type='submit' color='primary'>
            <Typography variant='span' size='sm'>
              Sign in
            </Typography>
          </Button>
        </Col>
        <Col xs={12}>
          <Typography
            className={classNames(styles.existAccount, 'text-center mt-2')}
            variant='p'
            size='sm'
            fontFamily='pt'
          >
            New user?{' '}
            <Link className={styles.link} href={ROUTES_MAP.signUp.path}>
              <Typography className='' variant='span' fontFamily='pt' size='sm'>
                Sign up
              </Typography>
            </Link>
          </Typography>
        </Col>
      </Row>
    </Form>
  );
};
