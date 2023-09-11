import React, { useEffect } from "react";
import "./styles/Slider.css";

const Slider = () => {

  return (
    <div className="container">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 5</div>
          <div className="swiper-slide">Slide 6</div>
          <div className="swiper-slide">Slide 7</div>
          <div className="swiper-slide">Slide 8</div>
          <div className="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Slider;
