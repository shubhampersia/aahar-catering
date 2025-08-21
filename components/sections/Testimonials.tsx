"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The dining experience at aahar was absolutely exceptional. Every dish told a story, and the flavors were unforgettable. The attention to detail and passion for quality ingredients really shows.",
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I've been to many restaurants, but aahar stands out for its innovative approach to Mediterranean cuisine. The chef's creativity and the warm atmosphere make it a perfect dining destination.",
      name: "Michael Chen",
      role: "Restaurant Owner",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "From the moment we walked in, we felt welcomed. The service was impeccable, and every course was a delightful surprise. aahar has become our go-to place for special occasions.",
      name: "Emma Rodriguez",
      role: "Regular Customer",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear what our valued customers have to say about their dining
            experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Image
              src={testimonials[currentTestimonial].image || "/placeholder.svg"}
              alt={testimonials[currentTestimonial].name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
            />
            <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-[#c68c2e] font-medium">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-[#c68c2e]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
