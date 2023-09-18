import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./styles/Slider.css";

const Slider = ({ slides, hideArrows, swiperProps }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Grid, hideArrows ? null : Navigation]}
        navigation={{
          nextEl: `.swiper-button-next-${swiperProps.id}`,
          prevEl: `.swiper-button-prev-${swiperProps.id}`,
        }}
        spaceBetween={10}
        {...swiperProps}
        className={`mySwiper swiper-${swiperProps.id}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`swiper-button-prev swiper-button-prev-${swiperProps.id}`}
      ></div>
      <div
        className={`swiper-button-next swiper-button-next-${swiperProps.id}`}
      ></div>
    </div>
  );
};

export default Slider;
