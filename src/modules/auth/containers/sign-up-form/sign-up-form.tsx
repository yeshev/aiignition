'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'reactstrap';

import { ROUTES_MAP } from '@/modules/core/constants/routes';

import {
  Button,
  InputText,
  Typography,
  Checkbox,
} from '@/modules/core/components';

import { AuthDivider } from '@/modules/auth/components';

import styles from './sign-up-form.module.scss';
import classNames from 'classnames';

export const SignUpForm: FC = () => {
  return (
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
          variant='outline'
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
            <InputText id='firstName' label='First Name' placeholder='Jane' />
          </Col>
          <Col xs={12} md={6}>
            <InputText id='lastName' label='Last Name' placeholder='Doe' />
          </Col>
          <Col xs={12}>
            <InputText id='email' label='Email' placeholder='Jane@gmail.com' />
          </Col>
          <Col xs={12}>
            <InputText
              id='password'
              label='Password'
              type='password'
              placeholder='********'
            />
          </Col>
          <Col className='mb-4' xs={12}>
            <Checkbox
              id='news'
              checked
              label='Subscribe to our monthly newsletter'
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
        <Button
          variant='outline'
          startAddon={<Image src='/icons/google.png' alt='google' fill />}
        >
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
  );
};
