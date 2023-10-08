import { ChangeEvent } from 'react';
import { InputProps } from 'reactstrap';

export type CheckboxProps = Omit<InputProps, 'type'> & {
  label?: string;
  onChange: (e: ChangeEvent) => void;
};
