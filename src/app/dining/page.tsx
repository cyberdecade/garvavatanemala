import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import FooterOne from "@/components/FooterOne";
import MarqueeFour from "@/components/MarqueeFour";
import DiningInner from "@/components/DiningInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dining | Garva Vatanemala & Gamla Cafe",
    description:
      "Experience a culinary journey at Garva Vatanemala. From traditional Maharashtrian farm meals to quirky vegetarian delights at Gamla Garden Cafe.",
    openGraph: {
      title: "Dining | Garva Vatanemala",
      description:
        "Experience a culinary journey at Garva Vatanemala. From traditional Maharashtrian farm meals to quirky vegetarian delights at Gamla Garden Cafe.",
      url: "https://garvavatanemala.com/dining",
      type: "website",
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <Preloader />
      <HeaderOne />
      
      <DiningInner />

      <MarqueeFour />
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
