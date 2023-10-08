'use client';

import { Button as BaseButton } from 'reactstrap';
import classNames from 'classnames';
import { FC } from 'react';

import styles from './button.module.scss';
import { ButtonProps } from './button.types';

export const Button: FC<ButtonProps> = ({
  children,
  className,
  startAddon,
  ...props
}) => {
  return (
    <BaseButton className={classNames(styles.button, className)} {...props}>
      {startAddon && <span className={styles.startIcon}>{startAddon}</span>}
      {children}
    </BaseButton>
  );
};
