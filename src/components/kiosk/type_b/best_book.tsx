import React, { useState } from 'react';
import styles from './best_book.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Pagination } from 'swiper/modules';
import {
  BEST_BOOK_X,
  BEST_BOOK_Y,
  NEW_BOOK_A,
  NEW_BOOK_B,
} from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.46875rem; height: 0.46875rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_x}>
      <Swiper
        loop
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_x}
      >
        {BEST_BOOK_X.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{ width: '61.71875rem !important', height: '21.79688rem' }}
          >
            <img src={item.img} alt="" className={styles.img_x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_y}>
      <Swiper
        loop
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_y}
      >
        {BEST_BOOK_Y.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{ width: '19.73544rem !important', height: '29.94019rem' }}
          >
            <img src={item.img} alt="" className={styles.img_y} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const BestBookB = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    toggleLandscape();
  }

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={false} onClick={handleFullPage} />
      </div>
    </>
  );
};

export default BestBookB;
