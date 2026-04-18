import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ContactInner: FC = () => {
  return (
    <section className='bg_2 pt-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-11'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6'>
                <div className='tw_fade_anim' data-delay='.3'>
                  <div className='section-two-wrapper tw-mb-14'>
                    <h6 className='section-two-subtitle tw-text-xl text-uppercase text-main-three-800 tw-mb-4'>
                      Better yet, see us in person!

                    </h6>
                    <h2 className='section-two-title tw-text-16 fw-normal tw-mb-6 tw-char-animation'>
                      Contact Us
                    </h2>
                    <p className='fw-medium tw-text-lg'>
                      Feel free to contact us directly if you have any inquiries regarding accommodation. We would love to have you stay with us!
                    </p>
                  </div>
                  <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph-bold ph-map-pin' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-3'>
                            Location
                          </h4>
                          <p>
                            At post kondhawale, Tal, Mulshi, <br /> Pune, Maharashtra 412108
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph ph-phone' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-3'>
                            Phone
                          </h4>
                          <Link
                            className='fw-medium text-body d-block hover-text-main-600'
                            href='tel:+918888653343'
                          >
                            +91-8888653343
                          </Link>
                          <Link
                            className='fw-medium text-body d-block hover-text-main-600'
                            href='tel:+919764880740'
                          >
                            +91-9764880740
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph ph-envelope' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-3'>
                            Email
                          </h4>
                          <Link
                            className='fw-medium text-body d-block hover-text-main-600'
                            href='mailto:info@garvavatanemala.com'
                          >
                            info@garvavatanemala.com
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
                      <div className='d-flex tw-gap-4 tw-mb-13'>
                        <div>
                          <span className='d-inline-block lh-1 text-heading tw-text-3xl'>
                            <i className='ph ph-share-network' />
                          </span>
                        </div>
                        <div>
                          <h4 className='tw-text-2xl fw-normal tw-mb-4'>
                            Follow us on
                          </h4>
                          <ul className='d-flex align-items-center tw-gap-4'>
                            <li>
                              <Link
                                className='text-heading hover-text-main-600 transition-all'
                                href='https://www.facebook.com/p/Garva-agro-tourism-%E0%A4%B5%E0%A4%BE%E0%A4%9F%E0%A4%BE%E0%A4%A3%E0%A5%87-%E0%A4%AE%E0%A4%B3%E0%A4%BE-100063523808561/'
                                target='_blank'
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65681 21.1338 10.4375 21.8867V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9314 5.90625 14.2148 5.90625C15.3086 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1914C13.95 8.5625 13.5625 9.33333 13.5625 10.125V12H16.3359L15.8926 14.8906H13.5625V21.8867C18.3432 21.1338 22 16.9913 22 12Z" />
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='text-heading hover-text-main-600 transition-all'
                                href='https://www.instagram.com/garva.vatanemala_agrotourism/'
                                target='_blank'
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='text-heading hover-text-main-600 transition-all'
                                href='https://www.youtube.com/@GarvaAgroTourismMulshi'
                                target='_blank'
                              >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className='text-heading hover-text-main-600 transition-all'
                                href='https://wa.me/918888653343'
                                target='_blank'
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tw-mb-8'>
                    <Image
                      width={550}
                      height={195}
                      src='/assets/images/thumbs/contact-ip-bg.jpg'
                      alt='thumbs'
                    />
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6'>
                <div
                  className='contact-two-form bg-white tw-py-20 tw-ps-10 tw-pe-20 tw-mb-7 tw_fade_anim'
                  data-delay='.5'
                >
                  <div className='tw-mb-10'>
                    <h2 className='tw-text-12 fw-normal tw-mb-4 tw-char-animation'>
                      Fill Up The Form
                    </h2>
                    <p className='tw-text-lg fw-medium'>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form action='#'>
                    <div className='row'>
                      <div className='col-xl-12'>
                        <div className='position-relative tw-mb-11'>
                          <span className='position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl'>
                            <i className='ph-bold ph-user' />
                          </span>
                          <input
                            type='text'
                            className='form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-h-14 tw-placeholder-text-neutral-700 focus-tw-placeholder-text-hidden tw-placeholder-transition-2'
                            placeholder='Your Name*'
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='position-relative tw-mb-11'>
                          <span className='position-absolute top-50 start-0 translate-middle-y text-heading tw-text-xl'>
                            <i className='ph ph-envelope' />
                          </span>
                          <input
                            type='email'
                            className='form-control rounded-0 bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-h-14 tw-placeholder-text-neutral-700 focus-tw-placeholder-text-hidden tw-placeholder-transition-2'
                            placeholder='Email Address**'
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div className='position-relative tw-mb-11'>
                          <span className='position-absolute top-0 start-0 tw-mt-1 text-heading tw-text-xl'>
                            <i className='ph-bold ph-note-pencil' />
                          </span>
                          <textarea
                            className='form-control rounded-0 tw-h-135-px bg-white shadow-none border-none border-bottom border-bottom-neutral text-heading tw-ps-8 tw-pe-13 focus-border-main-600 tw-placeholder-text-neutral-700 focus-tw-placeholder-text-hidden tw-placeholder-transition-2'
                            placeholder='Enter Your Message here'
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className='col-xl-12'>
                        <div>
                          <button className='tw-btn-hover-black bg-main-600 tw-py-5 tw-px-14 text-capitalize text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg'>
                            Send us Mesaage{" "}
                            <span className='d-inline-block lh-1 tw-text-lg'>
                              <i className='ph ph-arrow-up-right' />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInner;
