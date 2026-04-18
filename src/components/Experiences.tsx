"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Bullock Cart Riding",
    desc: "Experience the timeless rhythm of rural commute through our lush organic fields.",
    icon: "ph ph-sketch-logo",
  },
  {
    title: "Farm Safari",
    desc: "An adventurous tour across our sprawling agro-landscapes and hidden natural spots.",
    icon: "ph ph-jeep",
  },
  {
    title: "Animal Ranch",
    desc: "Get close to nature at our ranch—interact with farm animals in a serene environment.",
    icon: "ph ph-horse",
  },
  {
    title: "Yoga & Wellness",
    desc: "Reconnect with your inner self with guided yoga sessions amidst the Mulshi mountains.",
    icon: "ph ph-flower-lotus",
  },
  {
    title: "Tractor Rides",
    desc: "A fun and authentic exploration of our vast farmlands on a traditional farm tractor.",
    icon: "ph ph-castle-turret",
  },
  {
    title: "Farming Activities",
    desc: "Get your hands dirty with seasonal sowing, harvesting, and traditional farming rituals.",
    icon: "ph ph-leaf",
  },
];

const Experiences: FC = () => {
  return (
    <section className="experiences-area py-120 bg-white">
      <div className="container">
        <div className="row align-items-center tw-mb-20">
          <div className="col-xl-8">
            <div className="section-wrapper tw_fade_anim">
              <h6 className="section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600">
                GVM Experiences
              </h6>
              <h2 className="section-title fw-normal tw-mb-7">
                Roots, Rituals & Rural Magic
              </h2>
              <p className="tw-text-lg tw-max-w-2xl">
                At Garva Vatanemala, every moment is an invitation to reconnect with the earth. From the morning birdsong to the smoky aroma of the evening Chulha, we curate memories that feel like coming home.
              </p>
            </div>
          </div>
          <div className="col-xl-4 text-xl-end">
            <Link 
              href="https://wa.me/918888653343" 
              target="_blank"
              className="tw-btn-hover-black bg-main-600 tw-py-5 tw-px-12 text-capitalize text-heading font-heading d-inline-flex align-items-center tw-gap-2 tw-rounded-lg shadow-lg"
            >
              Book Your Experience
              <span className="tw-text-xl"><i className="ph ph-whatsapp-logo" /></span>
            </Link>
          </div>
        </div>

        <div className="row justify-content-center gy-5">
          {experiences.map((exp, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
              <div className="exp-card tw-group tw-p-8 tw-rounded-3xl tw-bg-main-50 tw-border tw-border-main-100 hover:tw-bg-main-600 tw-transition-all tw-duration-500 tw-h-full">
                <div className="exp-icon tw-w-16 tw-h-16 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-text-3xl tw-text-main-600 tw-mb-8 group-hover:tw-bg-main-700 group-hover:tw-text-white tw-transition-colors shadow-sm">
                  <i className={exp.icon} />
                </div>
                <h4 className="tw-text-2xl fw-normal tw-mb-4 group-hover:tw-text-white tw-transition-colors">
                  {exp.title}
                </h4>
                <p className="tw-text-body/80 group-hover:tw-text-white/80 tw-transition-colors">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Big Visual Grid */}
        <div className="row tw-mt-24">
          <div className="col-xl-12">
            <div className="exp-visual-wrapper tw-relative tw-rounded-[40px] tw-overflow-hidden shadow-2xl">
              <Image 
                src="/assets/images/thumbs/gvm_activities_grid_1776553005527.png"
                width={1400}
                height={800}
                alt="GVM Activities Grid"
                className="tw-w-full tw_fade_anim"
              />
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-t tw-from-black/60 tw-to-transparent tw-flex tw-items-end tw-p-12">
                <div className="text-white">
                  <h3 className="tw-text-4xl fw-normal tw-mb-2">Crafting Real Memories</h3>
                  <p className="tw-text-white/80">Every activity is a step deeper into the soul of rural Maharashtra.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
