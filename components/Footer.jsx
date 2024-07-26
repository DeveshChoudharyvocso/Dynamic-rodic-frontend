import { getData, getProjects, getSectors, getServices } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ClientSlider from "./ClientSlider";

async function Footer() {
  const data = await getData();
  const serviceData = await getServices();
  const sectorsData = await getSectors();
  const projectsData = await getProjects();

  const servicesMenu = [
    {
      id: 1,
      name: "Project Management",
      href: "/services/project-management",
    },
    {
      id: 2,
      name: "Advisory",
      href: "/services/advisory-services",
    },
    {
      id: 3,
      name: "Detailed Engineering & Design Services",
      href: "/services/detailed-engineering-and-design-services",
    },

    {
      id: 4,
      name: "Digital Transformation",
      href: "/services/digital-transformation",
    },
  ];

  const community = [
    {
      id: 1,
      name: "CSR",
      href: "/corporate-social-responsibility",
    },
    {
      id: 2,
      name: "green initiatives",
      href: "/green-initiatives",
    },
    // {
    //   id: 3,
    //   name: "Award and Recognition",
    //   href: "/awards-recognition",
    // },
    // {
    //   id: 4,
    //   name: "Our Offices",
    //   href: "/contact",
    // },
  ];
  return (
    <div>
      <ClientSlider data={data} />
      <div className="clearfix"></div>

      <footer>
        <div className="footer-top padding-100">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-sm-12 text-center">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  {data?.data?.attributes?.GetInTouch?.heading}
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  {data?.data?.attributes?.GetInTouch?.subHeading}
                </p>
                <Link
                  className="contact-btn wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                  href={data?.data?.attributes?.GetInTouch?.button?.url}
                >
                  {data?.data?.attributes?.GetInTouch?.button?.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row footer-bottom-links">
              <div
                className="col-12 col-sm-6 col-md-3 col-lg-3 footerlinks-column wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <h5>services</h5>
                <ul>
                  {/* {serviceData?.data?.map((ndata) => (
                    <li key={ndata?.id}>
                      <Link href={`/services/${ndata?.attributes?.slug}`}>
                        {ndata?.attributes?.heading}
                      </Link>
                    </li>
                  ))} */}
                  {servicesMenu?.map((ndata) => (
                    <li key={ndata?.id}>
                      <Link href={ndata?.href}>{ndata?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="col-12 col-sm-6 col-md-3 col-lg-3 footerlinks-column wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h5>sectors</h5>
                <ul>
                  {sectorsData?.data?.map((ndata) => (
                    <li key={ndata?.id}>
                      <Link href={`/sectors/${ndata?.attributes?.slug}`}>
                        {ndata?.attributes?.heading}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="col-12 col-sm-6 col-md-3 col-lg-3 footerlinks-column wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h5>Projects</h5>
                <ul>
                  {projectsData?.data?.map((ndata) => (
                    <li key={ndata?.id}>
                      <Link href={`/case-studies/${ndata?.attributes?.slug}`}>
                        {ndata?.attributes?.heading}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="col-12 col-sm-6 col-md-3 col-lg-3 footerlinks-column wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <h5>community</h5>
                <ul>
                  {community?.map((items) => (
                    <li key={items?.id}>
                      <Link href={items?.href}>{items?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="social-icons">
                {data?.data?.attributes?.Footer?.socialMediaProfile.map(
                  (idata) => (
                    <Link
                      href={idata?.url}
                      key={idata?.id}
                      className="wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay="0.1s"
                      target="_blank"
                    >
                      <Image
                        src={`${idata?.icon?.data?.attributes?.url}`}
                        alt="social-icons"
                        height={36}
                        width={36}
                      />
                    </Link>
                  )
                )}
              </div>

              <p>© Rodic Consultants Pvt Ltd, 2024. All rights reserved. </p>

              <div className="footer-links">
                <Link href="/privacy-policy">Privacy Policy</Link>
                {/* <Link href="#">Terms of Use</Link> */}
                {/* <Link href="/sitemap.xml">Site Map</Link> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
