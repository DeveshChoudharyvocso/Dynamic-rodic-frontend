"use client";

import React, { useRef, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
// import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import KeenSlider from "keen-slider";
import Image from "next/image";

const SliderProfile = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      });

      // Add event listeners for navigation buttons (if present)
      const prevButton = document.getElementById("prev-button");
      const nextButton = document.getElementById("next-button");

      if (prevButton) {
        prevButton.addEventListener("click", () => slider.prev());
      }

      if (nextButton) {
        nextButton.addEventListener("click", () => slider.next());
      }
    }
  }, [sliderRef]);

  return (
    <div className="h-[500px] w-4/5 mx-auto  m-4">
      <section className="">
        <div className=" max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-8">
            {/* Heading and Introduction (replace with your content) */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900">
                Our Clients Love Us
              </h2>
              <p className="mt-4 text-gray-500">
                Hear what our happy customers have to say about our services.
              </p>
            </div>

            {/* Navigation buttons (optional) */}
            <div className=" lg:flex justify-end">
              <button
                id="prev-button"
                type="button"
                className="bg-orange-400 text-white py-1 px-2 rounded-xl"
              >
                prev
              </button>
              <button
                id="next-button"
                type="button"
                className="bg-orange-400 text-white py-1 px-2 rounded-xl"
              >
                Next
              </button>
            </div>

            {/* Testimonial slider */}
            <div
              ref={sliderRef}
              id="keen-slider"
              className="keen-slider hidden lg:block"
            >
              {/* Add your testimonial content here (replace with your data) */}

              {/* Testimonial 1 */}
              <div className="keen-slider__slide">
                <blockquote>
                  <div className="flex items-center">
                    {/* <svg
                      className="h-6 w-6 fill-current text-yellow-500"
                      viewBox="0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.047 7.548a1 1 0 00-1.414-1.414v3.939l6 2.255a1 1 0 00.952.15l.048-.048a1 1 0 01.151.952zM5.548 8.548a1 1 0 110-1.414v4.39l5.5 2a1 1 0 00.952.15l.048-.048a1 1 0 01.151.952z" />
                    </svg> */}
                    <h2 className="text-lg font-medium ml-4">John Doe</h2>
                  </div>

                  <Image
                    src="/construction-silhouette.jpg"
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-md w-96 h-96"
                  />
                </blockquote>
              </div>

              {/* Testimonial 2 (replace with your content) */}
              <div className="keen-slider__slide">
                <blockquote>
                  <div className="flex items-center ">
                    <h2 className="text-lg font-medium ml-4">John Doe</h2>
                  </div>

                  <Image
                    src="/construction-silhouette.jpg"
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-md w-96 h-96"
                  />
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SliderProfile;
