"use client";
import Link from "next/link";

export function formatDateTime(dateTimeString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateTimeString);

  // Extract date components
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const day = String(date.getDate()).padStart(2, "0");

  // Extract time components
  let hours = date.getHours(); // 24-hour clock time
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Convert to 12-hour clock and determine AM/PM
  const period = hours < 12 ? "AM" : "PM"; // Determine AM/PM
  hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

  // Format the date and time in 12-hour format with AM/PM
  const formattedDateTime = `${monthName} ${day}, ${year} ${hours}:${minutes}:${seconds} ${period}`;

  return formattedDateTime;
}

function BlogInsights({ data }) {
  const firstTwoObj = data?.data?.slice(0, 2);
  const remainingObj = data?.data?.slice(2);

  return (
    <>
      <div>
        <section className="blog-listing-main blog-listing-main-page padding-100 ">
          <div className="container">
            <div className="row">
              {firstTwoObj?.map((service, index) => (
                <div
                  key={service?.id}
                  className={`col-12 col-sm-6  ${
                    index === 0
                      ? "col-md-6 col-lg-6 col-xl-8  blog-latest-big-post"
                      : ""
                  }${index === 1 ? " col-md-6 col-lg-6 col-xl-4" : ""}`}
                >
                  <div
                    className={`service-box-main insight-box-main blog-listing-box mb-0-desktop`}
                    key={service?.id}
                    style={{
                      backgroundImage: `url(${service?.attributes?.coverImage?.data?.attributes?.formats?.medium?.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center bottom",
                      width: "100%",
                      height: "100%",
                      transition: "1s",
                    }}
                  >
                    <div
                      className={`insight-card-box insight-active-box
                        `}
                    >
                      <a
                        className="readmore-btn border-btn blog-catg-btn"
                        href={`/blogs/${service?.attributes?.slug}`}
                      >
                        {
                          service?.attributes?.blog_category?.data?.attributes
                            ?.name
                        }
                      </a>
                      <span className="insight-datetime">
                        {formatDateTime(service?.attributes?.updatedAt)}
                      </span>
                      <p>{service?.attributes?.heading}</p>
                      <Link
                        className="readmore-btn border-btn"
                        href={`/blogs/${service?.attributes?.slug}`}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="blog-listing-main padding-100">
          <div className="container">
            <div className="row">
              {remainingObj?.map((service, index) => (
                <div
                  key={service?.id}
                  className={`col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3`}
                >
                  <div
                    className={`service-box-main insight-box-main blog-listing-box`}
                    key={service?.id}
                    style={{
                      backgroundImage: `url(${service?.attributes?.coverImage?.data?.attributes?.formats?.medium?.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center bottom",
                      width: "100%",
                      height: "100%",
                      transition: "1s",
                    }}
                  >
                    <div className={`insight-card-box `}>
                      <a
                        className="readmore-btn border-btn blog-catg-btn"
                        href="#"
                      >
                        {
                          service?.attributes?.blog_category?.data?.attributes
                            ?.name
                        }
                      </a>
                      <span className="insight-datetime">
                        {formatDateTime(service?.attributes?.updatedAt)}
                      </span>
                      <p>{service?.attributes?.heading}</p>
                      <Link
                        className="readmore-btn border-btn"
                        href={`/blogs/${service?.attributes?.slug}`}
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogInsights;
