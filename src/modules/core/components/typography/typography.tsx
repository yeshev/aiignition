import { FC } from 'react';
import classNames from 'classnames';

import type { TypographyProps } from './typography.types';

import styles from './typography.module.scss';

export const Typography: FC<TypographyProps> = ({
  children,
  fontFamily = 'cabin',
  variant = 'p',
  size = 'default',
  className,
}) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return (
    <Tag className={classNames(className, styles[fontFamily], styles[size])}>
      {children}
    </Tag>
  );
};
