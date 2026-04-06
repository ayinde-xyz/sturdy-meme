"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import hero1 from "@/public/hero/hero1.jpg";
import hero2 from "@/public/hero/hero2.jpg";
import hero3 from "@/public/hero/hero3.jpg";
import hero4 from "@/public/hero/hero4.jpg";
import hero5 from "@/public/hero/hero5.jpg";
import hero6 from "@/public/hero/hero6.jpg";
import { useRef } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const slides = [
  {
    title: "Raising Climate-Smart Leaders for a Green Future",
    description:
      "We are a youth-led environmental movement on a mission to educate and engage communities.",
    image: hero3,
    mobileImage: hero4,
  },
  {
    title: "Join the Green Revolution",
    description:
      "Discover how The Chrome Green Club is leading the charge towards a sustainable future.",
    image: hero1,
    mobileImage: hero5,
  },
  {
    title: "Empowering Change, One Step at a Time",
    description:
      "Together, we can create a world where green choices are the norm.",
    image: hero2,
    mobileImage: hero6,
  },
];

const Hero = () => {
  const isMobile = useIsMobile();
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress),
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="min-h-screen w-full flex  items-center justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}>
        {slides.map((slide, index) => (
          <SwiperSlide className="relative  h-full" key={index}>
            <figure>
              <div className="bg-linear-to-b  from-background-yellow/10 to-background-green/30 to-95% backdrop-opacity-95 absolute h-full w-full"></div>
              <Image
                quality={100}
                style={{ objectFit: "cover", zIndex: -1 }}
                priority
                placeholder="blur"
                src={isMobile ? slide.mobileImage : slide.image}
                alt={slide.title}
              />
            </figure>
            <div className="absolute bottom-10 left-10 bg-opacity-50 p-6 rounded-md">
              <h1 className="text-xl md:text-3xl font-bold text-white">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg text-white mt-4">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Hero;

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function App() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
// }
