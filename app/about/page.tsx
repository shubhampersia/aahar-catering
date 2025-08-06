import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      title: "Quality Ingredients",
      description: "We source only the finest, freshest ingredients from trusted local suppliers and farms.",
    },
    {
      title: "Culinary Excellence",
      description: "Our chefs bring years of experience and passion to create exceptional dining experiences.",
    },
    {
      title: "Customer Satisfaction",
      description: "Every guest is treated like family, and their satisfaction is our highest priority.",
    },
    {
      title: "Innovation",
      description: "We constantly evolve our menu and techniques while respecting traditional cooking methods.",
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      description: "aahar was founded with a simple vision: to create extraordinary dining experiences.",
    },
    {
      year: "2019",
      title: "First Recognition",
      description: 'Received our first culinary award for "Best New Restaurant" in the city.',
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Launched our catering services and private chef experiences.",
    },
    {
      year: "2021",
      title: "Community Focus",
      description: "Started our cooking classes and community outreach programs.",
    },
    {
      year: "2022",
      title: "Sustainability",
      description: "Implemented our farm-to-table program and zero-waste kitchen initiative.",
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced our signature tasting menus and sommelier services.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About aahar
                <div className="w-20 h-1 bg-orange-500 mt-2"></div>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At aahar, we believe every ingredient has a story to tell. Our culinary journey began with a simple
                philosophy: to create extraordinary dining experiences that connect people through the universal
                language of exceptional food.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2018, we have grown from a small neighborhood restaurant to a celebrated culinary
                destination, always staying true to our core values of quality, innovation, and genuine hospitality.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Restaurant interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing ingredients to serving our guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From humble beginnings to culinary excellence - here's our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  {index !== timeline.length - 1 && <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center mb-2">
                    <span className="text-orange-500 font-bold text-lg mr-4">{item.year}</span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our passionate team of culinary professionals is dedicated to creating exceptional experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/head-chef-portrait.png"
                alt="Head Chef"
                width={300}
                height={300}
                className="w-64 h-64 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chef Marco Rodriguez</h3>
              <p className="text-orange-500 font-medium mb-3">Head Chef & Founder</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of culinary experience, Chef Marco brings passion and innovation to every dish.
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/sous-chef-portrait.png"
                alt="Sous Chef"
                width={300}
                height={300}
                className="w-64 h-64 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chef Sarah Thompson</h3>
              <p className="text-orange-500 font-medium mb-3">Sous Chef</p>
              <p className="text-gray-600 text-sm">
                A culinary school graduate with expertise in Mediterranean cuisine and a flair for creative
                presentations.
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Pastry Chef"
                width={300}
                height={300}
                className="w-64 h-64 object-cover rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chef Antonio Rossi</h3>
              <p className="text-orange-500 font-medium mb-3">Pastry Chef</p>
              <p className="text-gray-600 text-sm">
                Master of desserts and pastries, Antonio creates sweet endings that perfectly complement our savory
                dishes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
