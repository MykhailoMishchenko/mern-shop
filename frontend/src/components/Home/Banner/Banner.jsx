import React from 'react';
import styles from "./Banner.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay, Navigation} from "swiper/core";
import "../../../styles/swiper-bundle.css";
import {NavLink} from "react-router-dom";
import bannerWoman from "../../../assets/image/stock/banner-woman.jpeg";
import bannerMan from "../../../assets/image/stock/banner-man.jpeg";
import bannerAccessories from "../../../assets/image/stock/accessories.svg";

SwiperCore.use([Navigation, Autoplay]);

const Banner = () => {
  const slides = [
    <SwiperSlide key={`1`}>
      <img src="/sunglasses/test.JPG" alt=""/>
    </SwiperSlide>,
    <SwiperSlide key={`2`}>
      <img src="/sunglasses/slider/slider-2.jpeg" alt=""/>
    </SwiperSlide>,
    <SwiperSlide key={`3`}>
      <img src="/sunglasses/slider/slider-3.jpeg" alt=""/>
    </SwiperSlide>,
    <SwiperSlide key={`4`}>
      <img src="/sunglasses/slider/slider-1.jpeg" alt=""/>
    </SwiperSlide>,
    <SwiperSlide key={`5`}>
      <img src="/sunglasses/slider/slider-5.jpeg" alt=""/>
    </SwiperSlide>,
    <SwiperSlide key={`6`}>
      <img src="/sunglasses/slider/slider-6.jpeg" alt=""/>
    </SwiperSlide>,

  ];
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <Swiper id="main" className={styles.slider} navigation loop autoplay>{slides}</Swiper>
        <h2>НОВАЯ КОЛЛЕКЦИЯ</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.woman}>
            <img src={bannerWoman} alt="Для женщин"/>
            <NavLink to="women">Женщины</NavLink>
          </div>
          <div className={styles.man}>
            <img src={bannerMan} alt="Для мужчин"/>
            <NavLink to="/men">Мужчины</NavLink>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.accessories}>
            <div className={styles.comingSoon}><p>Скоро!</p></div>
            <img src={bannerAccessories} alt="Аксессуары"/>
            <NavLink to="/accessories">Аксессуары</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
