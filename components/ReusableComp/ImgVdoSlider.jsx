// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import required modules
// import { Navigation, Pagination } from "swiper/modules";
// import ImgVdoBox from "./ImgVdoBox";

// function ImgVdoSlider({ data }) {
//   console.log(data?.data?.attributes?.ImageAndVideo);
//   return (
//     <>
//       <section className="casestudies-main-block home-video-mainblock padding-100">
//         <div className="container">
//           <div className="casestudy-slider-main">
//             <Swiper
//               navigation={true}
//               modules={[Pagination, Navigation]}
//               pagination={{
//                 type: "progressbar",
//                 el: ".progress-slide-carousel",
//               }}
//               slidesPerView={2.5}
//               spaceBetween={32}
//               breakpoints={{
//                 // when window width is >= 320px
//                 320: {
//                   slidesPerView: 1.1,
//                   spaceBetween: 25,
//                 },
//                 // when window width is >= 480px
//                 480: {
//                   slidesPerView: 1.1,
//                   spaceBetween: 25,
//                 },
//                 // when window width is >= 640px
//                 640: {
//                   slidesPerView: 2,
//                 },
//                 // when window width is >= 768px
//                 768: {
//                   slidesPerView: 2,
//                 },
//                 // when window width is >= 1024px
//                 1024: {
//                   slidesPerView: 2,
//                 },
//                 // when window width is >= 1280px
//                 1280: {
//                   slidesPerView: 2,
//                 },
//                 // when window width is >= 1440px
//                 1440: {
//                   slidesPerView: 2.5,
//                 },
//               }}
//               className="mySwiper wow fadeInUp"
//             >
//               {data?.data?.attributes?.ImageAndVideo?.map((vdata) => (
//                 <SwiperSlide className="casestudy-box" key={vdata?.id}>
//                   <ImgVdoBox vdata={vdata} />
//                 </SwiperSlide>
//               ))}

//               <div className="progress-slide-carousel z-30 w-full mt-12 !bottom-2 !top-auto right-0 mx-auto" />
//             </Swiper>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ImgVdoSlider;

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ImgVdoBox from "./ImgVdoBox";

function ImgVdoSlider({ data }) {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  console.log(data?.data?.attributes?.ImageAndVideo);
  return (
    <>
      <section className="casestudies-main-block home-video-mainblock padding-100 carrer-gallery-section-main gray-bg">
        <div className="container">
          <div className="casestudy-slider-main">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
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
              loop={true}
              slidesPerView={2.5}
              spaceBetween={32}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 25,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1.1,
                  spaceBetween: 25,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 2,
                },
                // when window width is >= 1280px
                1280: {
                  slidesPerView: 2,
                },
                // when window width is >= 1440px
                1440: {
                  slidesPerView: 2.5,
                },
              }}
              className="mySwiper wow fadeInUp"
            >
              {data?.data?.attributes?.ImageAndVideo?.map((vdata) => (
                <SwiperSlide
                  className="casestudy-box"
                  key={vdata?.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ImgVdoBox vdata={vdata} />
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

export default ImgVdoSlider;
