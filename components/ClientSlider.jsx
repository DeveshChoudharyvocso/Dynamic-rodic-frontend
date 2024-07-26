"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ClientSlider({ data }) {
  return (
    <>
      <section className="clientsPartners-block">
        <div className="container">
          <div className="clients-logo-block">
            <div className="clientsheading">
              <h2
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                clients
              </h2>
            </div>
            <Swiper
              autoplay={{
                delay: 400,
                disableOnInteraction: false,
              }}
              speed={1200}
              slidesPerView={8}
              spaceBetween={30}
              loop={true}
              navigation={false}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                // when window width is >= 1280px
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
                // when window width is >= 1440px
                1440: {
                  slidesPerView: 7,
                },
              }}
              className="mySwiper wow fadeInUp"
            >
              {data?.data?.attributes?.Footer?.client_and_partners?.data?.map(
                (urlData, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="img-fluid"
                      src={`${urlData?.attributes?.image?.data?.attributes?.url}`}
                      alt="nhai"
                      height={
                        urlData?.attributes?.image?.data?.attributes?.height
                      }
                      width={
                        urlData?.attributes?.image?.data?.attributes?.width
                      }
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            {/*
            <Swiper
              autoplay={{
                delay: 400,
                disableOnInteraction: false,
              }}
              speed={1200}
              slidesPerView={7}
              spaceBetween={60}
              loop={true}
              navigation={false}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 5,
                },
                // when window width is >= 1280px
                1280: {
                  slidesPerView: 6,
                },
                // when window width is >= 1440px
                1440: {
                  slidesPerView: 7,
                },
              }}
            >
              {Array.from({ length: 18 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <Image
                    className="img-fluid"
                    src={img3?.src}
                    alt="nhai"
                    height={100}
                    width={100}
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}

            {/* <ul>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
          <li>
            <Image
              className="img-fluid"
              src={img3?.src}
              alt="nhai"
              height={100}
              width={100}
            />
          </li>
        </ul> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientSlider;
