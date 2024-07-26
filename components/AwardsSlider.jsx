"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

function AwardsSlider({ data }) {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <>
      <section className="casestudies-main-block awards-slider-main-block padding-100">
        <div className="container">
          {/* <div className="services-heading-info">
            <h2
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              {data?.data?.attributes?.caseStudies?.heading}
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              {data?.data?.attributes?.caseStudies?.subHeading}
            </p>
            <Link
              className="readmore-btn border-btn explorecasestudy-btn wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              href={data?.data?.attributes?.caseStudies?.button.url || ""}
            >
              {data?.data?.attributes?.caseStudies?.button.label}
            </Link>
          </div> */}
          <div className="casestudy-slider-main">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{
                type: "progressbar",
                el: ".progress-slide-carousel",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              slidesPerView={2.5}
              spaceBetween={40}
              loop={true} // Enable looping
              breakpoints={{
                1920: {
                  slidesPerView: 2.1,
                },
                1600: {
                  slidesPerView: 2.5,
                },
                1400: {
                  slidesPerView: 2.5,
                },
                1200: {
                  slidesPerView: 2.5,
                },
                1028: {
                  slidesPerView: 2,
                },
                990: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 1.2,
                },
                480: {
                  slidesPerView: 1.2,
                },
                320: {
                  slidesPerView: 1.2,
                },
              }}
              className="mySwiper wow fadeInUp"
            >
              {data?.data?.attributes?.contentBlock?.map((data, index) => (
                <SwiperSlide
                  className="casestudy-box"
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <div
                      className="casestudybox-inner"
                      style={{
                        backgroundImage: `url(${value?.attributes?.coverImage?.data?.attributes?.formats?.medium?.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <span className="casestudy-catg-btn">
                        {
                          value?.attributes?.overview?.sectors?.data?.[0]
                            ?.attributes?.heading
                        }
                      </span>
                      <div className="service-box-hover">
                        <Image
                          loading="lazy"
                          className="img-fluid"
                          src={
                            value?.attributes?.overview?.sectors?.data?.[0]
                              ?.attributes?.icon?.data?.attributes?.url
                          }
                          alt="arrow-circle"
                          width={72}
                          height={59}
                        />

                        <div className="casestudies-info-text">
                          <div className="servicebox-default-heading">
                            {value?.attributes?.heading}
                            <Image
                              loading="lazy"
                              className="img-fluid"
                              src={ArrowCircle?.src}
                              alt="arrow-circle"
                              width={43}
                              height={43}
                            />
                          </div>
                          <div className="casestudies-hover-text">
                            <RenderHtmlRichText
                              content={value?.attributes?.subHeading}
                            />
                            <Link
                              href={`/case-studies/${
                                value.attributes?.slug || ""
                              }`}
                              className="readmore-btn border-btn"
                            >
                              Explore
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div> */}

                  <div className="row ">
                    <div
                      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.1s"
                    >
                      <div className="company-overview-img">
                        <figure>
                          <Image
                            alt="img"
                            src={`${data?.image?.data?.attributes?.url}`}
                            className="img-fluid"
                            height={1000}
                            width={1000}
                            quality={100}
                          />
                        </figure>
                      </div>
                    </div>

                    <div
                      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <div className="awards-slider-info-block">
                        <h3>{data?.heading}</h3>
                        <RenderHtmlRichText content={data?.content} />
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default AwardsSlider;
