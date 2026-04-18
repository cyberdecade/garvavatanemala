import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import RoomDetailsInner from "@/components/RoomDetailsInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title:
      "Room Details | Garva Vatanemala Agro Tourism",
    description:
      "Explore the cozy farm stay options at Garva Vatanemala Agro Tourism. Authentic rural comfort with modern amenities.",
    openGraph: {
      title: "Room Details | Garva Vatanemala",
      description:
        "Explore the cozy farm stay options at Garva Vatanemala Agro Tourism. Authentic rural comfort with modern amenities.",
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
      <Breadcrumb title='Room Details' sub_title='Service' />

      {/* RoomDetailsInner */}
      <RoomDetailsInner />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
