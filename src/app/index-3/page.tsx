import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import BannerThree from "@/components/BannerThree";
import AboutThree from "@/components/AboutThree";
import PropertiesInnerTwo from "@/components/PropertiesInnerTwo";
import MarqueeThree from "@/components/MarqueeThree";
import AdvanceAreaTwo from "@/components/AdvanceAreaTwo";
import ServiceThree from "@/components/ServiceThree";
import MarqueeFour from "@/components/MarqueeFour";
import BrandOne from "@/components/BrandOne";
import ContactTwo from "@/components/ContactTwo";
import BlogThree from "@/components/BlogThree";
import ReservationOne from "@/components/ReservationOne";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home-3 | Garva Vatanemala Agro Tourism",
    description:
      "Garva Vatanemala is a professional Next JS Template for Agro Tourism Multi-Purpose services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Home-3 | Garva Vatanemala",
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

      {/* BannerThree */}
      <BannerThree />

      {/* AboutThree */}
      <AboutThree />

      {/* PropertiesInnerTwo */}
      <PropertiesInnerTwo />

      {/* MarqueeThree */}
      <MarqueeThree />

      {/* AdvanceAreaTwo */}
      <AdvanceAreaTwo />

      {/* ServiceThree */}
      <ServiceThree />

      {/* MarqueeFour */}
      <MarqueeFour />

      {/* BrandOne */}
      <BrandOne />

      {/* ContactTwo */}
      <ContactTwo />

      {/* BlogThree */}
      <BlogThree />

      {/* ReservationOne */}
      <ReservationOne />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
