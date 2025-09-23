"use client";

import Image from "next/image";

export default function TrustedBy() {
  const brands = [
    { name: "Partner 1", logo: "/Logos/avasarala.png" },
    { name: "Partner 2", logo: "/Logos/qualitas.png" },
    { name: "Partner 3", logo: "/Logos/cdac.png" },
    { name: "Partner 4", logo: "/Logos/vidyashilp.png" },
    { name: "Partner 5", logo: "/Logos/sikshana.png" },
    { name: "Partner 6", logo: "/Logos/bhadra.png" },
    { name: "Partner 7", logo: "/Logos/enchancesys.png" },
    { name: "Partner 8", logo: "/Logos/safran.png" },
    { name: "Partner 9", logo: "/Logos/meru.png" },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#c68c2e] mb-4">
            TRUSTED BY
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto" />
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* optional fades */}
          <div className="absolute left-0 top-0 w-16 md:w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* One track, duplicated inline for seamless loop */}
          <div className="marquee-track">
            {[...brands, ...brands].map((b, i) => {
              const isDup = i >= brands.length;
              return (
                <div
                  key={`${b.logo}-${i}`}
                  className="flex-none flex items-center justify-center"
                >
                  <Image
                    src={b.logo}
                    alt={isDup ? "" : `${b.name} logo`}
                    aria-hidden={isDup}
                    width={200}
                    height={100}
                    className="h-24 md:h-28 lg:h-32 w-auto object-contain opacity-90"
                    priority={i < 4}
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
