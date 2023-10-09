'use client';

import { FC } from 'react';
import Image from 'next/image';
import { Col, Row } from 'reactstrap';

import { Typography } from '@/modules/core/components/typography';

import type { AuthWrapperProps } from './auth-wrapper.types';

import styles from './auth-wrapper.module.scss';

export const AuthWrapper: FC<AuthWrapperProps> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Row>
          <Col xs={12}>
            <Typography size='lg' variant='h2'>
              {title}
            </Typography>
          </Col>
          <Col xs={12}>{children}</Col>
        </Row>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src='/images/workspace.jpg'
          alt='workspace'
          objectFit='cover'
          fill
        />
      </div>
    </div>
  );
};
