import Image from "next/image";

export default function MenuPage() {
  const menuCategories = [
    {
      category: "Appetizers",
      items: [
        {
          name: "Mediterranean Mezze Platter",
          description:
            "A selection of hummus, tapenade, olives, and fresh vegetables with warm pita bread.",
          price: "$18",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Grilled Halloumi",
          description:
            "Traditional Cypriot cheese grilled to perfection with herbs and olive oil.",
          price: "$14",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Stuffed Grape Leaves",
          description:
            "Hand-rolled grape leaves filled with rice, herbs, and aromatic spices.",
          price: "$12",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Grand Platter",
          description:
            "A magnificent selection of our finest dishes, perfect for sharing and celebrating.",
          price: "$45",
          image: "/grand-food-platter.png",
        },
        {
          name: "Fusion Bowl",
          description:
            "An innovative blend of traditional and modern flavors in one harmonious bowl.",
          price: "$28",
          image: "/colorful-fusion-bowl.png",
        },
        {
          name: "Seafood Platter",
          description:
            "Fresh catch of the day, expertly prepared with Mediterranean herbs and spices.",
          price: "$38",
          image: "/placeholder-o4u6o.png",
        },
        {
          name: "Grilled Chicken",
          description:
            "Perfectly grilled chicken breast with herbs, served with seasonal vegetables.",
          price: "$26",
          image: "/grilled-chicken-herbs-vegetables.png",
        },
        {
          name: "Pasta Primavera",
          description:
            "Fresh pasta with seasonal vegetables, tossed in our signature herb-infused sauce.",
          price: "$22",
          image: "/pasta-primavera.png",
        },
        {
          name: "Lamb Souvlaki",
          description:
            "Tender lamb skewers marinated in Mediterranean herbs, served with tzatziki.",
          price: "$32",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Baked Pears",
          description:
            "Delicately baked pears with aromatic spices and a touch of honey sweetness.",
          price: "$12",
          image: "/placeholder-vfn73.png",
        },
        {
          name: "Baklava",
          description:
            "Traditional layered pastry with nuts and honey, a Mediterranean classic.",
          price: "$10",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Tiramisu",
          description:
            "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
          price: "$14",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes, each telling its own unique
            story of flavor and tradition.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {category.category}
              <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-[#c68c2e]">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
