"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TestimonialsCarousel() {
  const [currentSet, setCurrentSet] = useState(0)

  const testimonials = [
    {
      quote:
        "Ahar Hospitality Services transformed our corporate event into an unforgettable experience. The attention to detail and quality of service was exceptional.",
      name: "Sarah Johnson",
      role: "Event Manager, TechCorp",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The catering for our wedding was absolutely perfect. Every dish was delicious and the presentation was stunning. Highly recommended!",
      name: "Michael Chen",
      role: "Happy Customer",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Professional, reliable, and delicious. Ahar has been our go-to catering partner for all corporate events. They never disappoint.",
      name: "Emma Rodriguez",
      role: "HR Director, StartupHub",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The multi-cuisine options and customizable menus made our conference catering perfect for our diverse team. Excellent service!",
      name: "David Kumar",
      role: "Operations Manager",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "From planning to execution, everything was flawless. The team's professionalism and the quality of food exceeded our expectations.",
      name: "Lisa Thompson",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Outstanding service and incredible food quality. Ahar made our gala dinner a huge success. Will definitely work with them again.",
      name: "Robert Wilson",
      role: "CEO, InnovateCorp",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const testimonialsPerSet = 3
  const totalSets = Math.ceil(testimonials.length / testimonialsPerSet)

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets)
  }

  useEffect(() => {
    const interval = setInterval(nextSet, 15000) // 15 seconds
    return () => clearInterval(interval)
  }, [])

  const currentTestimonials = testimonials.slice(currentSet * testimonialsPerSet, (currentSet + 1) * testimonialsPerSet)

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">
              TESTIMONIALS
              <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto md:mx-0"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Hear what our valued clients have to say about their experience with us
            </p>
          </div>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-12 py-6 text-lg">
            <Link href="/testimonials">View All</Link>
          </Button>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-md"
                />
                <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-orange-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
