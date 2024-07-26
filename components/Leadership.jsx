import Link from "next/link";

function Leadership({ data, dumm }) {
  console.log("dum>>>>>>>>", dumm);
  console.log("data>>>>>>>", data);

  const filteredData = dumm.filter(
    (item) => item.__component === "section.leaderships"
  );
  console.log(filteredData[0]);

  return (
    <section className="testimonial-main-block padding-100">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3">
            <div className="services-heading-info">
              <h2
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                {/* {data?.data?.attributes?.Leadership?.heading} */}
                {filteredData[0]?.heading}
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                {filteredData[0]?.subHeading}
              </p>
              <Link href={data?.data?.attributes?.Leadership?.button?.url}>
                <button
                  className="readmore-btn border-btn wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  {data?.data?.attributes?.Leadership?.button?.label}
                </button>
              </Link>
            </div>
          </div>

          {data?.data?.attributes?.Leadership?.leaderships?.data?.map(
            (lData) => (
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 testimonail-mobile-mb wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                key={lData?.id}
              >
                <div
                  className="testimonial-author-image-box"
                  style={{
                    backgroundImage: `url(${lData?.attributes?.image?.data?.attributes?.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    transition: "1s",
                  }}
                >
                  <div className="author-info-mainblock">
                    <div className="rodic-leadership-info">
                      <span className="leadership-name">
                        {lData?.attributes?.name}{" "}
                      </span>
                      <span className="leadership-designation">
                        {lData?.attributes?.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
