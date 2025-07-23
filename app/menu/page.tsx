"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

export default function MenuPage() {
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

  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon",
      image: "/placeholder.svg?height=300&width=300", // Image #1
    },
    {
      id: 2,
      name: "Beef Tenderloin",
      description: "Premium beef tenderloin with roasted vegetables and red wine sauce",
      image: "/placeholder.svg?height=300&width=300", // Image #2
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      description: "Traditional Italian carbonara with pancetta, eggs, and parmesan",
      image: "/placeholder.svg?height=300&width=300", // Image #3
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan",
      image: "/placeholder.svg?height=300&width=300", // Image #4
    },
    {
      id: 5,
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and truffle oil",
      image: "/placeholder.svg?height=300&width=300", // Image #5
    },
    {
      id: 6,
      name: "Lamb Chops",
      description: "Herb-crusted lamb chops with mint sauce and seasonal vegetables",
      image: "/placeholder.svg?height=300&width=300", // Image #6
    },
    {
      id: 7,
      name: "Lobster Thermidor",
      description: "Fresh lobster in rich cream sauce with cheese and herbs",
      image: "/placeholder.svg?height=300&width=300", // Image #7
    },
    {
      id: 8,
      name: "Duck Breast",
      description: "Pan-seared duck breast with cherry sauce and roasted potatoes",
      image: "/placeholder.svg?height=300&width=300", // Image #8
    },
    {
      id: 9,
      name: "Vegetable Curry",
      description: "Aromatic mixed vegetable curry with basmati rice and naan",
      image: "/placeholder.svg?height=300&width=300", // Image #9
    },
    {
      id: 10,
      name: "Fish Tacos",
      description: "Fresh fish tacos with avocado, salsa, and lime crema",
      image: "/placeholder.svg?height=300&width=300", // Image #10
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
                <a href="#about" className="block px-3 py-2 text-white hover:text-orange-300">
                  About Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero/Menu Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920" // Image #15
            alt="Menu banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4">MENU</h1>
        </div>
      </section>

      {/* Menu Dishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 ml-8">
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-bold text-orange-500 uppercase mr-4">Our Menu</h2>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <p className="text-gray-600 max-w-2xl text-left">
              Discover our carefully crafted dishes made with the finest ingredients and traditional techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <Card key={item.id} className="bg-[#f8fbf5] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
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
