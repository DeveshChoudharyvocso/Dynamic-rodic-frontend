"use client";
import orangedownIcon from "@/app/style/images/down-arrow-orange-icon.png";
import Image from "next/image";
import { useState } from "react";
import RenderHtmlRichText from "./RenderHtmlRichText";
function HeadingSection({ heading, summary, img }) {
  const [collapse, setCollapse] = useState(false);
  const handleCollapseToggle = (index) => {
    setCollapse((prevCollapse) => {
      const newCollapse = [...prevCollapse];
      newCollapse[index] = !newCollapse[index];
      return newCollapse;
    });
  };

  return (
    <>
      <section className="discover-rodic-main project-management-main-block padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="innerpage-left-image-block">
                <figure>
                  <Image
                    className="img-fluid"
                    src={img}
                    alt="img"
                    height={1000}
                    width={1000}
                    quality={100}
                  />
                </figure>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 padding-left-50 ">
              <div
                className={`blog-content-showhide-main innerpages-readmore-block ${collapse || summary.length < 375 ? "article-expand-btn" : ""
                  }`}
              >
                <div className="">
                  <div className="">
                    <h2>{heading || ""}</h2>
                    <RenderHtmlRichText content={summary || ""} />
                  </div>
                </div>

                {summary.length > 375 ? (
                  <button
                    className={`readless-more-btn`}
                    onClick={() => setCollapse(!collapse)}
                  >
                    explore{" "}
                    <Image
                      src={orangedownIcon?.src}
                      height={36}
                      width={36}
                      alt="blog-image"
                    />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadingSection;
