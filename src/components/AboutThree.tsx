import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutThree: FC = () => {
  return (
    <section className='about-three-area py-120'>
      <div className='container'>
        <div className='row align-items-center tw-mb-14'>
          <div className='col-xl-10'>
            <div
              className='section-two-wrapper tw-mb-144 tw_fade_anim'
              data-delay='.3'
            >
              <h6 className='section-two-subtitle tw-text-xl text-uppercase text-main-three-800 tw-mb-6'>
                The Soul of Garva Vatanemala
              </h6>
              <h2 className='section-two-title tw-text-11 fw-normal tw-char-animation'>
                Gavra Vatanemala is where the soil meets the soul. We offer a 
                sacred slice of authentic rural charm, organic heart, and 
                deeply rooted agro-tourism amidst the Mulshi mountains.
              </h2>
            </div>
          </div>
          <div className='col-xl-2'>
            <div className='about-three-button' data-delay='.5'>
              <Link
                className='hover-btn-circle hover-btn-item hover-btn tw-text-lg fw-semibold tw-w-180-px tw-h-180-px lh-1 d-inline-flex align-items-center justify-content-center flex-column text-white rounded-circle position-relative z-1 overflow-hidden'
                style={{ backgroundColor: "#0D2235" }}
                href='https://wa.me/918888653343'
                target="_blank"
              >
                <span className='tw-text-2xl tw-mb-1 d-inline-block'>
                  <i className='ph ph-whatsapp-logo' />
                </span>
                BOOK NOW
                <i className='hover-btn-circle-dot' />
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-4' />
          <div className='col-xl-6'>
            <div className='pb-120 tw-me-12'>
              <p className='tw-text-lg fw-medium'>
                Stepping into our vatan is stepping back into a simpler time. 
                Experience the warmth of ancestral hospitality, the elegance 
                of nature's own design, and the raw, unhurried comfort of 
                thoughtful farm life. We don't just host; we connect you to 
                the earth.
              </p>
            </div>
          </div>
          <div className='col-xl-2' />
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-xl-12'>
            <div className='about-three-wrapper d-flex justify-content-center tw-gap-8 tw-mt-8'>
              <div className='about-three-thumb-1'>
                <Image
                  width={579}
                  height={471}
                  src='/assets/images/thumbs/about-three-thumb1.webp'
                  alt='thumb'
                />
              </div>
              <div className='about-three-thumb-2'>
                <Image
                  width={773}
                  height={537}
                  src='/assets/images/thumbs/about-three-thumb2.webp'
                  alt='thumb'
                />
              </div>
              <div className='about-three-thumb-3'>
                <Image
                  width={382}
                  height={377}
                  src='/assets/images/thumbs/about-three-thumb3.webp'
                  alt='thumb'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
