'use client';

import { Button as BaseButton } from 'reactstrap';
import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './button.module.scss';
import { ButtonProps } from './button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, startAddon, ...props }, ref) => {
    return (
      <BaseButton
        className={classNames(styles.button, className)}
        innerRef={ref}
        {...props}
      >
        {startAddon && <span className={styles.startIcon}>{startAddon}</span>}
        {children}
      </BaseButton>
    );
  }
);
