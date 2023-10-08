import { forwardRef } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { Typography } from '..';

import type { CheckboxProps } from './checkbox.types';

import styles from './checkbox.module.scss';
import classNames from 'classnames';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, className, ...props }, ref) => {
    return (
      <FormGroup className={styles.wrapper} check>
        <Input
          className={classNames(styles.input, className)}
          id={id}
          type='checkbox'
          innerRef={ref}
          {...props}
        />
        <Label className={styles.label} for={id} check>
          <Typography size='sm' variant='span'>
            {label}
          </Typography>
        </Label>
      </FormGroup>
    );
  }
);
