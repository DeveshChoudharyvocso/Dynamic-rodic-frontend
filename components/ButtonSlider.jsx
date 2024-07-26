"use client";
import tabicons from "@/app/style/images/tab-icons.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

function ButtonSlider({ flag, heading, maindata }) {
  const [isActiveLink, setIsActiveLink] = useState(0);

  const handleActiveLink = (index) => {
    setIsActiveLink(index);
  };

  function sliceAfterSecondFullStop(content) {
    const parts = content.split(".");
    if (parts.length > 2) {
      return parts.slice(0, 2).join(".") + "."; // Combine the first three parts and add the third full stop back
    }
    return content; // If there are less than 2 full stops, return the original content
  }

  return (
    <>
      <section
        className={`weSpecialize-main-block padding-100 ${flag ? "keyservice-offering-main-block" : ""
          }`}
      >
        <div className="container">
          <div className="services-heading-info">
            <h2
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              {heading}
            </h2>
          </div>

          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
              }}
              className="casestudy-tab-main"
            >
              <CarouselContent className="tabbtn-slider-cover ml-0">
                {maindata?.map((bdata, index) => (
                  <CarouselItem key={index} className="col pl-0">
                    <button
                      className={
                        isActiveLink === index
                          ? "specialize-tab-btn active-tab-btn wow fadeInUp"
                          : "specialize-tab-btn wow fadeInUp"
                      }
                      onClick={() => handleActiveLink(index)}
                    >
                      {bdata?.heading}
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="scrollbar-previous-btn border-0" />
              <CarouselNext className="scrollbar-next-btn border-0" />
            </Carousel>
          </div>

          {/* Dynamic Content */}
          <div>
            {console.log(maindata)}
            {maindata?.map(
              (items, index) =>
                isActiveLink === index && (
                  <div className="row tab-columns" key={items?.id}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 home-tab-left-block">
                      <h3
                        className="wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.1s"
                      >
                        <Image
                          loading="lazy"
                          className="img-fluid"
                          src={tabicons?.src}
                          alt="discover-carrier"
                          width={54}
                          height={54}
                        />{" "}
                        {items?.heading}
                      </h3>
                      {/* <p className="">{data?.attributes?.summary}</p> */}

                      <RenderHtmlRichText
                        content={sliceAfterSecondFullStop(items?.summary)}
                      />
                      <Link
                        className="readmore-btn border-btn wow fadeInUp"
                        href={`/sectors/${items?.slug}`}
                        data-wow-duration="1s"
                        data-wow-delay="0.3s"
                      >
                        Explore
                      </Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                      <div
                        className="home-tab-right-block wow fadeInUp"
                        data-wow-duration="1s"
                        data-wow-delay="0.1s"
                      >
                        <Image
                          loading="lazy"
                          className="img-fluid"
                          src={`${items?.imageUrl || ""}`}
                          alt="discover-carrier"
                          width={908}
                          height={573}
                        />
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ButtonSlider;
