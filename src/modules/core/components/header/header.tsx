import { FC } from 'react';
import { Typography } from '..';

import styles from './header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Typography variant='h2' fontFamily='pt' size='lg'>
        AI Ignition
      </Typography>
    </div>
  );
};
