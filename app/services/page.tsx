"use client";

import { useEffect } from "react";
import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesPage() {
  // Scroll to section without highlight
  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  // Handle initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const urlParams = new URLSearchParams(window.location.search);
      const cardParam = urlParams.get("card");

      const targetSlug = hash || cardParam;
      if (targetSlug) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          scrollToSection(targetSlug);
        }, 100);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="pt-16">
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

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.slug} className="scroll-mt-28">
          <div
            className={`full-bleed ${index % 2 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid lg:grid-cols-12 items-center gap-10 py-16 lg:py-24">
                <div className="lg:col-span-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#c68c2e] flex-shrink-0 mt-1">
                      <Image
                        src={service.iconSrc}
                        alt={`${service.title} icon`}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain mx-auto"
                        priority
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#c68c2e] font-extrabold uppercase leading-tight text-2xl md:text-3xl mb-3 relative after:content-[''] after:block after:h-1.5 after:w-24 after:bg-[#c68c2e] after:mt-3">
                        {service.title}
                      </h2>
                      <p className="text-slate-700 text-lg leading-relaxed max-w-[75ch] whitespace-pre-line break-words">
                        {service.content}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
