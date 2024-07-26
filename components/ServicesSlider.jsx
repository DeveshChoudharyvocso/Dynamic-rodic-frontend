"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import ArrowCircle from "../app/style/images/arrow-circle-icon.png";

function ServicesSlider({ data }) {
  return (
    <Carousel className="">
      <CarouselContent className="ml-0">
        {data?.data?.attributes?.services?.services?.data?.map(
          (service, index) => (
            <CarouselItem
              key={service?.id}
              className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 pl-5 pr-0 service-card-box wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="">
                <div className="service-box-main" key={service?.id}>
                  <style jsx>{`
                    .service-box-main {
                      background-image: url("${service?.attributes
                        ?.homePageImage?.data?.attributes?.formats?.medium
                        ?.url}");
                      background-size: cover;
                      background-position: 100%;
                      background-repeat: no-repeat;
                      transition: 1s;
                      /* Add other styles for the div here */
                    }
                  `}</style>

                  <div className="servicebox-default-heading-main">
                    <div className="servicebox-default-heading">
                      {service?.attributes?.heading}
                    </div>
                    <Image
                      loading="lazy"
                      className="img-fluid"
                      src={ArrowCircle?.src}
                      alt="arrow-circle"
                      width={43}
                      height={43}
                    />
                  </div>
                  <div className="service-box-hover">
                    <Image
                      loading="lazy"
                      className="img-fluid"
                      src={service?.attributes?.icon?.data?.attributes?.url}
                      alt="arrow-circle"
                      width={72}
                      height={59}
                    />

                    <div className="servicebox-default-heading">
                      {service?.attributes?.heading}
                    </div>
                    <p>{service?.attributes?.subHeading}</p>
                    <Link
                      href={`/services/${service?.attributes?.slug}`}
                      className="readmore-btn border-btn"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className="scrollbar-previous-btn border-0" />
      <CarouselNext className="scrollbar-next-btn border-0" />
    </Carousel>
  );
}

export default ServicesSlider;
