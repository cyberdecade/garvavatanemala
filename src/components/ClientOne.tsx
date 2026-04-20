import { FC } from "react";

const ClientOne: FC = () => {
  return (
    <section className='pb-120'>
      <div className='container'>
        <div className='border-bottom border-neutral-200 tw-mb-11'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-xl-8 col-lg-8'>
              <div
                className='section-wrapper tw-mb-14 tw_fade_anim'
                data-delay='.3'
              >
                <h6 className='section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600'>
                  Driven by Service, Inspired by You
                </h6>
                <h2 className='section-title fw-normal tw-mb-7 tw-char-animation'>
                  We Don’t Just Manage Rooms – We Tell Jokes, Drink Coffee, And
                  Dance When No One’s Watching!
                </h2>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3'>
              <div
                className='counter-right bg-main-600 rounded-circle lh-1 d-inline-flex align-items-center justify-content-center flex-column tw_fade_anim'
                data-delay='.5'
              >
                <h6 className='tw-text-7 fw-normal tw-mb-2'>Sophie Graham</h6>
                <p>Chief Sustainability Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOne;
