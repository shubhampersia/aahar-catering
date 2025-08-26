import type React from "react";
export interface Service {
  id: number;
  slug: string;
  title: string;
  iconSrc: string;
  image: string;
  excerpt: string;
  content: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "corporate-catering",
    title: "Corporate Catering",
    iconSrc: "/building.svg",
    image: "/corporate.png",
    excerpt:
      "Professional catering solutions for corporate meetings, conferences, and office events with seamless service.",
    content:
      "Our Services Include:\n" +
      "• Daily Meal Service: Breakfast, lunch, dinner, and snacks designed to meet high-energy demands.\n" +
      "• On-Site Catering Operations: Staffed kitchens and dining areas with trained personnel.\n" +
      "• Mobile & Remote Catering: Robust solutions for camps, field teams, and off-grid locations.\n" +
      "• Menu Customization: Culturally sensitive, seasonal, and nutritionally balanced menus.\n" +
      "• Health & Safety Compliance: Strict adherence to food safety standards and hygiene protocols.",
  },
  {
    id: 2,
    slug: "corporate-events",
    title: "Corporate Events",
    iconSrc: "/conference.svg",
    image: "/eventPic.png",
    excerpt:
      "Complete event management for corporate gatherings, team building events, and company celebrations.",
    content:
      "Make your corporate events truly memorable with our customized catering solutions. Whether it’s a product launch, annual celebration, conference, or team gathering, we design menus that perfectly match the occasion. From elegant buffets to live counters and plated dining, our expert team ensures flawless service, premium quality, and a dining experience that leaves a lasting impression on your guests.",
  },
  {
    id: 3,
    slug: "event-management-and-catering",
    title: "Event Management & Catering",
    iconSrc: "/event.svg",
    image: "/eventCorporate.png",
    excerpt:
      "Full-service event planning and catering for all types of occasions, from intimate to grand scale.",
    content:
      "At Ahar, we combine flawless event planning with exceptional catering to deliver seamless corporate experiences. From intimate board meetings to large-scale conferences and celebrations, our team takes care of every detail—menu design, service, and setup—so you can focus on what matters most. With a perfect blend of professionalism, creativity, and taste, we ensure your event is as impressive as it is memorable.",
  },
  {
    id: 4,
    slug: "private-dining-experiences",
    title: "Private Dining Experiences",
    iconSrc: "/champagne.svg",
    image: "/private.png",
    excerpt:
      "Exclusive private dining services with personalized menus and intimate service for special occasions.",
    content:
      "Elevate your business meetings and exclusive gatherings with our bespoke private dining services. From curated gourmet menus to personalized service, we create an intimate dining atmosphere that blends sophistication, comfort, and exceptional taste—perfect for hosting clients, partners, or executive teams.",
  },
  {
    id: 5,
    slug: "bar-services-and-cocktail-events",
    title: "Bar Services & Cocktail Events",
    iconSrc: "/cocktail.svg",
    image: "/bar.png",
    excerpt:
      "Professional bartending services and cocktail catering for parties, receptions, and social events.",
    content:
      "Turn your corporate evenings into unforgettable experiences with our exclusive bar service and cocktail events. From stylish setups to handcrafted cocktails, our expert bartenders deliver the perfect blend of taste and flair. Whether it’s a networking mixer, gala dinner, or celebration, we create a vibrant atmosphere where great conversations flow as smoothly as the drinks.",
  },
  {
    id: 6,
    slug: "weddings-gala-dinners-banquets",
    title: "Weddings, Gala Dinners & Banquets",
    iconSrc: "/marriage.svg",
    image: "/banquet.png",
    excerpt:
      "Elegant catering and event services for weddings, gala dinners, and formal banquet occasions.",
    content:
      "Celebrate your special occasions with exceptional food and flawless service. From intimate weddings to prestigious gala dinners and grand banquets. At Ahar, we believe every milestone deserves a celebration that’s nothing short of extraordinary. From elegant weddings to distinguished gala dinners and grand banquets, with a perfect blend of culinary artistry and seamless hospitality, we transform your special occasions into unforgettable experiences.",
  },
];
