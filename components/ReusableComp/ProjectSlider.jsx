"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ArrowCircle from "@/app/style/images/arrow-circle-icon.png";
import casestudyicon from "@/app/style/images/road.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import RenderHtmlRichText from "./RenderHtmlRichText";

function ProjectSlider({ data }) {
  console.log("data>>>", data);
  return (
    <>
      <section className="casestudies-main-block padding-100">
        <div className="container">
          <div className="services-heading-info">
            <h2
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              {data?.data?.attributes?.heading}
            </h2>

            <a
              className="readmore-btn border-btn explorecasestudy-btn wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
              href="#"
            >
              Explore
            </a>
          </div>
          <div className="casestudy-slider-main">
            <Swiper
              navigation={true}
              modules={[Pagination, Navigation]}
              pagination={{
                type: "progressbar",
                el: ".progress-slide-carousel",
              }}
              slidesPerView={2.5}
              spaceBetween={25}
              breakpoints={{
                1920: {
                  slidesPerView: 2.5,
                },
                1028: {
                  slidesPerView: 2,
                },
                990: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
              className="mySwiper  wow fadeInUp"
            >
              {[
                ...data?.data?.attributes?.caseStudies?.caseStudies?.data,
                ...data?.data?.attributes?.caseStudies?.caseStudies?.data,
                ...data?.data?.attributes?.caseStudies?.caseStudies?.data,
                ...data?.data?.attributes?.caseStudies?.caseStudies?.data,
              ]?.map((value, index) => (
                <SwiperSlide className="casestudy-box" key={index}>
                  <div
                    className="casestudybox-inner"
                    style={{
                      backgroundImage: `url(${value?.attributes?.caseStudies?.image?.data?.attributes?.formats?.medium?.url})`,

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <span className="casestudy-catg-btn">
                      {value?.attributes?.caseStudies?.heading}
                    </span>
                    <div className="service-box-hover">
                      <Image
                        loading="lazy"
                        className="img-fluid"
                        src={casestudyicon?.src}
                        alt="arrow-circle"
                        width={72}
                        height={59}
                      />

                      <div className="casestudies-info-text">
                        <div className="servicebox-default-heading">
                          {value?.attributes?.caseStudies?.heading}
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
                            content={value?.attributes?.caseStudies?.subHeading}
                          />
                          <a href="#" className="readmore-btn border-btn">
                            Explore
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="progress-slide-carousel z-30 w-full mt-12 !bottom-2 !top-auto right-0 mx-auto" />
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSlider;
