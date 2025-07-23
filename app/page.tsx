"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16 ml-8">
    <div className="flex items-center mb-4">
      <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">{title}</h2>
      <div className="h-1 w-16 bg-orange-500"></div>
    </div>
    {subtitle && <p className="text-gray-600 max-w-2xl text-left">{subtitle}</p>}
  </div>
)

export default function RestaurantWebsite() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [heroAnimated, setHeroAnimated] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
      setShowScrollTop(scrollPosition > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 2) // 2 sets of 3 testimonials
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Trigger hero animation on page load
    const timer = setTimeout(() => {
      setHeroAnimated(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      quote: "The flavors here are absolutely incredible! Every dish tells a story and the presentation is beautiful.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      quote: "I've been coming here for years and the quality never disappoints. The staff is amazing too!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Newlywed",
      quote: "We had our anniversary dinner here and it was perfect. The ambiance and food made it unforgettable.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Business Owner",
      quote: "The corporate lunch service is exceptional. Professional, delicious, and always on time.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Health Conscious",
      quote: "Finally, a restaurant that serves healthy meals without compromising on taste. Love it!",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "James Rodriguez",
      role: "Chef",
      quote: "As a fellow chef, I appreciate the attention to detail and quality ingredients used here.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonial * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#8ec43e] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-white font-bold text-2xl">
              aahar
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-orange-300 transition-colors">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-white hover:text-orange-300 transition-colors">
                  Pages <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/menu">Menu</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/chef">Our Chef</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services">Services</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/about-us" className="text-white hover:text-orange-300 transition-colors">
                About Us
              </Link>
            </div>

            {/* Contact Button and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Link href="/contact-us">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contact Us</Button>
              </Link>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#8ec43e] border-t border-white border-opacity-20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-white hover:text-orange-300">
              Home
            </Link>
            <Link href="/menu" className="block px-3 py-2 text-white hover:text-orange-300">
              Menu
            </Link>
            <Link href="/chef" className="block px-3 py-2 text-white hover:text-orange-300">
              Our Chef
            </Link>
            <Link href="/services" className="block px-3 py-2 text-white hover:text-orange-300">
              Services
            </Link>
            <Link href="/about-us" className="block px-3 py-2 text-white hover:text-orange-300">
              About Us
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Restaurant background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex justify-start">
            <div
              className={`max-w-2xl ml-12 transform transition-all duration-1000 ease-out ${
                heroAnimated ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6 leading-tight">
                WHERE INGREDIENTS TELL A STORY!
              </h1>
              <p className="text-xl text-white mb-8">From our kitchen to your table.</p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Chef cooking"
                width={250}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Kitchen action"
                width={250}
                height={300}
                className="rounded-lg object-cover mt-8"
              />
            </div>
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">About Us</h2>
                  <div className="h-1 w-16 bg-orange-500"></div>
                </div>
                <p className="text-gray-600 max-w-2xl text-left mb-6">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Personal Journey
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Training & Experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Passion & Philosophy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Achievements & Recognition
                  </li>
                </ul>
                <Link href="/about-us">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Us"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fresh Ingredients", icon: "🥬" },
              { title: "Healthy Meals", icon: "🥗" },
              { title: "Mediterranean Taste", icon: "🍅" },
              { title: "Eating Well", icon: "🍽️" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">
                    It is a long established fact that a reader will be distracted to.
                  </p>
                  <Button variant="link" className="text-orange-500 hover:text-orange-400 p-0">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Private Chef Experience", icon: "👨‍🍳" },
              { title: "Event Catering", icon: "🎉" },
              { title: "Tasting Menus", icon: "🍷" },
              { title: "Cooking Classes", icon: "📚" },
              { title: "Healthy Meal Prep", icon: "🥙" },
              { title: "Sommelier Services", icon: "🍾" },
              { title: "Dining Experiences", icon: "🍽️" },
              { title: "Corporate Lunches", icon: "💼" },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Professional service with attention to detail and quality.
                  </p>
                  <Link href="/services">
                    <Button variant="link" className="text-orange-500 hover:text-orange-600 p-0">
                      Read More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div className="ml-8">
              <div className="flex items-center mb-4">
                <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Delicious Menu</h2>
                <div className="h-1 w-16 bg-orange-500"></div>
              </div>
              <p className="text-gray-600 max-w-2xl text-left">
                Discover our carefully crafted dishes made with the finest ingredients and traditional techniques.
              </p>
            </div>
            <Link href="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">View More</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Grand Platter",
                description:
                  "A magnificent selection of our finest dishes, perfectly arranged to showcase the diversity of flavors and textures.",
                image: "grand+platter+food+restaurant", // Image #16
              },
              {
                name: "Fusion Bowl",
                description:
                  "An innovative blend of traditional and modern cooking techniques, creating a harmonious fusion of flavors.",
                image: "fusion+bowl+healthy+food", // Image #17
              },
              {
                name: "Seafood Platter",
                description:
                  "Fresh catch of the day, expertly prepared with Mediterranean herbs and served with seasonal vegetables.",
                image: "seafood+platter+fresh+fish", // Image #18
              },
              {
                name: "Baked Pears",
                description:
                  "Delicately baked pears with aromatic spices, served warm with a touch of honey and crushed nuts.",
                image: "baked+pears+dessert+elegant", // Image #19
              },
              {
                name: "Grilled Chicken",
                description:
                  "Perfectly grilled chicken breast with herbs and seasonal vegetables, served with our signature sauce.",
                image: "grilled+chicken+herbs+healthy", // Image #20
              },
              {
                name: "Pasta Primavera",
                description:
                  "Fresh pasta with seasonal vegetables in a light cream sauce, topped with parmesan cheese.",
                image: "pasta+primavera+vegetables+fresh", // Image #21
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={`/placeholder.svg?height=300&width=400&query=${item.image}`}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <div className="ml-8">
              <div className="flex items-center mb-4">
                <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Meet Our Chef</h2>
                <div className="h-1 w-16 bg-orange-500"></div>
              </div>
              <p className="text-gray-600 max-w-2xl text-left">
                Our talented team of culinary experts brings years of experience and passion to every dish.
              </p>
            </div>
            <Link href="/chef">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">View All Chefs</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Chef Marco", role: "Head Chef" },
              { name: "Chef Sarah", role: "Sous Chef" },
              { name: "Chef Antonio", role: "Pastry Chef" },
              { name: "Chef Maria", role: "Kitchen Manager" },
            ].map((chef, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=professional+chef+${chef.name.toLowerCase()}+portrait`}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className="w-full h-80 object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
                <p className="text-gray-600">{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Customer Say"
            subtitle="Hear what our valued customers have to say about their dining experience with us."
          />
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getCurrentTestimonials().map((testimonial) => (
              <Card key={testimonial.id} className="text-center">
                <CardContent className="p-8">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">aahar</h3>
              <p className="text-gray-300 mb-4">Where ingredients tell a story. From our kitchen to your table.</p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-300 hover:text-white">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-gray-300">info@aahar.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-gray-300">123 Food Street, City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Subscribe to get updates on our latest offers.</p>
              <div className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-300">© 2025 aahar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
