import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <Image
          src="/icons/group.svg"
          alt="Well-Trained Staff icon"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Well-Trained Staff",
      description:
        "Our experienced team ensures flawless service and attention to detail at every event.",
    },
    {
      icon: (
        <Image
          src="/icons/menu.svg"
          alt="Customizable Menus"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Customizable Menus",
      description:
        "Menus tailored to your needs and preferences, for any occasion or dietary requirement.",
    },
    {
      icon: (
        <Image
          src="/icons/quality.svg"
          alt="Exceptional Quality"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Exceptional Quality",
      description:
        "We use only the highest quality ingredients and maintain uncompromising standards.",
    },
    {
      icon: (
        <Image
          src="/icons/chef-hat.svg"
          alt="Expert Chefs for Every Cuisine"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      title: "Expert Chefs for Every Cuisine",
      description:
        "Our chefs bring expertise in global cuisines to deliver an authentic taste experience.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#c68c2e] mb-4">
            WHY CHOOSE US
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover what makes aahar the perfect choice for your dining
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white px-8 py-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center min-h-[300px] flex flex-col justify-center"
            >
              <div className="flex justify-center mb-6 px-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-pretty flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
