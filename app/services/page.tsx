"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
  ArrowUp,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

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

  const services = [
    {
      title: "Private Chef Experience",
      icon: "👨‍🍳",
      description: "Professional service with attention to detail and quality.",
    },
    { title: "Event Catering", icon: "🎉", description: "Professional service with attention to detail and quality." },
    { title: "Tasting Menus", icon: "🍷", description: "Professional service with attention to detail and quality." },
    { title: "Cooking Classes", icon: "📚", description: "Professional service with attention to detail and quality." },
    {
      title: "Healthy Meal Prep",
      icon: "🥙",
      description: "Professional service with attention to detail and quality.",
    },
    {
      title: "Sommelier Services",
      icon: "🍾",
      description: "Professional service with attention to detail and quality.",
    },
    {
      title: "Dining Experiences",
      icon: "🍽️",
      description: "Professional service with attention to detail and quality.",
    },
    {
      title: "Corporate Lunches",
      icon: "💼",
      description: "Professional service with attention to detail and quality.",
    },
  ]

  const faqs = [
    {
      question: "What types of cuisine do you specialize in?",
      answer:
        "We specialize in a wide variety of cuisines including Mediterranean, Italian, French, Asian fusion, and contemporary American dishes. Our chefs are trained in multiple culinary traditions to provide diverse dining experiences.",
    },
    {
      question: "How far in advance should I book your services?",
      answer:
        "We recommend booking at least 2-3 weeks in advance for regular services and 4-6 weeks for special events or holidays. However, we do our best to accommodate last-minute requests when possible.",
    },
    {
      question: "Do you accommodate dietary restrictions and allergies?",
      answer:
        "We work closely with our clients to accommodate all dietary restrictions, food allergies, and special dietary needs including vegetarian, vegan, gluten-free, keto, and other specific requirements.",
    },
    {
      question: "What is included in your catering packages?",
      answer:
        "Our catering packages include menu planning, food preparation, professional presentation, serving staff (if requested), and cleanup. We also provide all necessary serving equipment and can arrange for additional services like bartending.",
    },
    {
      question: "Can you provide services for large corporate events?",
      answer:
        "Yes, we regularly cater corporate events for groups ranging from 20 to 500+ people. We offer customized menus, professional service staff, and can work within various budget requirements for corporate lunches, meetings, and special events.",
    },
    {
      question: "What are your pricing and payment terms?",
      answer:
        "Our pricing varies based on the type of service, number of guests, menu complexity, and additional services required. We provide detailed quotes after consultation. We typically require a 50% deposit to secure your date, with the balance due on the day of service.",
    },
  ]

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
              <a href="#about" className="text-white hover:text-orange-300 transition-colors">
                About Us
              </a>
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
                <a href="#about" className="block px-3 py-2 text-white hover:text-orange-300">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero/Services Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Services banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">SERVICES</h1>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 ml-8">
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Our Services</h2>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 ml-8">
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Frequently Asked Questions</h2>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <p className="text-gray-600 max-w-2xl text-left">
              Find answers to common questions about our services and how we can help make your event memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 md:order-1 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Chef preparing food"
                width={600}
                height={500}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - FAQ Questions */}
            <div className="order-1 md:order-2 space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible
                  key={index}
                  open={openFAQ === index}
                  onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <ChevronRight
                      className={`h-5 w-5 text-orange-500 transition-transform ${openFAQ === index ? "rotate-90" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
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
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
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
