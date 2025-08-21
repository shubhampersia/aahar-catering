import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MeetChef() {
  const chefs = [
    {
      name: "Chef Marco",
      role: "Head Chef",
      image: "/head-chef-portrait.png",
    },
    {
      name: "Chef Sarah",
      role: "Sous Chef",
      image: "/sous-chef-portrait.png",
    },
    {
      name: "Chef Antonio",
      role: "Pastry Chef",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Chef Maria",
      role: "Kitchen Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Chef
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Our talented team of culinary artists brings passion, creativity,
            and expertise to every dish.
          </p>
          <Button
            asChild
            className="bg-[#c68c2e] hover:bg-[#c48621] text-white rounded-full"
          >
            <Link href="/chef">View All Chefs</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <Image
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-full shadow-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {chef.name}
              </h3>
              <p className="text-[#c68c2e] font-medium">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
