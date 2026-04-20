import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import AboutTwo from "@/components/AboutTwo";
import FeatureOne from "@/components/FeatureOne";
import AboutOne from "@/components/AboutOne";
import MarqueeOne from "@/components/MarqueeOne";
import ClientOne from "@/components/ClientOne";
import NewsletterOne from "@/components/NewsletterOne";
import PricingTwo from "@/components/PricingTwo";
import ContactTwo from "@/components/ContactTwo";
import ClientTwo from "@/components/ClientTwo";
import FooterOne from "@/components/FooterOne";
import Checkout from "@/components/Checkout";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About | Garva Vatanemala Agro Tourism",
    description:
      "Garva Vatanemala is a professional Next JS Template for Agro Tourism Multi-Purpose services. Clean design, responsive layout, and modern UI components included.",
    openGraph: {
      title: "About | Garva Vatanemala",
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

      {/* About Title Section */}
      <section className='about-title-section pt-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8'>
              <div className='section-wrapper text-center tw-mb-14 tw_fade_anim'>
                <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                  Experience the Story
                </h6>
                <h2 className='section-title fw-normal'>
                  About Us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      {/* <section className='checkout-area_bg'>
        <Checkout />
      </section> */}

      {/* AboutTwo */}
      <AboutTwo />

      {/* FeatureOne */}
      <FeatureOne />

      {/* AboutOne */}
      <div className='pt-120'>
        <AboutOne />
      </div>

      {/* MarqueeOne */}
      <MarqueeOne />

      {/* ClientOne */}
      <ClientOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* PricingTwo */}
      <div className='pt-120 pricing-two-area'>
        <PricingTwo />
      </div>

      {/* ContactTwo */}
      <ContactTwo />

      {/* ClientTwo
      <div className='pt-60 client_two'>
        <ClientTwo />
      </div> */}

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
