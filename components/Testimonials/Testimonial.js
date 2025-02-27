import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import "venobox/dist/venobox.min.css";

import darkBg from "../../public/images/light/service/bg-testimonial.png";
import darkBgHover from "../../public/images/light/service/bg-testimonial-hover.png";

import TestimonialData from "../../data/testimonial.json";
import { useAppContext } from "@/context/Context";

const Testimonial = () => {
  const { isLightTheme } = useAppContext();
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "70%" : "100%",
      });
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Slider
            {...settings}
            className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows"
          >
            {TestimonialData &&
              TestimonialData.testimonial.map((data, index) => (
                <div className="slide-single-layout" key={index}>
                  <div
                    className={`rainbow-box-card ${
                      data.isActive ? "active" : ""
                    } card-style-default testimonial-style-defalt has-bg-shaped`}
                  >
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                      </div>
                      <div className="content">
                        <p 
                        style={{ minHeight : "100px"}}
                        
                        className="description">{data.desc}</p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">{data.name}</p>
                            <p className="desc">{data.post}</p>
                            <div className="desc-img">
                              {/* <Image
                                src={data.brandImg}
                                width={86}
                                height={23}
                                alt="Brand Image"
                              /> */}
                            </div>
                          </div>
                          <div className="meta-img-section">
                            {data?.video ? <Link
                              className="btn-default rounded-player style-two xs-size popup-video"
                              href={data.video}
                              data-vbtype="video"
                            >
                              <span>
                                <i className="fa-duotone fa-play"></i>
                              </span>
                            </Link> : null}
                            <a className="image" href="#">
                              <Image
                                // src={data.userImg}
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${data.userImg}`}

                                width={50}
                                height={60}
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <Image
                        className="bg"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${isLightTheme ? data.img : darkBg}`}
                        // src={isLightTheme ? data.img : darkBg}
                        width={415}
                        height={287}
                        alt=""
                      />
                      <Image
                        className="bg-hover"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${isLightTheme ? data.imgHover : darkBgHover}`}
                        // src={isLightTheme ? data.imgHover : darkBgHover}
                        width={415}
                        height={287}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
