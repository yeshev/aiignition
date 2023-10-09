'use client';

import { FC, useRef } from 'react';
import { Row, Col } from 'reactstrap';
import Image from 'next/image';
import classNames from 'classnames';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Typography } from '@/modules/core/components/typography';
import { Button } from '@/modules/core/components/button';
import { ArrowIcon } from '@/modules/core/components/arrow-icon';

import styles from './home-list.module.scss';
import { SLIDER_DELAY } from '@/modules/home/constants/config';
import { SLIDER_DATA } from '../../constants/data';

export const HomeList: FC = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const onNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const onPrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  return (
    <Row className={styles.wrapper}>
      <Col className={styles.card} xs={12} md={5}>
        <Image src='/images/frame_1.png' alt='video' fill objectFit='cover' />
      </Col>
      <Col className={styles.card} xs={12} md={5}>
        <div className={styles.imageContainer}>
          <div className={styles.imageInner}>
            <Image src='/icons/upload.svg' alt='upload' fill />
          </div>
        </div>
        <Typography size='lg' fontFamily='pt' className='mb-1'>
          Upload CV
        </Typography>
        <Typography>( PDF or DOCX )</Typography>
      </Col>
      <Col className={classNames(styles.card, styles.comments)} xs={12} md={5}>
        <Swiper
          ref={sliderRef}
          modules={[Autoplay]}
          autoplay={{ delay: SLIDER_DELAY }}
          slidesPerView={1}
          loop
          className={styles.slider}
        >
          {SLIDER_DATA.map((item) => (
            <SwiperSlide key={item.name} className={styles.slide}>
              <div className={styles.avatar}>
                <Image src='/images/avatar.png' alt='avatar' fill />
              </div>
              <Typography size='md' fontFamily='pt' className='mb-2'>
                {item.name}
              </Typography>
              <Typography className={styles.description}>
                {item.comment}
              </Typography>
            </SwiperSlide>
          ))}
          <div className={styles.navigation}>
            <Button
              outline
              className={classNames(styles.button, styles.prev, 'p-2')}
              onClick={onPrev}
            >
              <ArrowIcon className={classNames(styles.icon)} />
            </Button>
            <Button
              outline
              onClick={onNext}
              className={classNames(styles.button, styles.next, 'p-2')}
            >
              <ArrowIcon className={classNames(styles.icon)} />
            </Button>
          </div>
        </Swiper>
      </Col>
      <Col
        className={classNames(styles.card, styles.reversedGradient)}
        xs={12}
        md={5}
      >
        <Typography size='xl' fontFamily='pt'>
          Create CV with AI
        </Typography>
      </Col>
    </Row>
  );
};
