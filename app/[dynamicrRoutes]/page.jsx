import { getAPIDataDynamic, getContactPage } from "@/lib/data";

async function contact({ params }) {
  const { dynamicrRoutes } = params;
  const data = await getContactPage();
  const data2 = await getAPIDataDynamic(dynamicrRoutes);

  const renderBlockComponents = (blocks) => {
    return blocks.map((block) => {
      if (block.__component === "components.cover-image") {
        return (
          <div key={block.id}>
            <h2>{block.heading}</h2>
            <p>{block.subHeading}</p>
          </div>
        );
      } else if (block.__component === "home-page.hero-section") {
        return (
          <div key={block.id}>
            <h2>{block.heading}</h2>
            <p>{block.subHeading}</p>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  const renderData = () => {
    return data2.data.map((item) => (
      <div key={item.id}>
        <h2>{item.attributes.heading}</h2>
        {/* Render other attributes from item.attributes */}
        {renderBlockComponents(item.attributes.Block)}
      </div>
    ));
  };

  return (
    <>
      {/* <Banner data={data} />

     
      <section className="discover-rodic-main registered-office-main-section padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 registered-office-left-address">
              <h2
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                {data?.data?.attributes?.corporateOffice?.heading}
              </h2>
              <h3
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                {data?.data?.attributes?.corporateOffice?.subHeading}
              </h3>

              {data?.data?.attributes?.corporateOffice?.address?.map(
                (adata) => (
                  <div
                    className="registerd-address-box wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                    key={adata?.id}
                  >
                    <Link href={adata?.mapUrl || "#"} target="_blank">
                      <Image
                        src={Google?.src}
                        alt="location-icon"
                        height={24}
                        width={24}
                      />
                      <h5>{adata?.heading} </h5>
                    </Link>
                 
                    <RenderHtmlRichText content={adata?.address} />
                  </div>
                )
              )}
              <div
                className="phonenumber-block wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <p>Ph:- {data?.data?.attributes?.corporateOffice?.phone}</p>
                <p>Fax:- {data?.data?.attributes?.corporateOffice?.fax}</p>
              </div>
              <p
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                Email:{data?.data?.attributes?.corporateOffice?.email}
              </p>
            </div>

            <div
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="registerd-office-image-block">
                <figure>
                  <Image
                    alt=""
                    src={`${data?.data?.attributes?.image?.data?.attributes?.url}`}
                    className="h-56 w-full object-cover sm:h-full"
                    height={1000}
                    width={1000}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="regional-offices-main-block padding-100">
        <div className="container">
          <h2>Our Offices</h2>
          <div className="regional-office-wrap">
            {data?.data?.attributes?.address.map((adata) => (
              <div
                className="regional-address-box wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                href="#"
                key={adata?.id}
              >
                <Link href={adata?.mapUrl || "#"} target="_blank">
                  <Image
                    src={Google?.src}
                    alt="location-icon"
                    height={24}
                    width={24}
                  />
                  <h5 className="">{adata?.heading}</h5>
                </Link>

              
                <RenderHtmlRichText content={adata?.address} />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <div>{renderData()}</div>
    </>
  );
}

export default contact;
