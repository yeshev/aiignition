import { FC } from 'react';
import { Label as BaseLabel, LabelProps } from 'reactstrap';

export const Label: FC<LabelProps> = ({ className, children, ...props }) => {
  return <BaseLabel {...props}>{children}</BaseLabel>;
};
