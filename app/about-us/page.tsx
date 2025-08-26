"use client";

import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="pt-24">
      {/* ============================= */}
      {/* About Ahar Section           */}
      {/* ============================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            <div className="px-4">
              <Image
                src="/aboutus.png"
                alt="Ahar team"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
            <div className="text-left px-4">
              <h1 className="text-4xl font-bold text-[#c68c2e] mb-6">
                ABOUT AHAR
                <div className="w-20 h-1 bg-[#c68c2e] mt-2"></div>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ahar Hospitality Services was born from a simple yet powerful
                belief: “Food at work should never feel like a compromise.”
                Though the brand officially took shape in 2021, its roots in the
                catering industry trace back to the early 2000s. What began with
                a small kitchen and just one customer has now grown into a
                trusted catering partner serving clients across diverse sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Ahar, we don’t just cater food, we deliver experiences that
                nourish teams, foster workplace community, and enhance everyday
                productivity. From fresh ingredient sourcing to customizable
                meal plans, every aspect of our service is designed to reflect
                quality, consistency, and care. Sustainability, hygiene, and
                local partnerships remain central to our philosophy as we scale
                with purpose and pride.
              </p>
            </div>
          </div>

          {/* Mobile Layout */}
          {/* Mobile Layout for ABOUT AHAR */}
          <div className="md:hidden">
            <div className="mb-8 flex justify-center">
              <Image
                src="/aboutus.png"
                alt="Ahar team"
                width={500}
                height={400}
                className="rounded-xl shadow-lg mx-auto"
                priority
              />
            </div>
            <div className="px-4 text-left">
              {" "}
              {/* 👈 changed from text-center */}
              <h1 className="text-3xl font-bold text-[#c68c2e] mb-6">
                ABOUT AHAR
                <div className="w-20 h-1 bg-[#c68c2e] mt-2"></div>
              </h1>
              <p className="text-md text-gray-600 mb-6 leading-relaxed">
                Ahar Hospitality Services was born from a simple yet powerful
                belief: “Food at work should never feel like a compromise.”
                Though the brand officially took shape in 2021, its roots in the
                catering industry trace back to the early 2000s. What began with
                a small kitchen and just one customer has now grown into a
                trusted catering partner serving clients across diverse sectors.
              </p>
              <p className="text-md text-gray-600 leading-relaxed">
                At Ahar, we don’t just cater food, we deliver experiences that
                nourish teams, foster workplace community, and enhance everyday
                productivity. From fresh ingredient sourcing to customizable
                meal plans, every aspect of our service is designed to reflect
                quality, consistency, and care. Sustainability, hygiene, and
                local partnerships remain central to our philosophy as we scale
                with purpose and pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* About the Founder Section     */}
      {/* ============================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left px-4">
              <h2 className="text-4xl font-bold text-[#c68c2e] mb-6">
                ABOUT THE FOUNDER
                <div className="w-20 h-1 bg-[#c68c2e] mt-2"></div>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ashwin, a former IT sales professional with an instinct for
                people and a passion for food, saw what most overlooked: that
                workplace meals were a missed opportunity. With a deep
                understanding of client needs and a sharp eye for operational
                execution, he founded Ahar to bridge the gap between corporate
                catering and culinary quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What sets him apart is his clarity of vision, obsession with
                consistency, and unwavering belief that food isn’t just fuel—
                it’s a force that can transform culture, morale, and momentum.
                With the precision of a strategist and the heart of a host,
                Ashwin leads Ahar to deliver meals that do more.
              </p>
            </div>
            <div className="flex justify-center px-4">
              <Image
                src="/founder.jpg"
                alt="Ashwin - Founder"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Mobile Layout */}
          {/* Mobile Layout for FOUNDER */}
          <div className="md:hidden">
            <div className="mb-8 flex justify-center">
              <Image
                src="/founder.jpg"
                alt="Ashwin - Founder"
                width={600}
                height={500}
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
            <div className="px-4 text-left">
              {" "}
              {/* 👈 changed from text-center */}
              <h2 className="text-3xl font-bold text-[#c68c2e] mb-6">
                ABOUT THE FOUNDER
                <div className="w-20 h-1 bg-[#c68c2e] mt-2"></div>
              </h2>
              <p className="text-md text-gray-600 leading-relaxed mb-6">
                Ashwin, a former IT sales professional with an instinct for
                people and a passion for food, saw what most overlooked: that
                workplace meals were a missed opportunity. With a deep
                understanding of client needs and a sharp eye for operational
                execution, he founded Ahar to bridge the gap between corporate
                catering and culinary quality.
              </p>
              <p className="text-md text-gray-600 leading-relaxed">
                What sets him apart is his clarity of vision, obsession with
                consistency, and unwavering belief that food isn’t just fuel—
                it’s a force that can transform culture, morale, and momentum.
                With the precision of a strategist and the heart of a host,
                Ashwin leads Ahar to deliver meals that do more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
