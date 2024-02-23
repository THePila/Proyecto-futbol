import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><div className='p-5 container'>Lorem ipsum dolor sit amet consectetur.</div></SwiperSlide>
        <SwiperSlide><div className='p-5 container'>Lorem ipsum dolor sit amet consectetur.</div></SwiperSlide>
        <SwiperSlide><div className='p-5 container'>Lorem ipsum dolor sit amet consectetur.</div></SwiperSlide>
        <SwiperSlide><div className='p-5 container'>Lorem ipsum dolor sit amet consectetur.</div></SwiperSlide>
      </Swiper>
    );
  };