"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isHomePage = pathname === "/";
  const isServicesPage = pathname === "/services";
  const isOverlayMode = (isHomePage || isServicesPage) && !isScrolled;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      id="navbar"
      className={`top-0 w-full z-50 transition-all duration-300 ${
        isOverlayMode
          ? "absolute" // overlay on top of hero when at top of page
          : "fixed shadow-md" // fixed with shadow for other states
      } ${
        isOverlayMode
          ? "bg-black/50 backdrop-blur-md" // transparent overlay look
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-21">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/icons/Ahar_Logo.svg"
              alt="ahar logo"
              width={0}
              height={0}
              className="h-13 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-xl transition-colors hover:text-[#c68c2e] ${
                  isHomePage || isServicesPage
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X
                className={`h-7 w-7 ${
                  isHomePage || isServicesPage
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`}
              />
            ) : (
              <Menu
                className={`h-7 w-7 ${
                  isHomePage || isServicesPage
                    ? isScrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t absolute left-0 right-0 top-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-black font-medium text-xl hover:text-[#c68c2e]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
