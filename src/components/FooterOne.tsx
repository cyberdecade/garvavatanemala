import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const FooterOne: FC = () => {
  return (
    <footer
      className='footer position-relative z-1 overflow-hidden '
      style={{ background: 'linear-gradient(180deg, #0b342d 0%, #07211d 100%)' }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-12'>
            <div className='cursor-content tp-cursor-point-area_ tw-pt-12 tw-pb-8 tw_fade_anim'>
              <h2 className='cursor-text text-center tw-text-9 fw-normal text-white'>
                Experience Elegance. Book Your Escape Today.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-center-space position-relative z-1'>
        <div className='container container-two'>
          <div className='footer-center-border tw-pt-4'>
            <div className='row gy-5'>
              <div
                className='col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='footer-col-1 tw_fade_anim' data-delay='.3'>
                  <h4 className='cursor-big tw-text-9 fw-normal text--white tw-mb-8'>
                    Get news &amp; update
                    <br /> electricty today
                  </h4>
                  <form
                    action='#'
                    className='tw-mt-6 position-relative form-submit d-flex tw-gap-2 align-items-center tw-mb-4 flex-wrap'
                  >
                    <input
                      type='email'
                      className='form-control tw-w-288-px  bg-white shadow-none border border-neutral-700 text-heading tw-ps-6 tw-pe-13 focus-border-main-600 tw-h-14 tw-placeholder-text-neutral-700 focus-tw-placeholder-text-hidden tw-placeholder-transition-2'
                      placeholder='Email...'
                      required
                    />
                    <button
                      type='submit'
                      className='tw-btn-hover-white bg-main-600 text-heading fw-bold tw-py-4 tw-px-8 tw-rounded-md transition-all d-flex tw-gap-3'
                    >
                      Sign Up{" "}
                      <span>
                        <i className='ph ph-paper-plane-tilt' />
                      </span>
                    </button>
                  </form>
                  <p className='font-heading fw-normal text-white'>
                    By subscribing, you’re accept{" "}
                    <Link
                      className='text-main-600 hover-text-white text-decoration-underline'
                      href='#'
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-6 col-md-4 col-sm-6 col-xs-6'
                data-aos='fade-up'
                data-aos-duration={400}
              >
                <div className='footer-col-2 tw_fade_anim' data-delay='.5'>
                  <h4 className='cursor-big tw-text-505 fw-normal text--white tw-mb-8'>
                    Our Devision
                  </h4>
                  <ul className='d-flex flex-column tw-gap-2'>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Store Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Top Hotels
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Quick Links
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Important Links
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Insights
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-6 col-md-8 col-sm-6 col-xs-6'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <div className='footer-col-3 tw_fade_anim' data-delay='.7'>
                  <h4 className='cursor-big tw-text-505 fw-normal text--white tw-mb-8'>
                    My account
                  </h4>
                  <ul className='d-flex flex-column tw-gap-2'>
                    <li>
                      <Link
                        href='/contact'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/faq'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        FAQ Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Get In Touch
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Global Network
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Suport 24/7
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-2 col-lg-6 col-md-4 col-sm-6 col-xs-6'
                data-aos='fade-up'
                data-aos-duration={400}
              >
                <div className='footer-col-4 tw_fade_anim' data-delay='.9'>
                  <h4 className='cursor-big tw-text-505 fw-normal text--white tw-mb-8'>
                    Service
                  </h4>
                  <ul className='d-flex flex-column tw-gap-2'>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Request A Freight
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/service-details'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Abandonment Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text--white hover-text-main-600 hover-underline'
                      >
                        Shipments
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {/* bottom Footer */}
        <div className='footer-bottom tw-py-8'>
          <div className='container container-two'>
            <div className='footer-bottom-wrap d-flex flex-column align-items-center justify-content-center text-center tw-gap-6'>
              <ul
                className='footer-bottom-social d-flex align-items-center justify-content-center tw-gap-8 tw_fade_anim'
                data-delay='.5'
              >
                <li>
                  <Link
                    href='https://www.facebook.com/p/Garva-agro-tourism-%E0%A4%B5%E0%A4%BE%E0%A4%9F%E0%A4%BE%E0%A4%A3%E0%A5%87-%E0%A4%AE%E0%A4%B3%E0%A4%BE-100063523808561/'
                    className='text--white hover-text-main-600 transition-all'
                    target='_blank'
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65681 21.1338 10.4375 21.8867V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9314 5.90625 14.2148 5.90625C15.3086 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1914C13.95 8.5625 13.5625 9.33333 13.5625 10.125V12H16.3359L15.8926 14.8906H13.5625V21.8867C18.3432 21.1338 22 16.9913 22 12Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.instagram.com/garva.vatanemala_agrotourism/'
                    className='text--white hover-text-main-600 transition-all'
                    target='_blank'
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.youtube.com/@GarvaAgroTourismMulshi'
                    className='text--white hover-text-main-600 transition-all'
                    target='_blank'
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://wa.me/918888653343'
                    className='text--white hover-text-main-600 transition-all'
                    target='_blank'
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </Link>
                </li>
              </ul>

              <div className='copyright-text tw_fade_anim' data-delay='.3'>
                <p className='mb-0 text-white opacity-75 font-heading fw-normal'>
                  © {new Date().getFullYear()} Garva Vatanemala Agrotourism. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
