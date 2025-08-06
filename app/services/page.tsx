"use client"

import { useState } from "react"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      icon: "🏢",
      title: "Corporate Catering",
      description:
        "Thoughtfully crafted menus that mirror your brand identity and deliver an elevated, flavour-rich corporate dining experience",
    },
    {
      icon: "🎉",
      title: "Corporate Events",
      description: "Curated corporate moments that inspire, engage, and leave a lasting impression",
    },
    {
      icon: "📋",
      title: "Event Management & Catering",
      description: "One partner for flawless execution, exceptional taste, and complete peace of mind",
    },
    {
      icon: "🍽️",
      title: "Multi-Cuisine Food Delicacies",
      description: "From traditional to contemporary, flavour-forward dishes that celebrate every palate",
    },
    {
      icon: "💒",
      title: "Weddings, Gala Dinners & Banquets",
      description: "Bespoke banquets designed for unforgettable evenings and elegant milestones",
    },
    {
      icon: "🎯",
      title: "Conferences & Seminars Catering",
      description: "Timely, professional catering that aligns with your agenda and audience",
    },
    {
      icon: "🥂",
      title: "Private Dining Experiences",
      description: "Memorable private meals made effortless with elevated flavour and flawless service",
    },
    {
      icon: "🍸",
      title: "Bar Services & Cocktail Events",
      description: "Sophisticated bar service for social events, launches, or elegant evenings",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/placeholder.svg?height=400&width=1200')`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4 animate-fade-in-up">
              Signature Touches
            </h1>
            <p className="text-xl text-gray-200">Exceptional service and culinary excellence for every occasion</p>
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
                  className="bg-gray-50 rounded-xl shadow-lg p-10 hover:shadow-xl transition-shadow text-center min-h-[300px] flex flex-col justify-center"
                >
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
