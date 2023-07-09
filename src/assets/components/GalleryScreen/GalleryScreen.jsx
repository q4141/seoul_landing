import React, { useState } from "react";
import styles from "./GalleryScreen.module.css";
import galleryWords from "../../img/galleryWords.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image from "../../img/carousel Images/Changgyong-Palace-background-Seoul.webp";
import image2 from "../../img/carousel Images/illuminated-buildings-and-city-street-at-night-902452584-94fe3f3db5374dbbb82cc2372534be28.jpg";
import image3 from "../../img/carousel Images/Insadong-GettyImages-691361168.webp";
import image4 from "../../img/carousel Images/Kyongbok-Palace-Seoul.webp";
import image5 from "../../img/carousel Images/Namdaemun-Market-Seoul-South-Korea.webp";
import image6 from "../../img/carousel Images/Namdaemun-Seoul-destruction-2013.webp";

const GalleryScreen = () => {
  const images = [image, image2, image3, image4, image5, image6];

  return (
    <section id="gallerySection" className={styles.gallerySection}>
      <div className={styles.headline}>
        <h2>GALLERY</h2> <img src={galleryWords} alt="" />
      </div>
      <div className={styles.slider}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide>
              <img className={styles.imageScroll} src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryScreen;
