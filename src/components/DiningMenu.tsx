"use client";
import { FC, useState } from "react";
import Image from "next/image";

const menuData: Record<string, { name: string; price: string }[]> = {
  Sandwiches: [
    { name: "Veg Cheese Sandwich", price: "150" },
    { name: "Veg Cheese Grilled Sandwich", price: "180" },
    { name: "Corn Cheese Capsicum", price: "200" },
    { name: "Paneer Grilled Sandwich", price: "220" },
  ],
  Maggi: [
    { name: "Cheese Maggi", price: "140" },
    { name: "Plain Maggi", price: "100" },
    { name: "Veg Masala Maggi", price: "120" },
  ],
  Bread: [
    { name: "Garlic Bread / Toast", price: "130" },
    { name: "Cheese Chilli Toast", price: "120" },
  ],
  "South Indian": [
    { name: "Masala Dosa", price: "160" },
    { name: "Plain Dosa", price: "130" },
    { name: "Mysore Cheese Dosa", price: "199" },
    { name: "Tomato onion uttappa", price: "160" },
    { name: "Idli", price: "100" },
    { name: "Poha", price: "60" },
    { name: "Misal pav", price: "120" },
  ],
  Pizza: [
    { name: "Farmers delight", price: "350" },
    { name: "Paneer delight", price: "320" },
    { name: "Jain Pizza", price: "350" },
    { name: "Margherita", price: "300" },
  ],
  Burgers: [
    { name: "Classic Veg / Jain Burger", price: "120" },
    { name: "Veg Cheese Burger", price: "150" },
  ],
  "Small Bites": [
    { name: "Nachos", price: "150" },
    { name: "Nuggets", price: "180" },
    { name: "Salted Fries", price: "130" },
    { name: "Peri peri Fries", price: "150" },
    { name: "Cheesy Loaded Fries", price: "200" },
  ],
  Pasta: [
    { name: "White Sauce Pasta", price: "250" },
    { name: "Red Sauce Pasta", price: "250" },
  ],
  "Hot Beverages": [
    { name: "Coffee", price: "50" },
    { name: "Tea", price: "30" },
    { name: "Green Tea", price: "40" },
    { name: "Ginger Tea", price: "40" },
  ],
};

const DiningMenu: FC = () => {
  const [activeTab, setActiveTab] = useState("Sandwiches");

  return (
    <section className="dining-menu-area py-120 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-wrapper text-center tw-mb-16 tw_fade_anim">
              <h6 className="section-subtitle tw-text-xl fw-medium text-uppercase tw-mb-4 text-main-600">
                Gamla - The Garden Cafe
              </h6>
              <h2 className="section-title fw-normal tw-mb-7">
                Our Signature Menu
              </h2>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="menu-tabs-wrapper tw-flex tw-flex-wrap tw-justify-center tw-gap-3 tw-mb-14 tw_fade_anim">
              {Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`tw-px-8 tw-py-4 tw-rounded-full tw-text-sm tw-font-bold tw-transition-all tw-duration-300 ${
                    activeTab === category
                      ? "bg-main-600 tw-text-white shadow-lg"
                      : "bg-gray-100 tw-text-heading hover:bg-main-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="menu-items-container tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-16 tw-gap-y-6 tw_fade_anim">
              {menuData[activeTab].map((item, index) => (
                <div 
                  key={`${activeTab}-${index}`}
                  className="menu-item d-flex align-items-center justify-content-between tw-pb-4 tw-border-b tw-border-dashed tw-border-gray-200 hover:tw-border-main-400 tw-transition-colors group"
                >
                  <div className="menu-content">
                    <h4 className="tw-text-xl fw-normal text-heading group-hover:text-main-600 tw-transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <div className="menu-price">
                    <span className="tw-text-xl fw-bold text-main-600">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row tw-mt-20">
          <div className="col-xl-12 text-center">
            <p className="tw-text-gray-500 tw-italic">
              * All prices are in INR. Tax as applicable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningMenu;
