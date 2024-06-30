'use client'
import { listImgsRoupa } from '@/lib/images.js';
import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import styles from './Thumbnails.module.css';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Thumbnails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <div className={styles.container}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          slidesPerView={1}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.swiperThumbnail}
        >
          {listImgsRoupa.map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperThumbnail}>
              <div className={styles.slideItem}>
                <Image
                  src={image.imgSrc}
                  alt={image.alt}
                  className={styles.imgSlide}
                  width={400} height={400}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Thumbnail */}
      <div className={styles.container}>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={11}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.swiperThumbnail}
        >
          {listImgsRoupa.map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperThumbnail}>
              <button className={styles.swiperSlideThumbnail}>
                <Image
                  src={image.imgSrc}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                  width={100} height={100}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};
