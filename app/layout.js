import { Inter } from "next/font/google";
import "./globals.css";

import { displayMainNavigation } from "@/lib/data";
import "../app/style/css/BootstrapNav.css";
import "../app/style/css/all.css";
import "../app/style/css/animated.css";
import "../app/style/css/bootstrap.css";
import "../app/style/css/common.css";
import "../app/style/css/fontawesome.min.css";
import "../app/style/css/home.css";
import "../app/style/css/responsive.css";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import MegaMenuBar from "@/components/MegaMenuBar";
// import FlowBiteMegaMenu from "@/components/FlowBiteMegaMenu";
import BootstrapNav from "@/components/BootstrapNav";
// import WowInitializer from "@/components/ReusableComp/WowInitializer";
import { getSiteSettings } from "@/lib/data2";
import { GoogleTagManager } from "@next/third-parties/google";
// import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTopButton from "@/components/ReusableComp/ScrollToTopButton";
import dynamic from "next/dynamic";
const WowInitializer = dynamic(
  () => import("@/components/ReusableComp/WowInitializer"),
  {
    ssr: false,
  }
);
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const getSiteSettingsData = await getSiteSettings();
  return {
    title: "Rodic Pvt. Ltd",
    description: "A Corporate project",
    verification: {
      google: getSiteSettingsData?.data?.attributes?.googleSiteVerificationCode,
    },
  };
}
export default async function RootLayout({ children }) {
  const getSiteSettingsData = await getSiteSettings();

  const navigation = await displayMainNavigation();

  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager
          gtmId={getSiteSettingsData?.data?.attributes?.googleTagMangerId}
        />
        <BootstrapNav navigation={navigation} />
        <WowInitializer />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
