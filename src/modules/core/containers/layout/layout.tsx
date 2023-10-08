import { FC, PropsWithChildren } from 'react';

import { Header } from '@/modules/core/components';

import styles from './layout.module.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
