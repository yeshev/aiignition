import { ButtonProps as Props } from 'reactstrap';
import { ReactNode } from 'react';

export type ButtonProps = Props & {
  startAddon?: ReactNode;
};
