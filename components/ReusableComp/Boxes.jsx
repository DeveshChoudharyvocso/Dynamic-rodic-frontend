"use client";
import boxicon from "@/app/style/images/advisory-service-icon.png";
import ArrowCircle from "@/app/style/images/arrow-circle-icon.png";
import Image from "next/image";
import Link from "next/link";

function Boxes({ data, imageUrl, href = "" }) {
  return (
    <>
      <div className="service-box-main" key={data?.id}>
        <style jsx>{`
          .service-box-main {
            background-image: url("${imageUrl}");
            background-size: cover;
            background-position: 100%;
            background-repeat: no-repeat;
            transition: 1s;
            /* Add other styles for the div here */
          }
        `}</style>

        <div className="servicebox-default-heading-main">
          <div className="servicebox-default-heading">
            {data?.attributes?.heading}
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
            src={boxicon?.src}
            alt="arrow-circle"
            width={72}
            height={59}
          />
          <div className="servicebox-default-heading">
            {data?.attributes?.heading}
          </div>
          <p>{data?.attributes?.subHeading}</p>
          <Link href={href} className="readmore-btn border-btn">
            Explore
          </Link>
        </div>
      </div>
    </>
  );
}

export default Boxes;
