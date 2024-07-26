import Link from "next/link";
import ServicesSlider from "./ServicesSlider";

function ServicesComponent({ data, dumm }) {
  console.log("dummm>>>>>>", dumm);

  const filteredData = dumm.filter(
    (item) => item.__component === "section.leaderships"
  );
  console.log(filteredData[0]);

  return (
    <section className="services-main-block padding-100">
      <div className="container">
        <div className="">
          <div className="services-heading-info">
            <h2
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              {filteredData[0]?.heading}
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              {filteredData[0]?.subHeading}
            </p>

            <Link
              className="readmore-btn border-btn explorecasestudy-btn wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              href={data?.data?.attributes?.services?.button?.url || ""}
            >
              {data?.data?.attributes?.services?.button?.label}
            </Link>
          </div>

          <ServicesSlider data={data} />
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;
