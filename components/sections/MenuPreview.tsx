import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MenuPreview() {
  const menuItems = [
    {
      name: "Grand Platter",
      description: "A magnificent selection of our finest dishes, perfect for sharing and celebrating.",
      image: "/grand-food-platter.png",
    },
    {
      name: "Fusion Bowl",
      description: "An innovative blend of traditional and modern flavors in one harmonious bowl.",
      image: "/colorful-fusion-bowl.png",
    },
    {
      name: "Seafood Platter",
      description: "Fresh catch of the day, expertly prepared with Mediterranean herbs and spices.",
      image: "/placeholder-o4u6o.png",
    },
    {
      name: "Baked Pears",
      description: "Delicately baked pears with aromatic spices and a touch of honey sweetness.",
      image: "/placeholder-vfn73.png",
    },
    {
      name: "Grilled Chicken",
      description: "Perfectly grilled chicken breast with herbs, served with seasonal vegetables.",
      image: "/grilled-chicken-herbs-vegetables.png",
    },
    {
      name: "Pasta Primavera",
      description: "Fresh pasta with seasonal vegetables, tossed in our signature herb-infused sauce.",
      image: "/pasta-primavera.png",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Delicious Menu
              <div className="w-20 h-1 bg-orange-500 mt-2"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Explore our carefully crafted dishes, each telling its own unique story of flavor and tradition.
            </p>
          </div>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-4 md:mt-0">
            <Link href="/menu">View More</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={350}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
