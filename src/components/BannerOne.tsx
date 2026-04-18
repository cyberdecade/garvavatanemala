"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/assets/images/thumbs/slider-1.webp",
    subtitle: "The essence of Maharashtra's culture, village life, and farming traditions come to life amidst the serene backdrop of nature.",
    title: "Discover the Essence of Rural Maharashtra",
  },
  {
    id: 2,
    image: "/assets/images/thumbs/slider-2.webp",
    subtitle: "Indulge in a delightful culinary journey with our authentic Maharashtrian cuisine, crafted with farm-fresh ingredients and traditional flavors.",
    title: "A Taste of Tradition, Served Fresh!",
  },
  {
    id: 3,
    image: "/assets/images/thumbs/slider-3.webp",
    subtitle: "Escape the hustle and bustle of city life and unwind in our cozy, well-appointed rooms. Experience the perfect blend of rustic charm and modern comfort, making your stay unforgettable.",
    title: "Stay, Relax & Rejuvenate!",
  },
];

const BannerOne: FC = () => {
  return (
    <div className="banner-one-slider-wrapper position-relative w-100">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-100 h-100"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className='banner-area background-img position-relative overflow-hidden w-100'>
              <Image
                src={slide.image}
                alt='Banner background'
                fill
                style={{ objectFit: "cover" }}
                priority={slide.id === 1}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 h-100 tw-z-1"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)' }}
              />
              <div className='container position-relative z-2' style={{ transform: 'translateY(60px)' }}>
                <div className='row align-items-end justify-content-center' style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.25) 25%, rgba(0,0,0,0.25) 75%, transparent 100%)' }}>
                  <div className='col-xl-10 col-lg-12'>
                    <div className='text-center'>
                      <h1 className='banner-title tw-text-12 text-white fw-normal mb-0 tw-char-animation tw-mb-9'>
                        {slide.title}
                      </h1>

                      <h6 className='banner-subtitle tw-text-xl text-white mt-4 tw-leading-loose tw-tracking-wider'>
                        {slide.subtitle}
                      </h6>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerOne;
