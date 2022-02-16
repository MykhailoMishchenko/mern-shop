import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay} from "swiper";
import Product from "./Product/Product";

const Carousel = ({data}) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      slidesPerGroup={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      loop
      loopFillGroupWithBlank
      modules={[Autoplay]}
      className="mySwiper"
    >
      {data?.map(product => {
        return (
          <SwiperSlide key={product._id}>
              <Product product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
