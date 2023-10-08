import { FC } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { Typography } from '..';

import type { CheckboxProps } from './checkbox.types';

import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckboxProps> = ({ label, id, ...props }) => {
  return (
    <FormGroup className={styles.wrapper} check>
      <Input className={styles.input} id={id} type='checkbox' {...props} />
      <Label className={styles.label} for={id} check>
        <Typography size='sm' variant='span'>
          {label}
        </Typography>
      </Label>
    </FormGroup>
  );
};
