import { PropsWithChildren } from 'react';
import { TextSize } from '../../types/style.types';

export type TypographyProps = {
  fontFamily?: 'pt' | 'cabin';
  variant?: 'p' | 'span' | 'h1' | 'h2';
  className?: string;
  size?: TextSize;
} & PropsWithChildren;
