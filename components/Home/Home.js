import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

// import PricingData from "../../data/pricing.json";

// import SplitImg from "../../public/images/split/split-2.png";
// import SplitLogo from "../../public/images/split/split-2-logo.png";
// import DarkSplitImg from "../../public/images/light/split/split-2.png";
// import DarkSplitLogo from "../../public/images/light/split/split-2-logo.png";
// import bannerImg from "../../public/images/bg/slider-main-image.png";
// import bannerWhiteImg from "../../public/images/light/bg/slider-main-image.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";
// import bgShapeThree from "../../public/images/bg/bg-shape-two.png";

import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import CtaOne from "../CallToActions/Cta-One";
// import Pricing from "../Pricing/Pricing";
// import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
// import BrandTwo from "../Brands/Brand-Two";
// import CtaTwo from "../CallToActions/Cta-Two";
import { useAppContext } from "@/context/Context";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { isLightTheme } = useAppContext();
  const [selectedTab, setSelectedTab] = React.useState('video-generate');


  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 10;
  const deletingSpeed = 10;

  // const { isLightTheme } = useAppContext();
  const words = [
    "Corporate Training",
    "CRM & ERP Software",
    "Robotic Process Automation",
  ];

  useEffect(() => {
    Sal();

    const handleTyping = () => {
      const word = words[wordIndex];

      if (!isDeleting) {
        // Typing effect
        setCurrentWord(word.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex === word.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 500);
        }
      } else {
        // Deleting effect
        setCurrentWord(word.substring(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }
    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, wordIndex]);
    

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                
                <h1  className="title _display-one">
                  <div className=" _display-one">
                    <div className="">
                    Empowering Enterprises through
                    </div>
                    {/* <br /> */}
                    <span 
                      style={{ minHeight: "100px"}}
                      className="theme-gradient ">
                      {currentWord}
                      <span className="blinking-cursor">|</span>
                    </span>
                  </div>
                  
                </h1>
                <p className="description">
                  Leverage our AI Consulting Services to take full advantage of the collected data and gain valuable insights that help automate business processes and boost revenue.
                </p>
                <div className="">
                <Link className="btn-default " href="/contact">
                    Contact Us
                  </Link>
                </div>
                {/* <div className="form-group">
                  <textarea
                    name="text"
                    id="slider-text-area"
                    cols="30"
                    rows="2"
                    placeholder="Enter a prompt, for example: a fundraising deck to a mobile finance app called Intuitive"
                  ></textarea>
                  <Link className="btn-default " href="/text-generator">
                    Start with AI
                  </Link>
                </div> */}
                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-11 col-xl-11 justify-content-center">
              <div className="slider-frame">
                <Image
                  className="slider-image-effect"
                  src={isLightTheme ? bannerImg : bannerWhiteImg}
                  width={1055}
                  height={898}
                  alt="Banner Images"
                />
              </div>
            </div> */}
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <p className="b1 mb--0 small-title">
                  {/* truest 800,000+ HIGHLY PRODUCTIVE Company */}
                  Trusted by
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--10">
              <BrandList />
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">
                    UNLOCKS THE POTENTIAL ai
                  </span>
                </h4>
                <h2 className="title mb--0">
                  Services  we offer
                </h2>
              </div>
            </div>
          </div>
          <TabStyleOne 
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
      </div>
      {/* =============================== */}
      {selectedTab === 'audio-generate' && <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Corporate Taining & Bootcamp</span>
                </h4>
                <h2 className="title mb--60">
                  We provide <br/> world class instructors
                </h2>
              </div>
            </div>
          </div>
        </div>
        <ServiceStyleOne />
      </div>}
      {/* ============================================= */}
      {
        selectedTab === 'video-generate' &&

      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="">
          <div className="text-center title  theme-gradient fs-3">
            AI Consulting & Development Services
          </div>
          {/* <div className="text-center d-xl-block d-none   mb--40 h2">
            People choose us because <br/> we take our process serious
          </div> */}
          <div className="text-center  title mb--40 fs-1 text-white">
            People choose us because <br/> we take our process serious
          </div>
        </div>
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
      </div>
      }
      {/* ============================================= */}
      {/* <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">AI Collaboration</span>
                </h4>
                <h2 className="title mb--20">
                  AI Chat app for seamless
                  <br /> collaboration
                </h2>
                <Link
                  className="btn-default btn-large color-blacked"
                  href="/contact"
                >
                  Try It Now{" "}
                  <i className="fa-sharp fa-light fa-arrow-right ml--5"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <div className="collabration-image-section">
                <Image
                  src={isLightTheme ? SplitImg : DarkSplitImg}
                  width={1305}
                  height={712}
                  alt="collabration-image"
                />
                <div className="logo-section">
                  <div className="center-logo">
                    <Image
                      src={isLightTheme ? SplitLogo : DarkSplitLogo}
                      width={104}
                      height={143}
                      alt="Small Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>

      {/* <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--40">
                  Pricing plans for everyone
                </h2>
              </div>

              <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {PricingData &&
                    PricingData.pricing.map((data, index) => (
                      <button
                        className={`nav-link ${data.isSelect ? "active" : ""}`}
                        id={`${data.priceId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.priceId}`}
                        type="button"
                        role="tab"
                        aria-controls={data.priceId}
                        aria-selected="false"
                        key={index}
                      >
                        {data.priceType}{" "}
                        {data.discount ? (
                          <span className="rainbow-badge-card badge-border">
                            -{data.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                </div>
              </nav>
            </div>
          </div>

          <Pricing
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div> */}
      <div className="mt--80"></div>
      {/* <div className="aiwave-service-area rainbow-section-gap">
        <div className="container">
          <div className="row row--15 service-wrapper">
            <ServiceTwo />
          </div>
        </div>
      </div> */}

      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Testimonials </span>
                </h4>
                <h2 className="title mb--60">Our Clients Speak For Us</h2>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      {/* <div className="rainbow-brand-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title rating-title text-center sal-animate"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
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
                <p className="subtitle mb--0">Based on 20,000+ reviews on</p>
              </div>
            </div>
          </div>
          <BrandTwo />
          <div className="bg-shape-left">
            <Image
              src={bgShapeThree}
              width={688}
              height={1055}
              alt="Bg shape"
            />
          </div>
        </div>
      </div> */}

      <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
        {/* <div className="container">
          <CtaTwo />
        </div> */}
      </div>
    </>
  );
};

export default Home;
