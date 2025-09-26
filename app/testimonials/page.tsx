"use client";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "We recently had the pleasure of working with Ahar Hospitality Services for our sports events conducted for Government School students. With over 1500 participants, we required catering that could handle the scale and deliver exceptional service. Ahar Hospitality Services truly exceeded our expectations in every regard. The team was incredibly punctual, arriving ahead of schedule to ensure everything was set up perfectly. They were professional and organized throughout the event, managing a large crowd with ease. The cleanliness was top-notch, and the team made sure the venue remained spotless from start to finish. As for the food, it was nothing short of excellent. We had requested a variety of meals, including breakfast, lunch, snacks and beverages, and Ahar Hospitality made sure that there was more than enough to serve everyone. The food was not only delicious but also of high quality, which was evident by the feedback we received from participants. The children were particularly appreciative of the variety, and there was no wastage—everything was enjoyed and consumed in its entirety. The overall experience was seamless, and we would not hesitate to recommend Ahar Hospitality Services to anyone looking for reliable, professional and high-quality catering. Their attention to detail, food quality and outstanding service made this event a huge success. Thank you, Ahar Hospitality, for making our event a memorable one!",
      role: "Sr. Executive, Partnerships, Shikshana Foundation",
    },
    {
      quote:
        "Working with Ahar has been a fantastic experience. Their attention to detail, quality of food, and professionalism truly stands out. Consistently delivering delicious, well-presented meals that impresses and energize our team. Ahar team is reliable, punctual, and accommodating to our specific needs. We highly recommend their services for any organizations be it a daily food or any corporate event or meeting.",
      role: "Admin officer, Centre for Development of Advanced Computing (C-DAC)",
    },
    {
      quote:
        "Ahar Hospitality Services has transformed the way we experience corporate dining. Their food is consistently fresh, flavourful, and beautifully presented, catering to diverse tastes and dietary needs. What truly sets them apart is their professionalism, punctuality, and attention to detail — from seamless setup to impeccable service. Our employees and guests always look forward to their meals, and we've received countless compliments after every event and after every client visits. Ahar Hospitality isn't just a catering service; they're a partner in creating memorable culinary experiences.",
      role: "Managing Director, Meru Info solutions Pvt Ltd",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c68c2e] mb-4">
            TESTIMONIALS
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience with
            Ahar Hospitality Services
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <blockquote className="text-gray-600 italic leading-relaxed text-lg text-justify hyphens-auto">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-[#c68c2e] font-medium mt-4">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
