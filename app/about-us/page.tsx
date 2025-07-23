"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, ArrowUp } from "lucide-react"
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

export default function AboutUsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
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

            {/* Desktop Navigation Links */}
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
        </div>
      </nav>

      {/* Hero/About Us Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="About Us banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">ABOUT US</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-100 to-green-50 rounded-full opacity-40 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-300 rounded-full opacity-70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative">
              <div className="space-y-8">
                {/* Orange line and subheading with enhanced styling */}
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                    <div className="h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-orange-500 font-bold uppercase text-sm tracking-widest mb-2 relative">
                    OUR STORY
                    <span className="absolute -bottom-1 left-0 w-16 h-0.5 bg-orange-200 rounded-full"></span>
                  </p>
                </div>

                {/* Main heading with enhanced typography */}
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight relative">
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    aahar
                  </span>{" "}
                  & What We Create
                  {/* Decorative underline */}
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                </h2>

                {/* Enhanced description with better spacing */}
                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-orange-400 rounded-full"></div>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      Aahar is a premier restaurant dedicated to transforming the{" "}
                      <span className="text-orange-600 font-semibold">freshest ingredients</span> into memorable meals.
                      With decades of experience, we create exceptional dishes that stand the test of time.
                    </p>
                  </div>

                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      Our passion for <span className="text-orange-600 font-semibold">culinary excellence</span> drives
                      us to source the finest ingredients and employ traditional techniques combined with modern
                      innovation to deliver an unforgettable dining experience.
                    </p>
                  </div>
                </div>

                {/* Stats or highlights */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-orange-100">
                    <div className="text-2xl font-bold text-orange-500 mb-1">25+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-green-100">
                    <div className="text-2xl font-bold text-green-500 mb-1">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-orange-100">
                    <div className="text-2xl font-bold text-orange-500 mb-1">50+</div>
                    <div className="text-sm text-gray-600 font-medium">Signature Dishes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image with enhanced styling */}
            <div className="relative">
              {/* Main image container with multiple layers */}
              <div className="relative">
                {/* Background decorative shapes */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl opacity-30 rotate-3"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tl from-green-200 to-green-100 rounded-2xl opacity-40 -rotate-2"></div>

                {/* Main image */}
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="About aahar"
                    width={600}
                    height={500}
                    className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Image overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Fresh Daily</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements around the image */}
                <div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-80 animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-70 animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "4s" }}
                ></div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-60 animate-pulse"></div>
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

      {/* Meet Our Chef Section */}
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
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
