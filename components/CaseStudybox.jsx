
function CaseStudybox() {
  return (
    <>
      <div
        className="casestudybox-inner"
        style={{
          backgroundImage: `url(${value?.attributes?.caseStudies.image?.data?.attributes?.formats?.medium?.url} )`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <span className="casestudy-catg-btn">
          {value?.attributes?.caseStudies?.heading}
        </span>
        <div className="service-box-hover">
          <Image
            loading="lazy"
            className="img-fluid"
            src={casestudyicon?.src}
            alt="arrow-circle"
            width={72}
            height={59}
          />

          <div className="casestudies-info-text">
            <div className="servicebox-default-heading">
              {value?.attributes?.caseStudies?.heading}
              <Image
                loading="lazy"
                className="img-fluid"
                src={ArrowCircle?.src}
                alt="arrow-circle"
                width={43}
                height={43}
              />
            </div>
            <div className="casestudies-hover-text">
              <RenderHtmlRichText
                content={value?.attributes?.caseStudies?.subHeading}
              />
              <a href="#" className="readmore-btn border-btn">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudybox;
