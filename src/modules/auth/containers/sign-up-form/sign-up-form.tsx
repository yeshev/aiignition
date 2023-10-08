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

import {
  Button,
  InputText,
  Typography,
  Checkbox,
} from '@/modules/core/components';

import { AuthDivider } from '@/modules/auth/components';

import { INITIAL_SIGN_UP_VALUES } from '@/modules/auth/constants/initial-sign-up-values.constants';

import { signUpSchema } from '@/modules/auth/schemas/sign-up.schema';

import { SignUpFormValues } from '@/modules/auth/types/auth.types';

import styles from './sign-up-form.module.scss';

export const SignUpForm: FC = () => {
  const { handleSubmit, control } = useForm<SignUpFormValues>({
    defaultValues: INITIAL_SIGN_UP_VALUES,
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (formData: SignUpFormValues) => {
    const { email, password, firstName, lastName } = formData;

    await signIn(
      'credentials',
      {
        callbackUrl: ROUTES_MAP.home.path,
        email,
        password,
      },
      { firstName, lastName }
    );
  };

  const onGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: ROUTES_MAP.home.path });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col xs={12}>
          <Typography
            className={styles.existAccount}
            variant='p'
            size='sm'
            fontFamily='pt'
          >
            Already have an account?{' '}
            <Link className={styles.link} href={ROUTES_MAP.signIn.path}>
              <Typography variant='span' fontFamily='pt' size='sm'>
                Log in
              </Typography>
            </Link>
          </Typography>
        </Col>
        <Col xs={12}>
          <Button
            outline
            onClick={onGoogleSignIn}
            color='secondary'
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
            <Col xs={12} md={6}>
              <Controller
                control={control}
                name='firstName'
                render={({ field, fieldState: { error } }) => (
                  <InputText
                    id='firstName'
                    label='First Name'
                    placeholder='Jane'
                    invalid={!!error?.message}
                    errorMessage={error?.message}
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={12} md={6}>
              <Controller
                control={control}
                name='lastName'
                render={({ field, fieldState: { error } }) => (
                  <InputText
                    id='lastName'
                    label='Last Name'
                    placeholder='Doe'
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
            <Col className='mb-4' xs={12}>
              <Controller
                control={control}
                name='checkedNews'
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    id='news'
                    checked={value}
                    label='Subscribe to our monthly newsletter'
                    onChange={onChange}
                  />
                )}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Typography
            className={styles.existAccount}
            variant='p'
            size='sm'
            fontFamily='pt'
          >
            By clicking below you agree to our{' '}
            <Link className={styles.link} href={ROUTES_MAP.signIn.path}>
              <Typography variant='span' fontFamily='pt' size='sm'>
                Terms of Service
              </Typography>
            </Link>{' '}
            and{' '}
            <Link className={styles.link} href={ROUTES_MAP.signIn.path}>
              <Typography variant='span' fontFamily='pt' size='sm'>
                Privacy Policy
              </Typography>
            </Link>{' '}
          </Typography>
        </Col>
        <Col xs={12}>
          <Button type='submit' color='primary'>
            <Typography variant='span' size='sm'>
              Sign up
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
            Already have an account?{' '}
            <Link className={styles.link} href={ROUTES_MAP.signIn.path}>
              <Typography className='' variant='span' fontFamily='pt' size='sm'>
                Log in
              </Typography>
            </Link>
          </Typography>
        </Col>
      </Row>
    </Form>
  );
};
