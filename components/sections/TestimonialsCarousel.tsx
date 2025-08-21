"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string; // path under /public
};

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Exceeded expectations with punctual service, spotless setup, and delicious food for 1500+ participants",
      name: "Mahalakshmi",
      role: "Sr. Executive, Partnerships, Shikshana Foundation",
      image: "/testimonial-2.png",
    },
    {
      quote:
        "Reliable and professional, Ahar impresses us every time with tasty food and attention to detail",
      name: "Aswath Rao",
      role: "Admin officer, Centre for Development of Advanced Computing (C-DAC)",
      image: "/testimonial-1.png",
    },
    {
      quote:
        "Fresh, flavourful food with flawless service, turning every corporate meal into a memorable experience",
      name: "Sudhindra Kundapura",
      role: "Managing Director, Meru Info solutions Pvt Ltd",
      image: "/testimonial-3.png",
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
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-md"
                />
                <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed text-pretty flex-1">
                  {t.quote}
                </blockquote>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-[#c68c2e] font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
