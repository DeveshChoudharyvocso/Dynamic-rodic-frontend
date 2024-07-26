"use client";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "wowjs";

function HeroSection({ data }) {
  return (
    <div>
      <section className="discover-rodic-main padding-100">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-12 col-lg-6 col-xl-6 col-sm-12 padding-right-50 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <h2
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                {data?.data?.attributes?.DiscoverRodic?.heading}{" "}
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                {data?.data?.attributes?.DiscoverRodic?.subHeading}
              </p>

              <Link
                href={data?.data?.attributes?.DiscoverRodic?.button?.url}
                className="readmore-btn border-btn wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                {data?.data?.attributes?.DiscoverRodic?.button?.label}
              </Link>
            </div>
            <div
              className="col-12 col-md-12 col-lg-6 col-xl-6 col-sm-12 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="rodic-counterstats-block">
                <Swiper
                  spaceBetween={30}
                  effect="fade"
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation, EffectFade]}
                  className="mySwiper"
                >
                  {data?.data?.attributes?.DiscoverRodic?.image?.data?.map(
                    (imgData) => (
                      <SwiperSlide
                        key={imgData?.id}
                        // style={{
                        //   backgroundImage: `url(${
                        //     imgData?.attributes?.formats?.medium?.url
                        //   })`,

                        //   backgroundSize: "cover",
                        //   backgroundPosition: "center",
                        //   width: "100%",
                        //   height: "100%",
                        // }}
                      >
                        <Image
                          loading="lazy"
                          className="img-fluid"
                          src={`${imgData?.attributes?.url}`}
                          alt="discover-rodic"
                          width={1000}
                          height={1000}
                          quality={100}
                        />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
