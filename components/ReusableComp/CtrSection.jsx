import Image from "next/image";
import RenderHtmlRichText from "./RenderHtmlRichText";

function CtrSection({ data }) {
  return (
    <>
      <section
        className={`company-info-block-main padding-100  ${
          data?.reverseOrder ? "about-section-even" : ""
        }`}
        key={data?.id}
      >
        <div className="container ">
          <div className="row ">
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 company-overview-img wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <figure>
                <Image
                  alt="img"
                  src={`${data?.image?.data?.attributes?.url}`}
                  className="img-fluid"
                  height={1000}
                  width={1000}
                  quality={100}
                />
              </figure>
            </div>

            <div
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 company-overview-info wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h2>{data?.heading}</h2>

              <RenderHtmlRichText content={data?.content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CtrSection;
