import Link from "next/link";
import InsightSlider from "./InsightSlider";

function Insights({ data }) {
  return (
    <section className="insights-main-block padding-100">
      <div className="container">
        <div className="services-heading-info">
          <h2
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            Insights
          </h2>
          <Link
            className="readmore-btn border-btn explorecasestudy-btn wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            href={data?.data?.attributes?.insights?.button?.url}
          >
            {data?.data?.attributes?.insights?.button?.label}
          </Link>
        </div>

        <InsightSlider data={data} />
      </div>
    </section>
  );
}

export default Insights;
