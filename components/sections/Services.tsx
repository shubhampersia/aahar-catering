import Link from "next/link"

export default function Services() {
  const services = [
    {
      emoji: "🏢",
      title: "Corporate Catering",
      description:
        "Professional catering solutions for corporate meetings, conferences, and office events with seamless service.",
      link: "/services",
    },
    {
      emoji: "🎉",
      title: "Corporate Events",
      description:
        "Complete event management for corporate gatherings, team building events, and company celebrations.",
      link: "/services",
    },
    {
      emoji: "📋",
      title: "Event Management & Catering",
      description: "Full-service event planning and catering for all types of occasions, from intimate to grand scale.",
      link: "/services",
    },
    {
      emoji: "🍽️",
      title: "Multi-Cuisine Food Delicacies",
      description:
        "Diverse culinary offerings featuring authentic flavors from around the world to satisfy every palate.",
      link: "/services",
    },
    {
      emoji: "💒",
      title: "Weddings, Gala Dinners & Banquets",
      description: "Elegant catering and event services for weddings, gala dinners, and formal banquet occasions.",
      link: "/services",
    },
    {
      emoji: "🎯",
      title: "Conferences & Seminars Catering",
      description: "Specialized catering services for conferences, seminars, and professional development events.",
      link: "/services",
    },
    {
      emoji: "🥂",
      title: "Private Dining Experiences",
      description:
        "Exclusive private dining services with personalized menus and intimate service for special occasions.",
      link: "/services",
    },
    {
      emoji: "🍸",
      title: "Bar Services & Cocktail Events",
      description: "Professional bartending services and cocktail catering for parties, receptions, and social events.",
      link: "/services",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            OUR SERVICES
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-600 text-sm max-w-4xl mx-auto">
            From intimate dining to grand celebrations, we offer a complete range of culinary services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
