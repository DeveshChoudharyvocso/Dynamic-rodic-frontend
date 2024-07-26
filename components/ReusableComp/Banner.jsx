function Banner({ data }) {
  return (
    <section
      className="inner-banner-block"
      style={{
        backgroundImage: `url(${data?.data?.attributes?.coverImage?.data?.attributes?.url})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container">
        <div
          className="inner-banner-info wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
        >
          {data?.data?.attributes?.button ? (
            <span className="readmore-btn border-btn">
              {data?.data?.attributes?.button?.label}
            </span>
          ) : null}
        </div>
        <h1>{data?.data?.attributes?.heading}</h1>
      </div>
    </section>
  );
}

export default Banner;
