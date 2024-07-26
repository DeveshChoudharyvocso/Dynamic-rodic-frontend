// "use client";

// import { useState } from "react";
// import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

// function TeamContainer({ data, data2 }) {
//   const [activeBox, setActiveBox] = useState(null);

//   const handleBoxClick = (index, lData) => {
//     if (activeBox?.index === index) {
//       // If the clicked box is already active, close the modal
//       setActiveBox(null);
//     } else {
//       // Otherwise, open the modal with the clicked box's data
//       setActiveBox({ index, data: lData });
//     }
//   };

//   const handleCloseModal = () => {
//     setActiveBox(null);
//   };

//   return (
//     <>
//       <section className="testimonial-main-block leadership-main-leaders-block padding-100">
//         <div className="container">
//           <h2>{data?.data?.attributes?.Leadership?.heading}</h2>
//           <div className="row">
//             {data2?.data?.attributes?.Leadership[0]?.teams?.map(
//               (lData, index) => (
//                 <div
//                   className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 testimonail-mobile-mb wow fadeInUp"
//                   data-wow-duration="1s"
//                   data-wow-delay="0.1s"
//                   key={lData?.id}
//                 >
//                   <div
//                     className="testimonial-author-image-box"
//                     style={{
//                       backgroundImage: `url(${lData?.teams?.data?.attributes?.image?.data?.attributes?.url})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center bottom",
//                       transition: "1s",
//                     }}
//                   >
//                     <div
//                       onClick={() => handleBoxClick(index, lData)}
//                       className={`author-info-mainblock ${
//                         activeBox?.index === index ? "author-info-active" : ""
//                       }`}
//                     >
//                       <div>
//                         {lData?.teams?.data?.attributes?.name}{" "}
//                         <span>
//                           {lData?.teams?.data?.attributes?.designation}
//                         </span>
//                       </div>
//                       <div className="orange-down-arrow-team"></div>
//                     </div>
//                   </div>
//                   {activeBox && (
//                     <div className="row">
//                       <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 testimonialbox-toggle show-box">
//                         <div className="about-leader-info-box about-leader-info-box-mobile">
//                           <span
//                             className="close-icon"
//                             onClick={handleCloseModal}
//                           ></span>
//                           <RenderHtmlRichText
//                             content={lData?.teams?.data?.attributes?.summary}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )
//             )}
//           </div>

//           {activeBox && (
//             <div className="row">
//               <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 testimonialbox-toggle show-box">
//                 <div className="about-leader-info-box about-leader-info-box-desktop">
//                   <span
//                     className="close-icon"
//                     onClick={handleCloseModal}
//                   ></span>
//                   <RenderHtmlRichText
//                     content={activeBox.data?.teams?.data?.attributes?.summary}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default TeamContainer;

"use client";

import { useState } from "react";
import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

function TeamContainer({ data, data2 }) {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index, lData) => {
    if (activeBox?.index === index) {
      // If the clicked box is already active, close the modal
      setActiveBox(null);
    } else {
      // Otherwise, open the modal with the clicked box's data
      setActiveBox({ index, data: lData });
    }
  };

  const handleCloseModal = () => {
    setActiveBox(null);
  };

  return (
    <>
      <section className="testimonial-main-block leadership-main-leaders-block padding-100">
        <div className="container">
          <h2>{data?.data?.attributes?.Leadership?.heading}</h2>
          <div className="row">
            {data2?.data?.attributes?.Leadership[0]?.teams?.map(
              (lData, index) => (
                <div
                  className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 testimonail-mobile-mb wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                  key={lData?.id}
                >
                  <div
                    onClick={() => handleBoxClick(index, lData)}
                    className="testimonial-author-image-box"
                    style={{
                      backgroundImage: `url(${lData?.teams?.data?.attributes?.image?.data?.attributes?.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center bottom",
                      transition: "1s",
                    }}
                  >
                    <div
                      className={`author-info-mainblock ${activeBox?.index === index ? "author-info-active" : ""
                        }`}
                    >
                      <div className="rodic-leadership-info">
                        <span className="leadership-name">{lData?.teams?.data?.attributes?.name}{" "}</span>
                        <span className="leadership-designation">
                          {lData?.teams?.data?.attributes?.designation}
                        </span>
                      </div>
                      <div className="orange-down-arrow-team"></div>
                    </div>
                  </div>
                  {activeBox?.index === index && (
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 testimonialbox-toggle show-box">
                        <div className="about-leader-info-box about-leader-info-box-mobile">
                          <span
                            className="close-icon"
                            onClick={handleCloseModal}
                          ></span>
                          <RenderHtmlRichText
                            content={lData?.teams?.data?.attributes?.summary}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {activeBox && (
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 testimonialbox-toggle show-box">
                <div className="about-leader-info-box about-leader-info-box-desktop">
                  <span
                    className="close-icon"
                    onClick={handleCloseModal}
                  ></span>
                  <RenderHtmlRichText
                    content={activeBox.data?.teams?.data?.attributes?.summary}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default TeamContainer;
