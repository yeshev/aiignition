import { FC } from 'react';
import { Typography } from '@/modules/core/components/typography';

import styles from './header.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Logout } from '@/modules/auth/components/logout';

export const Header: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.header}>
      <Typography variant='h2' fontFamily='pt' size='lg'>
        AI Ignition
      </Typography>
      {session && <Logout />}
    </div>
  );
};
