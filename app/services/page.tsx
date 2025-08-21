"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      iconSrc: "/building.svg",
      title: "Corporate Catering",
      description:
        "Thoughtfully crafted menus that mirror your brand identity and deliver an elevated, flavour-rich corporate dining experience.",
    },
    {
      iconSrc: "/marriage.svg",
      title: "Weddings, Gala Dinners & Banquets",
      description:
        "Bespoke banquets designed for unforgettable evenings and elegant milestones.",
    },
    {
      iconSrc: "/event.svg",
      title: "Event Management & Catering",
      description:
        "One partner for flawless execution, exceptional taste, and complete peace of mind.",
    },
    {
      iconSrc: "/dish.svg",
      title: "Multi-Cuisine Food Delicacies",
      description:
        "From traditional to contemporary, flavour-forward dishes that celebrate every palate.",
    },
    {
      iconSrc: "/conference.svg",
      title: "Corporate Events",
      description:
        "Curated corporate moments that inspire, engage, and leave a lasting impression.",
    },
    {
      iconSrc: "/business.svg",
      title: "Conferences & Seminars Catering",
      description:
        "Timely, professional catering that aligns with your agenda and audience.",
    },
    {
      iconSrc: "/chef-hat.svg",
      title: "Private Dining Experiences",
      description:
        "Memorable private meals made effortless with elevated flavour and flawless service.",
    },
    {
      iconSrc: "/cocktail.svg",
      title: "Bar Services & Cocktail Events",
      description:
        "Sophisticated bar service for social events, launches, or elegant evenings.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundColor: "black" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-[#c68c2e] mb-4 animate-fade-in-up">
              Signature Touches
            </h1>
            <p className="text-xl text-gray-200">
              Exceptional service and culinary excellence for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-lg p-10 hover:shadow-xl transition-shadow text-center min-h-[300px] flex flex-col justify-center items-center"
                >
                  <div className="mb-6">
                    <Image
                      src={service.iconSrc}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain mx-auto"
                      priority={index < 3}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  <div className="text-gray-600 mb-6 leading-relaxed text-pretty flex-1">
                    <span className="block">{service.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
