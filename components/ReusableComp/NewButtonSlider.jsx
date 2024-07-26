"use client";
import Image from "next/image";
import { useState } from "react";
import RenderHtmlRichText from "./RenderHtmlRichText";

function NewButtonSlider({ data }) {
  const [isActiveLink, setIsActiveLink] = useState(0);

  const handleActiveLink = (index) => {
    setIsActiveLink(index);
  };

  return (
    <>
      {data?.data?.attributes?.keyServices ? (
        <section className="weSpecialize-main-block keyserviceoffering-main-block   padding-100 ">
          <div className="container">
            <div className="services-heading-info">
              <h2 className="">
                {data?.data?.attributes?.keyServices?.heading}
              </h2>

              <p>{data?.data?.attributes?.keyServices?.subHeading}</p>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <div className="keyservice-offering-list">
                  {/* <Carousel
              <p>{data?.data?.attributes?.keyServices?.subHeading}</p>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <div className="keyservice-offering-list">
                  {/* <Carousel
=======
>>>>>>> Stashed changes
                  opts={{
                    align: "start",
                  }}
                  className="casestudy-tab-main"
                >
                  <CarouselContent className="tabbtn-slider-cover ml-0 block mr-5">
                    {data?.data?.attributes?.sectorsWeSpecializedIn?.sectors?.data?.map(
                      (bdata, index) => (
                        <CarouselItem
                          key={index}
                          className="p-0 sectortab-list-main"
                        >
                          <button
                            className={
                              isActiveLink === index
                                ? "sector-tab-btn active-tab-btn"
                                : "sector-tab-btn"
                            }
                            onClick={() => handleActiveLink(index)}
                          >
                            {bdata?.attributes?.heading}
                          </button>
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>
                  <CarouselPrevious className="scrollbar-previous-btn" />
                  <CarouselNext className="scrollbar-next-btn" />
                </Carousel> */}
                  <RenderHtmlRichText
                    content={data?.data?.attributes?.keyServices?.content}
                  />
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                {/* Dynamic Content */}
                {/* <div>
                {data?.data?.attributes?.sectorsWeSpecializedIn?.sectors?.data?.map(
                  (data, index) =>
                    isActiveLink === index && (
                      <div className="" key={index}>
                        <div className="home-tab-right-block">
                          <Image
                            loading="lazy"
                            className="img-fluid"
                            src={`${data?.attributes?.sectors?.image?.data?.attributes?.formats?.medium?.url}`}
                            alt="discover-carrier"
                            width={908}
                            height={573}
                          />
                        </div>
                      </div>
                    )
                )}
              </div> */}
                <div className="home-tab-right-block">
                  <figure>
                    <Image
                      className="img-fluid"
                      src={
                        data?.data?.attributes?.keyServices?.image?.data
                          ?.attributes?.formats?.large?.url
                      }
                      height={1200}
                      width={1200}
                      quality={100}
                      alt="image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default NewButtonSlider;
