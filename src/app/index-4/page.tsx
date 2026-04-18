import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import BannerFour from "@/components/BannerFour";
import Checkout from "@/components/Checkout";
import AboutFour from "@/components/AboutFour";
import ServiceOne from "@/components/ServiceOne";
import RelaxingTwo from "@/components/RelaxingTwo";
import MarqueeFive from "@/components/MarqueeFive";
import DiscoverTwo from "@/components/DiscoverTwo";
import ExperienceTwo from "@/components/ExperienceTwo";
import ChooseOne from "@/components/ChooseOne";
import PackageTwo from "@/components/PackageTwo";
import ContactThree from "@/components/ContactThree";
import BlogFour from "@/components/BlogFour";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home-4 | Garva Vatanemala Agro Tourism",
    description:
      "Garva Vatanemala is a professional Next JS Template for Agro Tourism Multi-Purpose services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Home-4 | Garva Vatanemala",
      description:
        "Garva Vatanemala is a professional Next JS Template for Agro Tourism Multi-Purpose services. Clean design, responsive layout, and modern UI components included.",
      url: "https://garvavatanemala.com",
      type: "website",
      images: [
        {
          url: "https://garvavatanemala.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "garvavatanemala",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerFour */}
      <BannerFour />

      {/* CheckoutOne */}
      <Checkout />

      {/* AboutFour */}
      <AboutFour />

      {/* ServiceOne */}
      <ServiceOne />

      {/* RelaxingTwo */}
      <RelaxingTwo />

      {/* MarqueeFive */}
      <MarqueeFive />

      {/* DiscoverTwo */}
      <DiscoverTwo />

      {/* ExperienceTwo */}
      <ExperienceTwo />

      {/* ChooseOne */}
      <ChooseOne />

      {/* PackageTwo */}
      <PackageTwo />

      {/* ContactThree */}
      <ContactThree />

      {/* BlogFour */}
      <BlogFour />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
