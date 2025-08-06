"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 6

  const allTestimonials = [
    {
      quote:
        "Ahar Hospitality Services transformed our corporate event into an unforgettable experience. The attention to detail and quality of service was exceptional.",
      name: "Sarah Johnson",
      role: "Event Manager, TechCorp",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "The catering for our wedding was absolutely perfect. Every dish was delicious and the presentation was stunning. Highly recommended!",
      name: "Michael Chen",
      role: "Happy Customer",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "Professional, reliable, and delicious. Ahar has been our go-to catering partner for all corporate events. They never disappoint.",
      name: "Emma Rodriguez",
      role: "HR Director, StartupHub",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "The multi-cuisine options and customizable menus made our conference catering perfect for our diverse team. Excellent service!",
      name: "David Kumar",
      role: "Operations Manager",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "From planning to execution, everything was flawless. The team's professionalism and the quality of food exceeded our expectations.",
      name: "Lisa Thompson",
      role: "Marketing Director",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "Outstanding service and incredible food quality. Ahar made our gala dinner a huge success. Will definitely work with them again.",
      name: "Robert Wilson",
      role: "CEO, InnovateCorp",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "The bar services and cocktail events were perfectly executed. Our guests were impressed with both the drinks and the service.",
      name: "Jennifer Davis",
      role: "Event Coordinator",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "Exceptional catering for our product launch. The team understood our vision and delivered beyond expectations.",
      name: "Alex Thompson",
      role: "Product Manager, InnoTech",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote: "The private dining experience was intimate and elegant. Perfect for our anniversary celebration.",
      name: "Maria Garcia",
      role: "Satisfied Customer",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote: "Reliable, professional, and always delivers quality. Our go-to partner for all corporate catering needs.",
      name: "James Wilson",
      role: "Office Manager, GlobalCorp",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "The conference catering was seamless. Great food, timely service, and professional staff throughout the event.",
      name: "Rachel Green",
      role: "Conference Organizer",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      quote:
        "Amazing experience! The team handled our wedding reception flawlessly. Every guest was impressed with the service and food quality.",
      name: "Kevin Brown",
      role: "Happy Groom",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage)
  const currentTestimonials = allTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            TESTIMONIALS
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with Ahar Hospitality Services
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-orange-500 font-medium text-sm">{testimonial.role}</p>
                </div>
                <blockquote className="text-gray-600 italic text-center leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            {currentPage > 0 && (
              <button
                onClick={prevPage}
                className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </button>
            )}

            {currentPage < totalPages - 1 && (
              <button
                onClick={nextPage}
                className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
