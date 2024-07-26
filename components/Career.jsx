import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";

function Career({ data }) {
  return (
    <div>
      <section className="discover-carrer-block padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-5 col-sm-5">
              <div className="carrier-heading">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  {data?.data?.attributes?.career?.heading}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="carrier-bg-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-5 col-sm-12">
                <div className="carrier-heading">
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    {data?.data?.attributes?.career?.subHeading}
                  </p>

                  <div
                    className="searchjob-buttons-block wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.1s"
                  >
                    <Link
                      className="readmore-btn border-btn"
                      href={data?.data?.attributes?.career?.primary?.url}
                    >
                      {data?.data?.attributes?.career?.primary?.label}
                    </Link>
                    <Link
                      className="readmore-btn border-btn mr-0"
                      href={data?.data?.attributes?.career?.secondary?.url}
                    >
                      {data?.data?.attributes?.career?.secondary?.label}
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-md-12 col-lg-12 col-xl-7 col-sm-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="discovercarrier-rightbg">
                  <Image
                    loading="lazy"
                    className="img-fluid"
                    src={`${data?.data?.attributes?.career?.image?.data?.attributes?.url}`}
                    alt="discover-carrier"
                    height={1000}
                    width={1000}
                    quality={100}
                  />
                </div>
              </div>
            </div>

            <Gallery data={data?.data?.attributes?.career?.Gallery} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;
