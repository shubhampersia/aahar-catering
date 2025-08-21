import Image from "next/image";

export default function ChefPage() {
  const chefs = [
    {
      name: "Chef Marco Rodriguez",
      role: "Head Chef & Founder",
      image: "/head-chef-portrait.png",
      bio: "With over 15 years of culinary experience across Europe and the Mediterranean, Chef Marco founded aahar with a vision to bring authentic flavors to modern dining. His innovative approach to traditional recipes has earned him recognition in culinary circles worldwide.",
      specialties: [
        "Mediterranean Cuisine",
        "Fusion Cooking",
        "Menu Development",
        "Team Leadership",
      ],
      achievements: [
        "James Beard Award Nominee",
        "Michelin Guide Recognition",
        "Culinary Institute Graduate",
        "Published Cookbook Author",
      ],
    },
    {
      name: "Chef Sarah Thompson",
      role: "Sous Chef",
      image: "/sous-chef-portrait.png",
      bio: "A graduate of the Culinary Institute of America, Chef Sarah brings precision and creativity to every dish. Her expertise in Mediterranean cuisine and passion for fresh, local ingredients make her an invaluable part of our kitchen team.",
      specialties: [
        "Seafood Preparation",
        "Vegetarian Cuisine",
        "Sauce Making",
        "Kitchen Management",
      ],
      achievements: [
        "CIA Honor Graduate",
        "Young Chef Award Winner",
        "Sustainable Cooking Advocate",
        "Local Farm Partnership Developer",
      ],
    },
    {
      name: "Chef Antonio Rossi",
      role: "Pastry Chef",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Trained in the finest patisseries of France and Italy, Chef Antonio brings European pastry traditions to aahar. His desserts are works of art that provide the perfect sweet conclusion to our culinary stories.",
      specialties: [
        "French Pastries",
        "Italian Desserts",
        "Chocolate Work",
        "Bread Making",
      ],
      achievements: [
        "French Pastry Certification",
        "International Dessert Competition Winner",
        "Artisan Bread Specialist",
        "Sugar Art Master",
      ],
    },
    {
      name: "Chef Maria Gonzalez",
      role: "Kitchen Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With a background in hospitality management and culinary arts, Chef Maria ensures our kitchen runs smoothly and efficiently. Her organizational skills and attention to detail maintain the high standards aahar is known for.",
      specialties: [
        "Kitchen Operations",
        "Staff Training",
        "Quality Control",
        "Inventory Management",
      ],
      achievements: [
        "Hospitality Management Degree",
        "Food Safety Certification",
        "Team Leadership Award",
        "Efficiency Optimization Expert",
      ],
    },
    {
      name: "Chef David Kim",
      role: "Prep Chef",
      image: "/placeholder.svg?height=400&width=400",
      bio: "A rising star in the culinary world, Chef David brings fresh perspectives and innovative techniques to our prep kitchen. His dedication to ingredient quality and preparation excellence supports our entire culinary operation.",
      specialties: [
        "Ingredient Preparation",
        "Knife Skills",
        "Food Presentation",
        "Recipe Development",
      ],
      achievements: [
        "Culinary School Valedictorian",
        "Knife Skills Champion",
        "Rising Chef Award",
        "Innovation in Prep Techniques",
      ],
    },
    {
      name: "Chef Lisa Chen",
      role: "Catering Chef",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specializing in large-scale food preparation and event catering, Chef Lisa ensures that our off-site dining experiences maintain the same quality and presentation as our restaurant service.",
      specialties: [
        "Event Catering",
        "Large Scale Cooking",
        "Menu Scaling",
        "Presentation Design",
      ],
      achievements: [
        "Event Management Certification",
        "Large Scale Catering Expert",
        "Client Satisfaction Award",
        "Logistics Coordination Master",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Chefs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our talented team of culinary artists brings passion, creativity,
            and expertise to every dish we serve.
          </p>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <Image
                    src={chef.image || "/placeholder.svg"}
                    alt={chef.name}
                    width={400}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {chef.name}
                  </h2>
                  <p className="text-xl text-[#c68c2e] font-medium mb-4">
                    {chef.role}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {chef.bio}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Achievements
                    </h3>
                    <ul className="space-y-2">
                      {chef.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-center"
                          >
                            <div className="w-2 h-2 bg-[#c68c2e] rounded-full mr-3"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
