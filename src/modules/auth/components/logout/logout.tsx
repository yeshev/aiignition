'use client';
import { Typography } from '@/modules/core/components';
import { ROUTES_MAP } from '@/modules/core/constants/routes.constants';
import { signOut } from 'next-auth/react';
import { Button } from 'reactstrap';

import styles from './logout.module.scss';

export const Logout = () => {
  const onLogout = async () => {
    await signOut({ callbackUrl: ROUTES_MAP.signIn.path });
  };
  return (
    <Button
      onClick={onLogout}
      className={styles.button}
      outline
      color='secondary'
    >
      <Typography variant='span' size='sm'>
        Logout
      </Typography>
    </Button>
  );
};
