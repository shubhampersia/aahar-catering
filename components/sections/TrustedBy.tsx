"use client"

import Image from "next/image"

export default function TrustedBy() {
  const brands = [
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=140&text=Microsoft" },
    { name: "Google", logo: "/placeholder.svg?height=60&width=140&text=Google" },
    { name: "Amazon", logo: "/placeholder.svg?height=60&width=140&text=Amazon" },
    { name: "Apple", logo: "/placeholder.svg?height=60&width=140&text=Apple" },
    { name: "Meta", logo: "/placeholder.svg?height=60&width=140&text=Meta" },
    { name: "Netflix", logo: "/placeholder.svg?height=60&width=140&text=Netflix" },
    { name: "Tesla", logo: "/placeholder.svg?height=60&width=140&text=Tesla" },
    { name: "Spotify", logo: "/placeholder.svg?height=60&width=140&text=Spotify" },
    { name: "Adobe", logo: "/placeholder.svg?height=60&width=140&text=Adobe" },
    { name: "Intel", logo: "/placeholder.svg?height=60&width=140&text=Intel" },
  ]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            TRUSTED BY
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-16 md:w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Marquee Container */}
          <div className="flex animate-marquee hover:pause-marquee">
            {/* First set of logos */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-12 flex-shrink-0">
              {brands.map((brand, index) => (
                <div key={`set1-${index}`} className="flex items-center justify-center group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 md:p-4 lg:p-6 border border-gray-100 group-hover:scale-105">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      width={140}
                      height={60}
                      className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second set of logos (duplicate for seamless loop) */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-12 flex-shrink-0 ml-6 md:ml-8 lg:ml-12">
              {brands.map((brand, index) => (
                <div key={`set2-${index}`} className="flex items-center justify-center group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 md:p-4 lg:p-6 border border-gray-100 group-hover:scale-105">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      width={140}
                      height={60}
                      className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Third set of logos (extra for ultra-smooth loop) */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-12 flex-shrink-0 ml-6 md:ml-8 lg:ml-12">
              {brands.map((brand, index) => (
                <div key={`set3-${index}`} className="flex items-center justify-center group">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 md:p-4 lg:p-6 border border-gray-100 group-hover:scale-105">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      width={140}
                      height={60}
                      className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
