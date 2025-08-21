import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: (
        <Image
          src="/building.svg"
          alt="Corporate Catering"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Corporate Catering",
      description:
        "Professional catering solutions for corporate meetings, conferences, and office events with seamless service",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/conference.svg"
          alt="Corporate Events"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Corporate Events",
      description:
        "Complete event management for corporate gatherings, team building events, and company celebrations",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/event.svg"
          alt="Event Management & Catering"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Event Management & Catering",
      description:
        "Full-service event planning and catering for all types of occasions, from intimate to grand scale",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/dish.svg"
          alt="Multi-Cuisine Food Delicacies"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Multi-Cuisine Food Delicacies",
      description:
        "Diverse culinary offerings featuring authentic flavors from around the world to satisfy every palate",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/marriage.svg"
          alt="Weddings, Gala Dinners & Banquets"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Weddings, Gala Dinners & Banquets",
      description:
        "Elegant catering and event services for weddings, gala dinners, and formal banquet occasions",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/business.svg"
          alt="Conferences & Seminars Catering"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Conferences & Seminars Catering",
      description:
        "Specialized catering services for conferences, seminars, and professional development events",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/champagne.svg"
          alt="Private Dining Experiences"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Private Dining Experiences",
      description:
        "Exclusive private dining services with personalized menus and intimate service for special occasions",
      link: "/services",
    },
    {
      icon: (
        <Image
          src="/cocktail.svg"
          alt="Bar Services & Cocktail Events"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Bar Services & Cocktail Events",
      description:
        "Professional bartending services and cocktail catering for parties, receptions, and social events",
      link: "/services",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center min-h-[350px] flex flex-col justify-center"
            >
              <div className="flex justify-center mb-6 px-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-pretty flex-1">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="text-[#c68c2e] hover:text-orange-600 font-medium inline-flex items-center justify-center"
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
