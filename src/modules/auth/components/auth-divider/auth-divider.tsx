import { FC } from 'react';

import { Typography } from '@/modules/core/components';

import styles from './auth-divider.module.scss';
import { ClassName } from '@/modules/core/types/shared.types';
import classNames from 'classnames';

export const AuthDivider: FC<ClassName> = ({ className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.line} />
      <Typography className={styles.text} size='sm' variant='span'>
        Or
      </Typography>
      <div className={styles.line} />
    </div>
  );
};
