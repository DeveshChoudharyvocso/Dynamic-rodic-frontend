// "use client";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Link from "next/link";

// export function formatDateTime(dateTimeString) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const date = new Date(dateTimeString);

//   // Extract date components
//   const year = date.getFullYear();
//   const monthIndex = date.getMonth();
//   const monthName = months[monthIndex];
//   const day = String(date.getDate()).padStart(2, "0");

//   // Extract time components
//   let hours = date.getHours(); // 24-hour clock time
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");

//   // Convert to 12-hour clock and determine AM/PM
//   const period = hours < 12 ? "AM" : "PM"; // Determine AM/PM
//   hours = hours % 12 || 12; // Convert 24-hour to 12-hour format

//   // Format the date and time in 12-hour format with AM/PM
//   const formattedDateTime = `${monthName} ${day}, ${year} ${hours}:${minutes}:${seconds} ${period}`;

//   return formattedDateTime;
// }

// function InsightSlider({ data }) {
//   return (
//     <Carousel className="">
//       <CarouselContent className="wow fadeInUp ingisht-card-wrap">
//         {data?.data?.attributes?.insights?.blogs?.data?.map((items, index) => (
//           <CarouselItem
//             key={items?.id}
//             className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 insights-card-box wow fadeInUp`}
//           >
//             <div
//               className={`service-box-main insight-box-main`}
//               key={items?.id}
//               style={{
//                 backgroundImage: `url(${items?.attributes?.coverImage?.data?.attributes?.formats?.small?.url})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center bottom",
//                 width: "100%",
//                 height: "100%",
//                 transition: "1s",
//               }}
//             >
//               <div
//                 className={`insight-card-box  ${index === 0 ? "insight-active-box" : ""
//                   }`}
//               >
//                 <a className="readmore-btn border-btn blog-catg-btn" href="#">
//                   {items?.attributes?.blog_category?.data?.attributes?.name}
//                 </a>
//                 <span className="insight-datetime">
//                   {formatDateTime(items?.attributes?.updatedAt)}
//                 </span>
//                 <p>{items?.attributes?.heading}</p>
//                 <Link
//                   className="readmore-btn border-btn"
//                   href={`/blogs/${items?.attributes?.slug}`}
//                 >
//                   Explore
//                 </Link>
//               </div>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="scrollbar-previous-btn border-0" />
//       <CarouselNext className="scrollbar-next-btn border-0" />
//     </Carousel>
//   );
// }

// export default InsightSlider;

"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useState } from "react";

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

function InsightSlider({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <Carousel className="">
      <CarouselContent className="wow fadeInUp ingisht-card-wrap">
        {data?.data?.attributes?.insights?.blogs?.data?.map((items, index) => (
          <CarouselItem
            key={items?.id}
            className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 insights-card-box wow fadeInUp`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`service-box-main insight-box-main`}
              key={items?.id}
              style={{
                backgroundImage: `url(${items?.attributes?.coverImage?.data?.attributes?.formats?.small?.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                width: "100%",
                height: "100%",
                transition: "1s",
              }}
            >
              <div
                className={`insight-card-box ${
                  hoveredIndex === index ? "insight-active-box" : ""
                }`}
              >
                <a className="readmore-btn border-btn blog-catg-btn" href="#">
                  {items?.attributes?.blog_category?.data?.attributes?.name}
                </a>
                <span className="insight-datetime">
                  {formatDateTime(items?.attributes?.updatedAt)}
                </span>
                <p>{items?.attributes?.heading}</p>
                <Link
                  className="readmore-btn border-btn"
                  href={`/blogs/${items?.attributes?.slug}`}
                >
                  Explore
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="scrollbar-previous-btn border-0" />
      <CarouselNext className="scrollbar-next-btn border-0" />
    </Carousel>
  );
}

export default InsightSlider;
