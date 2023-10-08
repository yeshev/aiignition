import { InputProps } from 'reactstrap';

export type CheckboxProps = Omit<InputProps, 'checked' | 'type'> & {
  checked: boolean;
  label?: string;
};
