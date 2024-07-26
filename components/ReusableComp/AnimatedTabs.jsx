"use client";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import RenderHtmlRichText from "./RenderHtmlRichText";

function sliceAfterSecondFullStop(content) {
  const parts = content.split(".");
  if (parts.length > 2) {
    return parts.slice(0, 2).join(".") + "."; // Combine the first three parts and add the third full stop back
  }
  return content; // If there are less than 2 full stops, return the original content
}

export function AnimatedTabs({ flag, heading, maindata }) {
  if (!maindata || maindata.length === 0) {
    return null; // Render nothing if maindata is empty or undefined
  }

  const dynamicData = maindata?.map((data) => ({
    title: data?.heading,
    value: data?.heading,
    content: (
      <div className="maintab-new w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        {/* <p>{data?.summary}</p> */}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 home-tab-left-block">
            <RenderHtmlRichText
              content={sliceAfterSecondFullStop(data?.summary)}
            />
            {data?.slug ? (
              <Link
                className="readmore-btn border-btn wow fadeInUp"
                href={`/sectors/${data?.slug}`}
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                Explore
              </Link>
            ) : null}
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="home-tab-right-imageblock">
              <DummyContent img={data?.imageUrl} />
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  const tabss = dynamicData;

  return (
    <section
      className={`weSpecialize-main-block padding-100 ${flag ? "keyservice-offering-main-block" : ""
        }`}
    >
      <div className="container">
        <div className="services-heading-info">
          <h2
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
          >
            {heading}
          </h2>
        </div>
        <div className="tab-height-block  [perspective:1000px] relative b flex flex-col  mx-auto w-full">
          <Tabs tabs={tabss} />
        </div>
      </div>
    </section>
  );
}

const DummyContent = ({ img }) => {
  return (
    <Image
      src={img || ""}
      alt="dummy image"
      width={1000}
      height={1000}
      quality={100}
      className="img-fluid object-cover"
    />
  );
};
