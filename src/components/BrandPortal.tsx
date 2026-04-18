"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BrandPortal: FC = () => {
  return (
    <section className='brand-portal-area py-120 bg-main-300'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <div className='section-wrapper text-center tw-mb-14 tw_fade_anim'>
              <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                The GVM Ecosystem
              </h6>
              <h2 className='section-title fw-normal tw-mb-7 tw-char-animation'>
                Explore Our Unique Worlds
              </h2>
            </div>
          </div>
        </div>
        <div className='row gy-4 justify-content-center'>
          {/* Card 1: Agro-Tourism */}
          <div className='col-xl-4 col-md-6'>
            <div className='brand-card position-relative z-1 overflow-hidden tw-rounded-2xl tw_fade_anim' data-delay=".3">
              <div className='brand-card-thumb transition-all duration-500'>
                <Image
                  width={450}
                  height={550}
                  src='/assets/images/thumbs/about-three-thumb2.webp'
                  alt='Agrotourism'
                  className='tw-w-full tw-h-[500px] tw-object-cover'
                />
              </div>
              <div className='brand-card-content position-absolute bottom-0 start-0 tw-w-full tw-p-8 tw-bg-gradient-to-t tw-from-black/90 tw-to-transparent text-white'>
                <div className='tw-flex tw-gap-2 tw-mb-3'>
                  <span className='tw-px-3 tw-py-0.5 tw-bg-main-600/20 tw-border tw-border-main-600/30 tw-backdrop-blur-md tw-text-[10px] tw-font-bold tw-tracking-wider tw-rounded-full'>SOIL TO SOUL</span>
                  <span className='tw-px-3 tw-py-0.5 tw-bg-main-600/20 tw-border tw-border-main-600/30 tw-backdrop-blur-md tw-text-[10px] tw-font-bold tw-tracking-wider tw-rounded-full'>ANCESTRAL</span>
                </div>
                <h4 className='tw-text-3xl fw-normal tw-mb-3 text-white'>Agrotourism</h4>
                <p className='tw-mb-6 text-white/80 tw-text-sm'>
                  Reconnect with your roots through traditional farm life, organic food workshops, and rural charm nestled in Mulshi.
                </p>
                <Link
                  href='https://wa.me/918888653343'
                  target="_blank"
                  className='tw-inline-flex tw-items-center tw-gap-2 tw-text-lg fw-medium text-main-600 hover-text-white transition-all'
                >
                  Stay with Nature
                  <span><i className='ph ph-whatsapp-logo' /></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: BirdHouses */}
          <div className='col-xl-4 col-md-6'>
            <div className='brand-card position-relative z-1 overflow-hidden tw-rounded-2xl tw_fade_anim active' data-delay=".5">
              <div className='brand-card-thumb transition-all duration-500'>
                <Image
                  width={450}
                  height={550}
                  src='/assets/images/thumbs/about-three-thumb1.webp'
                  alt='BirdHouses'
                  className='tw-w-full tw-h-[500px] tw-object-cover'
                />
              </div>
              <div className='brand-card-content position-absolute bottom-0 start-0 tw-w-full tw-p-8 tw-bg-gradient-to-t tw-from-black/90 tw-to-transparent text-white'>
                <div className='tw-flex tw-gap-2 tw-mb-3'>
                  <span className='tw-px-3 tw-py-0.5 tw-bg-main-600/20 tw-border tw-border-main-600/30 tw-backdrop-blur-md tw-text-[10px] tw-font-bold tw-tracking-wider tw-rounded-full'>ARCHITECTURAL</span>
                  <span className='tw-px-3 tw-py-0.5 tw-bg-main-600/20 tw-border tw-border-main-600/30 tw-backdrop-blur-md tw-text-[10px] tw-font-bold tw-tracking-wider tw-rounded-full'>INTIMACY</span>
                </div>
                <h4 className='tw-text-3xl fw-normal tw-mb-3 text-white'>BirdHouses</h4>
                <p className='tw-mb-6 text-white/80 tw-text-sm'>
                  Wake up to birdsong in our unique, architectural nests designed for absolute tranquility and mountain views.
                </p>
                <Link
                  href='https://wa.me/918888653343'
                  target="_blank"
                  className='tw-inline-flex tw-items-center tw-gap-2 tw-text-lg fw-medium text-main-600 hover-text-white transition-all'
                >
                  Experience the Nest
                  <span><i className='ph ph-whatsapp-logo' /></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Gamla Cafe */}
          <div className='col-xl-4 col-md-6'>
            <div className='brand-card position-relative z-1 overflow-hidden tw-rounded-2xl tw_fade_anim' data-delay=".7">
              <div className='brand-card-thumb transition-all duration-500'>
                <Image
                  width={450}
                  height={550}
                  src='/assets/images/thumbs/about-three-thumb3.webp'
                  alt='Gamla Cafe'
                  className='tw-w-full tw-h-[500px] tw-object-cover'
                />
              </div>
              <div className='brand-card-content position-absolute bottom-0 start-0 tw-w-full tw-p-8 tw-bg-gradient-to-t tw-from-black/90 tw-to-transparent text-white'>
                <div className='tw-flex tw-gap-2 tw-mb-3'>
                  <span className='tw-px-3 tw-py-0.5 tw-bg-main-600/20 tw-border tw-border-main-600/30 tw-backdrop-blur-md tw-text-[10px] tw-font-bold tw-tracking-wider tw-rounded-full'>QUIRKY GARDEN</span>
                  <span className='tw-px-3 tw-py-0.5 tw-bg-main-600/20 tw-border tw-border-main-600/30 tw-backdrop-blur-md tw-text-[10px] tw-font-bold tw-tracking-wider tw-rounded-full'>GVM EXCLUSIVE</span>
                </div>
                <h4 className='tw-text-3xl fw-normal tw-mb-3 text-white'>Gamla Cafe</h4>
                <p className='tw-mb-6 text-white/80 tw-text-sm'>
                  A whimsical oasis where nature meets creative fusion. Perfect for slow conversations and garden-side leisure.
                </p>
                <Link
                  href='https://wa.me/918888653343'
                  target="_blank"
                  className='tw-inline-flex tw-items-center tw-gap-2 tw-text-lg fw-medium text-main-600 hover-text-white transition-all'
                >
                  Visit the Garden
                  <span><i className='ph ph-whatsapp-logo' /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .brand-card:hover .brand-card-thumb {
          transform: scale(1.1);
        }
        .brand-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%);
          z-index: 1;
        }
        .brand-card-content {
          z-index: 2;
        }
      `}</style>
    </section>
  );
};

export default BrandPortal;
