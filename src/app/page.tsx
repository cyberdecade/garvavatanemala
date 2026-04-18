import type { Metadata } from "next";
import Preloader from "@/helper/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import HeaderOne from "@/components/HeaderOne";
import BannerOne from "@/components/BannerOne";
import Checkout from "@/components/Checkout";
import AdvanceArea from "@/components/AdvanceArea";
import OfferOne from "@/components/OfferOne";
import FeatureOne from "@/components/FeatureOne";
import PackageOne from "@/components/PackageOne";
import ClientOne from "@/components/ClientOne";
import AboutOne from "@/components/AboutOne";
import AboutThree from "@/components/AboutThree";
import BrandPortal from "@/components/BrandPortal";
import CtaOne from "@/components/CtaOne";
import PropertiesInner from "@/components/PropertiesInner";
import TestimonialOne from "@/components/TestimonialOne";
import MarqueeOne from "@/components/MarqueeOne";
import BlogOne from "@/components/BlogOne";
import InstagramAreaOne from "@/components/InstagramAreaOne";
import Experiences from "@/components/Experiences";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | Garva Vatanemala - Agro Tourism & Farm Stay",
    description:
      "Garva Vatanemala is a premium Agro Tourism and Farm Stay destination in Maharashtra. Experience authentic rural life, organic food, and tranquility.",
    openGraph: {
      title: "Home | Garva Vatanemala",
      description:
        "Garva Vatanemala is a premium Agro Tourism and Farm Stay destination in Maharashtra. Experience authentic rural life, organic food, and tranquility.",
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

export default function Home() {
  return (
    <AOSWrap>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* Checkout */}
      <Checkout />

      {/* AboutThree */}
      <AboutThree />

      {/* BrandPortal */}
      <BrandPortal />

      {/* AdvanceArea */}
      <AdvanceArea />

      {/* OfferOne */}
      <OfferOne />

      {/* FeatureOne */}
      <FeatureOne />

      {/* PackageOne */}
      <PackageOne />

      {/* ClientOne */}
      <ClientOne />

      {/* AboutOne */}
      <AboutOne />

      {/* Experiences */}
      <Experiences />

      {/* CtaOne */}
      <CtaOne />

      {/* PropertiesInner */}
      <PropertiesInner />

      {/* TestimonialOne */}
      <TestimonialOne />

      {/* MarqueeOne */}
      <MarqueeOne />

      {/* BlogOne */}
      <BlogOne />

      {/* InstagramAreaOne */}
      <InstagramAreaOne />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
}
