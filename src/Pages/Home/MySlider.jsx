import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import art1 from '../../assets/art1.jpg'
import art2 from '../../assets/art2.avif'
import art3 from '../../assets/art3.jpg'

const MySlider = () => {
  return (
    <div className="mt-7 shadow-2xl rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl"
      >
        <SwiperSlide>
          <img
            src={art1}
            alt="Spoken Banner"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={art2}
            alt="JavaScript Banner"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={art3}
            alt="Photography Banner"
            className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySlider;