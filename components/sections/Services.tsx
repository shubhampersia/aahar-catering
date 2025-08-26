import Link from "next/link";
import { services } from "@/data/services";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-15 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#c68c2e] mb-4">
            OUR SERVICES
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Discover our comprehensive range of culinary services designed to
            make every occasion extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full flex flex-col text-center"
            >
              <div className="flex justify-center mb-6 px-4 text-[#c68c2e]">
                <Image
                  src={service.iconSrc}
                  alt={`${service.title} icon`}
                  width={80}
                  height={80}
                  className="w-15 h-15 object-contain mx-auto"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-pretty flex-1">
                {service.excerpt}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="text-[#c68c2e] hover:text-[#c68c2e] font-medium inline-flex items-center justify-center"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
