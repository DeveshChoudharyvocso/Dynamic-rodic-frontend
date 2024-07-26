"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Career from "./Career";
import ColorSection from "./ColorSection";
// import HeroSection from "./HeroSection";
import { AnimatedTabs } from "./ReusableComp/AnimatedTabs";
import Stats from "./Stats";
import SwiperCarosuel from "./SwiperCarosuel";
import VideoSlider from "./VideoSlider";
const HeroSection = dynamic(() => import("./HeroSection"), {
  ssr: false,
});
const Sections = ({ data }) => {
  const [activeSection, setActiveSection] = useState("");

  // const buttonSliderContent =
  //   data?.data?.attributes?.sectorsWeSpecializedIn?.sectors?.data.map(
  //     (items) => ({
  //       id: items?.id,
  //       heading: items?.attributes?.heading,
  //       imageUrl:
  //         items.attributes?.sectors?.image?.data?.attributes?.formats?.medium
  //           ?.url,
  //       summary: items?.attributes?.summary,
  //       slug: items?.attributes?.slug,
  //     })
  //   );

  const buttonSliderContent =
    data?.data?.attributes?.sectorsWeSpecializedIn?.sectors?.data.map(
      (items) => ({
        id: items?.id,
        heading: items?.attributes?.heading,
        imageUrl:
          items.attributes?.homePageImage?.data?.attributes?.formats?.medium
            ?.url,
        summary: items?.attributes?.summary,
        slug: items?.attributes?.slug,
      })
    );

  const sections = [
    {
      id: "section1",
      color: "white",
      content: <SwiperCarosuel data={data} />,
    },
    {
      id: "section2",
      color: "white",
      content: <HeroSection data={data} />,
    },
    {
      id: "section3",
      color: "#023047",
      content: <Stats data={data} />,
    },
    {
      id: "section4",
      color: "#f4f3ee",
      // content: (
      //   <ServicesComponent
      //     data={data}
      //     dumm={dumm?.data[2]?.attributes?.Block}/>

      // ),
    },

    {
      id: "section5",
      color: "white",
      // content: (
      //   <SwiperSecond
      //     data={data}
      //     flag={false}
      //     dumm={dumm?.data[2]?.attributes?.Block}
      //   />
      // ),
    },
    {
      id: "section6",
      color: "white",
      content: (
        // <ButtonSlider
        //   flag={false}
        //   heading={data?.data?.attributes?.sectorsWeSpecializedIn?.heading}
        //   maindata={buttonSliderContent}
        // />
        <AnimatedTabs
          flag={false}
          heading={data?.data?.attributes?.sectorsWeSpecializedIn?.heading}
          maindata={buttonSliderContent}
        />
      ),
    },
    {
      id: "section7",
      color: "#f4f3ee",
      // content: <Leadership data={data} />,
      otherStyle: {
        borderTopRightRadius: "5rem",
      },
    },
    {
      id: "section8",
      color: "#fff",
      content: <VideoSlider data={data} />,
      otherStyle: {
        borderTopRightRadius: "5rem",
      },
    },
    // {
    //   id: "section9",
    //   color: "white",
    //   content: <Insights data={data} />,
    // },
    {
      id: "section10",
      color: "white",
      content: <Career data={data} />,
    },
  ];

  return (
    <>
      {sections.map((section) => (
        <ColorSection
          key={section?.id}
          id={section?.id}
          color={section?.color}
          setActiveSection={setActiveSection}
          otherStyle={section?.otherStyle}
        >
          {section?.content}
        </ColorSection>
      ))}
    </>
  );
};

export default Sections;
