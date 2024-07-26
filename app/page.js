import { getData } from "@/lib/data";
import { getHomePageSeo } from "@/lib/seo-api";
import Sections from "../components/Sections";
// import Videoosec from "@/components/Videosection";
// Seo
export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const homePageSeo = await getHomePageSeo();

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  return {
    title: homePageSeo?.data?.attributes?.seo.metaTitle,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
    keywords: homePageSeo?.data?.attributes?.seo?.keywords,
    description: homePageSeo?.data?.attributes?.seo?.metaDescription,
  };
}
export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Sections data={data} />

      {/* <SwiperCarosuel data={data} /> */}

      {/* Hero Section */}
      {/* <HeroSection data={data} /> */}

      {/* services Component */}
      {/* <ServicesComponent data={data} /> */}

      {/* videosection */}

      {/* <VideoSlider data={data} /> */}

      {/* Swiper with progress Bar */}
      {/* <SwiperSecond data={data} /> */}

      {/* button Slider */}
      {/* <ButtonSlider data={data} /> */}

      {/* LeaderShip section */}
      {/* <Leadership data={data} /> */}

      {/* Insights */}
      {/* <Insights data={data} /> */}

      {/* Career section */}
      {/* <Career data={data} /> */}

      {/* testing for dialog component */}
    </main>
  );
}
