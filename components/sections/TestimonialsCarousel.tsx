"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
};

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Exceeded expectations with punctual service, spotless setup, and delicious food for 1500+ participants",
    },
    {
      quote:
        "Reliable and professional, Ahar impresses us every time with tasty food and attention to detail",
    },
    {
      quote:
        "Fresh, flavourful food with flawless service, turning every corporate meal into a memorable experience",
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 15000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-[#c68c2e] mb-4">
              TESTIMONIALS
              <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto md:mx-0" />
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Hear what our valued clients have to say about their experience
              with us
            </p>
          </div>
          <Button
            asChild
            className="bg-[#c68c2e] hover:bg-[#c48621] text-white rounded-lg px-12 py-6 text-lg"
          >
            <Link href="/testimonials">View All</Link>
          </Button>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <blockquote className="text-lg text-gray-600 italic leading-relaxed text-pretty">
                  "{t.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
