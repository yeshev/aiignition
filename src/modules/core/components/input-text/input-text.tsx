'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';
import {
  Input as BaseInput,
  FormGroup,
  Label,
  Row,
  Col,
  FormFeedback,
} from 'reactstrap';

import { Typography } from '..';

import type { InputProps } from './input-text.types';

import styles from './input-text.module.scss';

export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, invalid, errorMessage, ...props }, ref) => {
    return (
      <FormGroup className={styles.formGroup}>
        <Row>
          {label && (
            <Col xs={12}>
              <Label className={styles.label} for={id}>
                <Typography variant='span' size='sm'>
                  {label}
                </Typography>
              </Label>
            </Col>
          )}

          <Col xs={12}>
            <BaseInput
              type='text'
              className={classNames(styles.input, className)}
              id={id}
              invalid={invalid}
              innerRef={ref}
              {...props}
            />
            {invalid && errorMessage && (
              <FormFeedback className={styles.invalid}>
                <Typography variant='span' size='xs'>
                  {errorMessage}
                </Typography>
              </FormFeedback>
            )}
          </Col>
        </Row>
      </FormGroup>
    );
  }
);
