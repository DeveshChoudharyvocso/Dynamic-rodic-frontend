"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

const allowedMediaTypesVideo = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/3gpp",
  "video/avi",
  "video/quicktime",
  "video/x-matroska",
  "video/x-ms-wmv",
  "video/x-flv",
];

function SwiperCarosuel({ data }) {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    setProgress(1 - progress);
  };
  const handleTitleClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };
  const onSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
    setProgress(0);
  };
  return (
    <div className="heroslider-main">
      <Swiper
        className="swiper-scale-effect"
        speed={2000}
        spaceBetween={30}
        effect="fade"
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        // className="w-full h-[550px]"
        onSlideChange={onSlideChange}
        ref={swiperRef}
      >
        {data?.data?.attributes?.heroSection?.map((slider, index) => (
          <SwiperSlide
            className="flex items-center justify-center text-xl"
            key={slider?.id}
          // style={{
          //   backgroundImage: `url(${
          //     slider?.image?.data?.attributes?.url
          //   })`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   width: "100%",
          //   height: "100%",
          // }}
          >
            {/* conditionaling rendering */}

            {allowedMediaTypesVideo.includes(
              slider?.image?.data?.attributes?.mime
            ) ? (
              <video width="100%" playsInline autoPlay muted loop>
                <source
                  unoptimized
                  // src={baseUrl + currentMedia?.url}
                  src={`${slider?.image?.data?.attributes?.url}`}
                  type="video/mp4"
                />
              </video>
            ) : (
              <Image
                className="object-cover object-center rounded w-full h-[700px]"
                alt="hero"
                src={`${slider?.image?.data?.attributes?.url}`}
                // width={750}
                width={slider?.image?.data?.attributes?.width}
                // height={900}
                height={slider?.image?.data?.attributes?.height}
              />
            )}

            {/* <Image
              className="object-cover object-center rounded w-full h-[700px]"
              alt="hero"
              src={`${
                slider?.image?.data?.attributes?.url
              }`}
              // width={750}
              width={slider?.image?.data?.attributes?.width}
              // height={900}
              height={slider?.image?.data?.attributes?.height}
            /> */}
          </SwiperSlide>
        ))}

        <div className="banner-progressbar-line">
          <div className="container">
            <div
              className="banner-top-heading wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <RenderHtmlRichText
                className="wow fadeInUp"
                content={
                  data?.data?.attributes?.heroSection[currentSlideIndex]
                    ?.subHeading
                }
              />

              {/* <a className="readmore-btn border-btn wow fadeInUp" href="#">
                Read more
              </a> */}
            </div>
            <div className="banner-progressbar-box progressbar-box-content">
              {data?.data?.attributes?.heroSection?.map((info, index) => (
                <div
                  key={index}
                  className={`px-4 w-full wow fadeInUp ${currentSlideIndex === index ? "active_slider" : ""
                    }`}
                  onClick={() => handleTitleClick(index)}
                >
                  {/* Progress container */}
                  <span className="slidernumber-count">{index + 1}</span>
                  <div className="progress-bar-line">
                    <div
                      className="progressbar-loading-line"
                      style={{
                        width: `${currentSlideIndex === index ? progress * 100 : 0
                          }%`,
                      }}
                    ></div>
                  </div>
                  <p
                    className={
                      currentSlideIndex === index
                        ? "progressbar-subheading"
                        : "progressbar-subheading"
                    }
                  >
                    {info?.sliderName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperCarosuel;
