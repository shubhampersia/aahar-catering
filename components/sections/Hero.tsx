"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/HomePic.jpg')" }}
      >
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center md:text-left max-w-4xl mx-auto px-4 md:ml-16 ml-0 transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#c68c2e] mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
          WHERE INGREDIENTS TELL A STORY!
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          From our kitchen to your table.
        </p>
        <Button
          onClick={() => {
            const ctaForm = document.getElementById("cta-form");
            ctaForm?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#c68c2e] hover:bg-[#c48621] text-white rounded-lg px-12 py-6 text-lg shadow-lg"
        >
          Get a custom quote
        </Button>
      </div>
    </section>
  );
}
