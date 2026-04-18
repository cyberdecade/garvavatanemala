import Image from "next/image";
import { FC } from "react";

const AboutTwo: FC = () => {
  return (
    <section className='about-two-area py-120'>
      <div className='container'>
        <div className='row tw-mb-10'>
          <div className='col-xl-4 col-lg-4'>
            <div>
              <h6 className='tw-mb-22 tw-text-xl fw-bold text-uppercase text-neutral-800'>
                The Essence of Hospitality
              </h6>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                  <div className='counter-wrap tw-mb-8'>
                    <div className='counter-content'>
                      <h2 className='counter-title counter-two-title fw-semibold font-heading text-black tw-text-23 fw-normal tw-mb-3'>
                        +{" "}
                        <span
                          className='purecounter'
                          data-purecounter-duration={1}
                          data-purecounter-end={20}
                        />
                      </h2>
                      <p className='counter-paragraph font-heading text-black tw-text-lg fw-normal'>
                        Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                  <div className='counter-wrap tw-mb-8'>
                    <div className='counter-content'>
                      <h2 className='counter-title counter-two-title fw-semibold font-heading text-black tw-text-23 fw-normal tw-mb-3'>
                        +{" "}
                        <span
                          className='purecounter'
                          data-purecounter-duration={1}
                          data-purecounter-end={2}
                        />
                        k
                      </h2>
                      <p className='counter-paragraph font-heading text-black tw-text-lg fw-normal'>
                        total luxuray rooms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-8 col-lg-8'>
            <div>
              <div className='cursor-content about-two-cursor-content tp-cursor-point-area tw-ms-12'>
                <h2 className='cursor-text about-two-cursor-text tw-text-14 fw-normal'>
                  Garva Vatanemala offers authentic rural charm, organic living,
                  and heartful agro-tourism. Located in the soul of Maharashtra,
                  we create memories that last a lifetime.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5'>
            <div className='row'>
              <div className='col-xl-6 col-lg-4 col-md-6 col-sm-6'>
                <div className='feature-item feature-two-item bg-white tw-rounded-xl tw-px-8 tw-py-14'>
                  <div className='feature-icon tw-mb-15'>
                    <span className='tw-h-26'>
                      <Image
                        width={71}
                        height={75}
                        className='tw-transition'
                        src='/assets/images/icons/feature-icon1.svg'
                        alt='icon'
                      />
                    </span>
                  </div>
                  <div>
                    <h4 className='tw-text-2xl fw-normal'>
                      Private balconies or terraces
                    </h4>
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-4 col-md-6 col-sm-6'>
                <div className='feature-item feature-two-item bg-white active tw-rounded-xl tw-px-8 tw-py-14'>
                  <div className='feature-icon tw-mb-15'>
                    <span className='tw-h-26'>
                      <Image
                        width={59}
                        height={83}
                        className='tw-transition'
                        src='/assets/images/icons/feature-icon2.svg'
                        alt='icon'
                      />
                    </span>
                  </div>
                  <div>
                    <h4 className='tw-text-2xl fw-normal'>
                      Picnic Area with BBQ Facilities
                    </h4>
                  </div>
                </div>
              </div>
              <div className='col-xl-11'>
                <div className='tw-mt-10'>
                  <p className='tw-text-lg fw-medium'>
                    At Garva Vatanemala, we believe that luxury is defined by
                    experience the warmth of personalized service, the elegance
                    of refined design, and the comfort of thoughtful
                    details. Our farm is designed to connect you with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-7'>
            <div className='about-two-thumb'>
              <Image
                width={749}
                height={464}
                className='tw-rounded-lg'
                src='/assets/images/thumbs/about-two-thumb.jpg'
                alt='thumb'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
