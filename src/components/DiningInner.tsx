import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import DiningMenu from "./DiningMenu";

const DiningInner: FC = () => {
  return (
    <div className='dining-inner-area'>
      {/* Hero Section */}
      <section className='dining-hero py-120 bg-main-300'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-10'>
              <div className='section-wrapper text-center tw-mb-14 tw_fade_anim'>
                <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                  A Culinary Journey
                </h6>
                <h2 className='section-title fw-normal tw-mb-7 tw-char-animation'>
                  From Traditional Farm Feasts to Quirky Garden Bites
                </h2>
                <p className='tw-text-lg max-w-2xl mx-auto'>
                  Discover the dual worlds of GVM dining. Whether you crave the smoky authenticity of a traditional village meal or the creative, garden-side relaxation of a quirky cafe, we have a seat waiting for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Farm Kitchen Section */}
      <section className='farm-kitchen-area py-120' id="farm-kitchen">
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-6'>
              <div className='dining-thumb-wrapper position-relative z-1 tw_fade_anim' data-delay=".3">
                <Image
                  width={600}
                  height={800}
                  src='/assets/images/thumbs/about-three-thumb2.webp'
                  alt='Traditional Kitchen'
                  className='tw-rounded-3xl tw-shadow-2xl'
                />
                <div className='exclusive-badge position-absolute top-0 end-0 tw-m-8 bg-main-600 text-heading fw-bold tw-py-4 tw-px-8 tw-rounded-full shadow-lg'>
                  Traditional Specialty
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='dining-content-wrapper tw-ps-14 tw_fade_anim' data-delay=".5">
                <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                  Garva Vatanemala Agrotourism
                </h6>
                <h2 className='section-title fw-normal tw-mb-7'>
                  The Authentic Farm Kitchen
                </h2>
                <p className='tw-text-lg tw-mb-8'>
                  Experience the true soul of Maharashtra. Our farm kitchen serves authentic, Chulha-baked Bhakris and the legendary Gavran Chicken and Mutton thalis. Every ingredient is sourced directly from our organic fields, ensuring a flavor that is as honest as the land itself.
                </p>
                <ul className='tw-flex tw-flex-col tw-gap-4 tw-mb-10'>
                  <li className='d-flex align-items-center tw-gap-4 tw-text-lg fw-medium'>
                    <span className='tw-text-2xl text-main-600'><i className='ph-bold ph-fire' /></span>
                    Traditional Chulha Cooking Workshops
                  </li>
                  <li className='d-flex align-items-center tw-gap-4 tw-text-lg fw-medium'>
                    <span className='tw-text-2xl text-main-600'><i className='ph-bold ph-bowl-food' /></span>
                    Signature Gavran Chicken & Mutton Thalis
                  </li>
                  <li className='d-flex align-items-center tw-gap-4 tw-text-lg fw-medium'>
                    <span className='tw-text-2xl text-main-600'><i className='ph-bold ph-leaf' /></span>
                    Pithla Bhakri & Organic Jaggery Thecha
                  </li>
                </ul>
                <Link href="https://wa.me/918888653343" target="_blank" className="btn btn-main tw-rounded-full tw-px-10 tw-py-4 d-inline-flex align-items-center tw-gap-2">
                  Book a Thali
                  <span className="tw-text-xl"><i className="ph ph-whatsapp-logo" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamla Garden Cafe Section */}
      <section className='gamla-cafe-area py-120 bg-main-300' id="gamla">
        <div className='container'>
          <div className='row align-items-center flex-row-reverse'>
            <div className='col-xl-6'>
              <div className='dining-thumb-wrapper position-relative z-1 tw_fade_anim' data-delay=".3">
                <Image
                  width={550}
                  height={500}
                  src='/assets/images/thumbs/gamla-garden-cafe-main.webp'
                  alt='Gamla Garden Cafe'
                  className='tw-rounded-3xl tw-shadow-2xl'
                />
                {/* <div className='exclusive-badge position-absolute top-0 start-0 tw-m-8 bg--white text-heading fw-bold tw-py-4 tw-px-8 tw-rounded-full shadow-lg'>
                  Quirky & Creative
                </div> */}
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='dining-content-wrapper tw-pe-14 tw_fade_anim' data-delay=".5">
                <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                  Gamla Garden Cafe
                </h6>
                <h2 className='section-title fw-normal tw-mb-7'>
                  Dining in the Wild Garden
                </h2>
                <p className='tw-text-lg tw-mb-8'>
                  A whimsical oasis where nature meets quirky design. Gamla Garden Cafe is your perfect stop for vegetarian fusion, refreshing leisure tea, and the best Maggi in Mulshi. Surrounded by lush greenery and vibrant pots, it's a space designed for slow conversations and creative inspiration.
                </p>
                <ul className='tw-flex tw-flex-col tw-gap-4 tw-mb-10'>
                  <li className='d-flex align-items-center tw-gap-4 tw-text-lg fw-medium'>
                    <span className='tw-text-2xl text-main-600'><i className='ph-bold ph-moon-stars' /></span>
                    Magical Evening Lighting & Leisure Vibes
                  </li>
                  <li className='d-flex align-items-center tw-gap-4 tw-text-lg fw-medium'>
                    <span className='tw-text-2xl text-main-600'><i className='ph-bold ph-pizza' /></span>
                    Best Maggi & Hand-Tossed Pizzas in Mulshi
                  </li>
                  <li className='d-flex align-items-center tw-gap-4 tw-text-lg fw-medium'>
                    <span className='tw-text-2xl text-main-600'><i className='ph-bold ph-coffee' /></span>
                    Tranquil Garden Spot for Tea & Conversations
                  </li>
                </ul>
                <Link href="https://wa.me/918888653343" target="_blank" className="btn btn-main tw-rounded-full tw-px-10 tw-py-4 d-inline-flex align-items-center tw-gap-2">
                  Visit the Cafe
                  <span className="tw-text-xl"><i className="ph ph-whatsapp-logo" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Menu Section */}
      <DiningMenu />
    </div>
  );
};

export default DiningInner;
