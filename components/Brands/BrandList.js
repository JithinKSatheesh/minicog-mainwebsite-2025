import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Slider from "react-slick";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


// import brandImg1 from "../../public/images/brand/strapi.png";
// import brandImg3 from "../../public/imagesCustom/brands/l4-brand3.png";
import brandImg1 from "../../public/imagesCustom/brands/l4-brand1.png";
import brandImg2 from "../../public/imagesCustom/brands/l4-brand2.png";
import brandImg3 from "../../public/imagesCustom/brands/l4-brand3.webp";
import brandImg4 from "../../public/imagesCustom/brands/l4-brand4.png";
import brandImg5 from "../../public/imagesCustom/brands/l4-brand55.png";
import brandImg6 from "../../public/imagesCustom/brands/l4-brand6.png";
import brandImg7 from "../../public/imagesCustom/brands/l4-brand7.png";
import brandImg8 from "../../public/imagesCustom/brands/l4-brand8.png";
// import brandImg1 from "../../public/images/brand/strapi.png";
// import brandImg2 from "../../public/images/brand/stenciljs.png";
// import brandImg3 from "../../public/images/brand/spotify.png";
// import brandImg4 from "../../public/images/brand/woocommerce.png";
// import brandImg5 from "../../public/images/brand/slack.png";
// import brandImg6 from "../../public/images/brand/mapbox.png";

const BrandList = () => {
  // var settings = {
  //   centerMode: true,
  //   draggable: true,
  //   centerPadding: "150px",
  //   dots: true,
  //   arrows: false,
  //   // infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   speed: 2000,
  //   // pauseOnHover: true,
  //   cssEase: "linear",
  //   touchThreshold:100,
    
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: "40px",
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };


  return (
    <>
      <Swiper
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      // autoplay={{ delay: 1000 }}
      // autoplay={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={3000}
      modules={[Autoplay]}
      cssMode={false}
      breakpoints={{
        480: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 5 },
      }}
    >
      <SwiperSlide>
        <Image src={brandImg1} alt="Brand Image" width={120} height="auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg7} alt="Brand Image" width={170} height="auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg2} alt="Brand Image" width={150} height={50} style={{ filter: 'brightness(0) invert(1)' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg6} alt="Brand Image" width={140} height="auto" style={{ marginTop: '-10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg5} alt="Brand Image" width={220} height="auto" style={{ filter: 'brightness(0) invert(1)' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg4} alt="Brand Image" width={220} height="auto" style={{ filter: 'brightness(0) invert(1)', marginTop: '10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg3} alt="Brand Image" width={200} height="auto" style={{ filter: 'brightness(0) invert(1)' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={brandImg8} alt="Brand Image" width={160} height="auto" style={{ filter: 'brightness(0) invert(1)', marginTop: '10px' }} />
      </SwiperSlide>
    </Swiper>
      {/* <Slider
        {...settings}
        className="brand-list brand-style-2 slider-brand slider-brand-activation"
      >
        <li className="slide-single-layout">
          <Link href="#" className="pe-none">
            <Image
              src={brandImg1}
              alt="Brand Image"
              style={{ filter : "brightness(0) invert(1)", width : "120px", height : "auto" }}
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" className="pe-none" >
            <Image
              src={brandImg7}
              alt="Brand Image"
              style={{  width : "170px", height : "auto" }}
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" className="pe-none" >
            <Image
              src={brandImg2}
              width={132}
              height="auto"
              alt="Brand Image"
              style={{ filter : "brightness(0) invert(1)", width : "150px", height : "50px"  }}
            />
          </Link>
        </li>
        
        <li className="slide-single-layout">
          <Link href="#" className="pe-none">
            <Image
              src={brandImg6}
              alt="Brand Image"
              style={{ width : "140px", height : "auto", marginTop : "-10px" }}
              // style={{ filter : "brightness(0) invert(1)" }}
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" className="pe-none" >
            <Image
              src={brandImg5}
              width={165}
              height="auto"
              alt="Brand Image"
              style={{ filter : "brightness(0) invert(1)" , width : "220px", height : "auto"}}
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" className="pe-none" >
            <Image
              src={brandImg4}
              width={110}
              height="auto"
              alt="Brand Image"
              style={{ filter : "brightness(0) invert(1)", width : "220px", height : "auto", marginTop : "10px" }}
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" className="pe-none" >
            <Image
              src={brandImg3}
              width={132}
              height="auto"
              alt="Brand Image"
              style={{ filter : "brightness(0) invert(1)", width : "200px", height : "auto" }}
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#" className="pe-none" >
            <Image
              src={brandImg8}
              width={132}
              height="auto"
              alt="Brand Image"
              style={{ filter : "brightness(0) invert(1)", width : "160px", height : "auto", marginTop : "10px" }}
            />
          </Link>
        </li>
      
        
      </Slider> */}
    </>
  );
};

export default BrandList;
