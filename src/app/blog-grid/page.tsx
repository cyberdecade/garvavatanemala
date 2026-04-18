import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import ReservationOne from "@/components/ReservationOne";
import BlogGridInner from "@/components/BlogGridInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title:
      "Blog Grid | Garva Vatanemala Agro Tourism",
    description:
      "Garva Vatanemala is a professional Next JS Template for Agro Tourism Multi-Purpose services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "Blog Grid | Garva Vatanemala",
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
      <Breadcrumb title='Blog Grid' sub_title='Experience the Story' />

      {/* BlogGridInner */}
      <BlogGridInner />

      {/* MarqueeFour */}
      <ReservationOne />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
