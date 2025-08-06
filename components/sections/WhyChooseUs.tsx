import Link from "next/link"

export default function WhyChooseUs() {
  const features = [
    {
      emoji: "👥",
      title: "Well-Trained Staff",
      description: "Our experienced team ensures flawless service and attention to detail at every event.",
      link: "#",
    },
    {
      emoji: "📋",
      title: "Customizable Menus",
      description: "Menus tailored to your needs and preferences, for any occasion or dietary requirement.",
      link: "#",
    },
    {
      emoji: "⭐",
      title: "Exceptional Quality",
      description: "We use only the highest quality ingredients and maintain uncompromising standards.",
      link: "#",
    },
    {
      emoji: "👨‍🍳",
      title: "Expert Chefs for Every Cuisine",
      description: "Our chefs bring expertise in global cuisines to deliver an authentic taste experience.",
      link: "#",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            WHY CHOOSE US
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover what makes aahar the perfect choice for your dining experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center"
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
