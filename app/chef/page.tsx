"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

export default function ChefPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredChef, setHoveredChef] = useState<number | null>(null)

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

  const chefs = [
    { id: 1, name: "Chef Marco Rodriguez", role: "Head Chef", image: "/placeholder.svg?height=350&width=300" }, // Image #22
    { id: 2, name: "Chef Sarah Williams", role: "Sous Chef", image: "/placeholder.svg?height=350&width=300" }, // Image #23
    { id: 3, name: "Chef Antonio Rossi", role: "Pastry Chef", image: "/placeholder.svg?height=350&width=300" }, // Image #24
    { id: 4, name: "Chef Maria Garcia", role: "Kitchen Manager", image: "/placeholder.svg?height=350&width=300" }, // Image #25
    { id: 5, name: "Chef David Chen", role: "Grill Master", image: "/placeholder.svg?height=350&width=300" }, // Image #26
    { id: 6, name: "Chef Emma Thompson", role: "Salad Chef", image: "/placeholder.svg?height=350&width=300" }, // Image #27
    { id: 7, name: "Chef James Wilson", role: "Seafood Specialist", image: "/placeholder.svg?height=350&width=300" }, // Image #28
    { id: 8, name: "Chef Lisa Anderson", role: "Dessert Chef", image: "/placeholder.svg?height=350&width=300" }, // Image #29
  ]

  const collageImages = [
    { id: 1, src: "/placeholder.svg?height=400&width=400", alt: "Main kitchen view", size: "large" }, // Image #30 - Large image
    { id: 2, src: "/placeholder.svg?height=190&width=280", alt: "Chef preparing dish", size: "small-top" }, // Image #31 - Top right small
    { id: 3, src: "/placeholder.svg?height=190&width=280", alt: "Fresh ingredients", size: "small-bottom-right" }, // Image #32 - Bottom right small
    { id: 4, src: "/placeholder.svg?height=180&width=190", alt: "Cooking process", size: "small-bottom-left" }, // Image #33 - Bottom left small
    { id: 5, src: "/placeholder.svg?height=180&width=190", alt: "Plated dish", size: "small-bottom-center" }, // Image #34 - Bottom center small
    { id: 6, src: "/placeholder.svg?height=180&width=190", alt: "Kitchen detail", size: "small-bottom-right" }, // Image #35 - New bottom right image
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
                <a href="#about" className="block px-3 py-2 text-white hover:text-orange-300">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero/Chef Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920" // Image #36
            alt="Chef banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">CHEF</h1>
        </div>
      </section>

      {/* Chef Team Section */}
      <section className="py-16 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 ml-8">
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Our Chef</h2>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <p className="text-gray-600 max-w-2xl text-left">
              Meet our talented team of culinary experts who bring years of experience and passion to every dish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredChef(chef.id)}
                onMouseLeave={() => setHoveredChef(null)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={chef.image || "/placeholder.svg"}
                    alt={chef.name}
                    width={300}
                    height={350}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 transform transition-all duration-300 ${
                      hoveredChef === chef.id ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                  >
                    <h3 className="text-lg font-semibold">{chef.name}</h3>
                    <p className="text-sm text-gray-300">{chef.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Collage Section */}
      <section className="py-8 pb-12 bg-[#f7f8fa]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[550px]">
            {/* Desktop/Tablet Layout */}
            <div className="hidden md:block relative">
              {/* Container for the entire collage - centered */}
              <div className="relative w-[650px] h-[500px] mx-auto">
                {/* Large square image (left side) - made bigger */}
                <div className="absolute top-0 left-0 w-[380px] h-[380px] z-10">
                  <Image
                    src="/placeholder.svg?height=380&width=380"
                    alt="Main kitchen view"
                    width={380}
                    height={380}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Top right rectangle - made bigger */}
                <div className="absolute top-0 left-[400px] w-[250px] h-[180px] z-20">
                  <Image
                    src="/placeholder.svg?height=180&width=250"
                    alt="Chef preparing dish"
                    width={250}
                    height={180}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Bottom right rectangle - made bigger and repositioned */}
                <div className="absolute top-[200px] left-[400px] w-[250px] h-[180px] z-20">
                  <Image
                    src="/placeholder.svg?height=180&width=250"
                    alt="Fresh ingredients"
                    width={250}
                    height={180}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Bottom left small square - made bigger */}
                <div className="absolute top-[400px] left-0 w-[180px] h-[140px] z-30">
                  <Image
                    src="/placeholder.svg?height=140&width=180"
                    alt="Cooking process"
                    width={180}
                    height={140}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Bottom center small square - made bigger */}
                <div className="absolute top-[400px] left-[200px] w-[180px] h-[140px] z-30">
                  <Image
                    src="/placeholder.svg?height=140&width=180"
                    alt="Plated dish"
                    width={180}
                    height={140}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* NEW: Bottom right small square */}
                <div className="absolute top-[400px] left-[400px] w-[250px] h-[140px] z-30">
                  <Image
                    src="/placeholder.svg?height=140&width=250"
                    alt="Kitchen detail"
                    width={250}
                    height={140}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked vertically and centered */}
            <div className="md:hidden w-full max-w-sm mx-auto space-y-4">
              {/* Large image */}
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=380&width=380"
                  alt="Main kitchen view"
                  width={380}
                  height={380}
                  className="w-full h-72 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Top right rectangle */}
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=180&width=250"
                  alt="Chef preparing dish"
                  width={250}
                  height={180}
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Bottom right rectangle */}
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=180&width=250"
                  alt="Fresh ingredients"
                  width={250}
                  height={180}
                  className="w-full h-40 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Bottom small squares - side by side on mobile */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Image
                    src="/placeholder.svg?height=140&width=180"
                    alt="Cooking process"
                    width={180}
                    height={140}
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=140&width=180"
                    alt="Plated dish"
                    width={180}
                    height={140}
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* New bottom right image */}
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=140&width=250"
                  alt="Kitchen detail"
                  width={250}
                  height={140}
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
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
