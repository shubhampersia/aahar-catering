"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

export default function ContactUsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
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

      {/* Hero/Contact Us Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Contact Us banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">CONTACT US</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f7f8fa]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Contact Us</h2>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <p className="text-gray-600 text-lg">Ready to start your dream project? Get in touch with us today</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto lg:items-start">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <Input id="name" type="text" placeholder="Your Name" required className="w-full rounded-lg" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone (Optional)
                      </label>
                      <Input id="phone" type="tel" placeholder="Your Phone" className="w-full rounded-lg" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your Email" required className="w-full rounded-lg" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="w-full resize-none rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#ff8000] hover:bg-[#e6720a] text-white py-3 text-lg font-semibold rounded-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-3">
              <Card className="shadow-lg border-0 border-none">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Get in Touch</h3>

                  <div className="space-y-3">
                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-[#ff8000]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-0.5">Phone</h4>
                        <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-[#ff8000]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-0.5">Email</h4>
                        <p className="text-gray-600 text-sm">info@bricksbywall.com</p>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-[#ff8000]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-800 mb-0.5">Address</h4>
                        <p className="text-gray-600 text-sm">123 Construction Ave, Builder City, BC 12345</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Office Hours</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Monday - Friday:</span>
                      <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Saturday:</span>
                      <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-700">Sunday:</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                  <span className="text-gray-300">123 Food Street, NY</span>
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
