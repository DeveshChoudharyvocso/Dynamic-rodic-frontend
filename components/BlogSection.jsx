// "use client";
// import orangedownIcon from "@/app/style/images/down-arrow-orange-icon.png";
// import s4 from "@/app/style/images/highway-road.png";
// import Image from "next/image";
// import { useState } from "react";
// import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

// function BlogSection({ data }) {
//   const [collapse, setCollapse] = useState(false);
//   return (
//     <>
//       <div>
//         {data?.data?.attributes?.workPerformed?.map((dataa, index) => (
//           <section
//             className="blog-articles-main-block padding-100"
//             key={dataa?.id}
//           >
//             <div className="container">
//               <h2>{dataa.heading}</h2>
//               <h3>{dataa?.subHeading}</h3>
//               <div
//                 className={`blog-content-showhide-main  ${
//                   collapse ? "article-expand-btn" : ""
//                 }`}
//               >
//                 <div className="row">
//                   <div
//                     className={`col-12 ${
//                       dataa?.rightColumn === null
//                         ? "col-sm-12 col-md-12 col-lg-12 col-xl-12"
//                         : "col-sm-6 col-md-6 col-lg-6 col-xl-6"
//                     }`}
//                   >
//                     <RenderHtmlRichText content={dataa?.leftColumn} />
//                   </div>
//                   {dataa?.rightColumn ? (
//                     <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
//                       <RenderHtmlRichText content={dataa?.rightColumn} />
//                     </div>
//                   ) : null}
//                 </div>
//                 <button
//                   className={`readless-more-btn`}
//                   onClick={() => setCollapse(!collapse)}
//                 >
//                   explore{" "}
//                   <Image
//                     src={orangedownIcon?.src}
//                     height={36}
//                     width={36}
//                     alt="blog-image"
//                   />
//                 </button>
//               </div>

//               <figure>
//                 <Image
//                   src={s4?.src}
//                   height={700}
//                   width={700}
//                   alt="blog-image"
//                 />
//               </figure>
//             </div>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// }

// export default BlogSection;

"use client";
import orangedownIcon from "@/app/style/images/down-arrow-orange-icon.png";
import Image from "next/image";
import { useState } from "react";
import RenderHtmlRichText from "./ReusableComp/RenderHtmlRichText";

function BlogSection({ data }) {
  const [collapse, setCollapse] = useState(
    data?.data?.attributes?.workPerformed?.map(() => false)
  );

  const handleCollapseToggle = (index) => {
    setCollapse((prevCollapse) => {
      const newCollapse = [...prevCollapse];
      newCollapse[index] = !newCollapse[index];
      return newCollapse;
    });
  };

  return (
    <>
      <div>
        {data?.data?.attributes?.workPerformed?.map((dataa, index) => (
          <section
            className="blog-articles-main-block padding-100"
            key={dataa?.id}
          >
            <div className="container">
              <h2>{dataa.heading}</h2>
              <h3>{dataa?.subHeading}</h3>
              <div
                className={`blog-content-showhide-main ${
                  collapse[index] ? "article-expand-btn" : ""
                }`}
              >
                <div className="row">
                  <div
                    className={`col-12 ${
                      dataa?.rightColumn === null
                        ? "col-sm-12 col-md-12 col-lg-12 col-xl-12"
                        : "col-sm-6 col-md-6 col-lg-6 col-xl-6"
                    }`}
                  >
                    <RenderHtmlRichText content={dataa?.leftColumn} />
                  </div>
                  {dataa?.rightColumn ? (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <RenderHtmlRichText content={dataa?.rightColumn} />
                    </div>
                  ) : null}
                </div>
                <button
                  className={`readless-more-btn`}
                  onClick={() => handleCollapseToggle(index)}
                >
                  explore{" "}
                  <Image
                    src={orangedownIcon?.src}
                    height={36}
                    width={36}
                    alt="blog-image"
                  />
                </button>
              </div>

              <figure>
                <Image
                  src={dataa?.image?.data?.attributes?.url}
                  height={1000}
                  width={1000}
                  quality={100}
                  unoptimized
                  alt="blog-image"
                  className="img-fluid"
                />
              </figure>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default BlogSection;
