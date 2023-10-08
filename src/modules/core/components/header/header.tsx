import { FC } from 'react';
import { Typography } from '..';

import styles from './header.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { signOut } from 'next-auth/react';
// import { ROUTES_MAP } from '../../constants/routes.constants';
import { Logout } from '@/modules/auth/components';

export const Header: FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return;

  return (
    <div className={styles.header}>
      <Typography variant='h2' fontFamily='pt' size='lg'>
        AI Ignition
      </Typography>
      {session && <Logout />}
    </div>
  );
};
