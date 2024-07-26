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

function OtherSectors({ statsData, params, heading, link }) {
  return (
    <section className="other-services-main-block padding-100">
      <div className="container">
        <h2
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          {heading}
        </h2>
        <div className="row">
          <Carousel>
            <CarouselContent className="">
              {link.map((ddata) => (
                <div
                  className="col-12 col-md-6 col-sm-12 col-lg-6 col-xl-4 others-btn  wow fadeInUp"
                  key={ddata?.id}
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <CarouselItem className="bluebox-cover pl-0">
                    <Link href={ddata?.href}>
                      <div className="other-service-box">
                        <Image
                          src={ddata?.icon}
                          alt="other-service-icon"
                          className="img-fluid"
                          width={36}
                          height={47}
                        />
                        <p>{ddata?.heading}</p>
                      </div>
                    </Link>
                  </CarouselItem>
                </div>
              ))}
            </CarouselContent>
            <CarouselPrevious className="scrollbar-previous-btn border-0" />
            <CarouselNext className="scrollbar-next-btn border-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default OtherSectors;
