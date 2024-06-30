'use client'
import {listImgsRoupa} from '@/lib/images.js';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Banner.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Banner() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true, type: 'fraction', }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {listImgsRoupa.map((item) => (
              <SwiperSlide key={item.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
                <div className={styles.slideItem}>
                  <Image src={item.img} alt={item.alt} className={styles.imgSlide} width={400} height={400}/>
                </div>
              </SwiperSlide>
            ))}
    </Swiper>
  );
};
