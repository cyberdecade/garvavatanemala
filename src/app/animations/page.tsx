import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import Checkout from "@/components/Checkout";
import FeatureTwo from "@/components/FeatureTwo";
import AdvanceAreaThree from "@/components/AdvanceAreaThree";
import FeatureOne from "@/components/FeatureOne";
import MarqueeFour from "@/components/MarqueeFour";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title:
      "Amenities | Garva Vatanemala Agro Tourism",
    description:
      "Garva Vatanemala is a professional Next JS Template for Agro Tourism Multi-Purpose services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Amenities | Garva Vatanemala",
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

      {/* Breadcrumb */}
      <Breadcrumb title='Our amenities' sub_title='Experience the Story' />

      {/* Checkout */}
      <section className=' bg_2'>
        <Checkout />
      </section>

      {/* FeatureTwo */}
      <section className='feature-two-area_bg pt-120'>
        <FeatureTwo />
      </section>

      {/* AdvanceAreaTwo */}
      <AdvanceAreaThree />

      {/* FeatureOne */}
      <FeatureOne />

      {/* MarqueeFour */}
      <MarqueeFour />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
