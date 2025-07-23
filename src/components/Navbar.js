"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          <a href="/" className="logo">
            aahar
          </a>

          <div className="nav-links desktop-nav">
            <a href="/" className="nav-link">
              Home
            </a>
            <div className="dropdown">
              <button className="nav-link dropdown-trigger">
                Pages <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-content">
                <a href="/menu">Menu</a>
                <a href="/chef">Our Chef</a>
                <a href="/services">Services</a>
              </div>
            </div>
            <a href="/about-us" className="nav-link">
              About Us
            </a>
          </div>

          <div className="nav-actions">
            <a href="/contact-us">
              <button className="contact-btn">Contact Us</button>
            </a>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              <a href="/" className="mobile-nav-link">
                Home
              </a>
              <a href="/menu" className="mobile-nav-link">
                Menu
              </a>
              <a href="/chef" className="mobile-nav-link">
                Our Chef
              </a>
              <a href="/services" className="mobile-nav-link">
                Services
              </a>
              <a href="/about-us" className="mobile-nav-link">
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
