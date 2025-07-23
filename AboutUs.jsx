"use client"

import { useState, useEffect } from "react"
import "./AboutUs.css"

const SectionHeading = ({ title, subtitle }) => (
  <div className="section-heading">
    <div className="heading-container">
      <h2 className="section-title">{title}</h2>
      <div className="orange-line"></div>
    </div>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
)

const AboutUs = () => {
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
      image: "https://via.placeholder.com/80x80",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Regular Customer",
      quote: "I've been coming here for years and the quality never disappoints. The staff is amazing too!",
      image: "https://via.placeholder.com/80x80",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Newlywed",
      quote: "We had our anniversary dinner here and it was perfect. The ambiance and food made it unforgettable.",
      image: "https://via.placeholder.com/80x80",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Business Owner",
      quote: "The corporate lunch service is exceptional. Professional, delicious, and always on time.",
      image: "https://via.placeholder.com/80x80",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Health Conscious",
      quote: "Finally, a restaurant that serves healthy meals without compromising on taste. Love it!",
      image: "https://via.placeholder.com/80x80",
    },
    {
      id: 6,
      name: "James Rodriguez",
      role: "Chef",
      quote: "As a fellow chef, I appreciate the attention to detail and quality ingredients used here.",
      image: "https://via.placeholder.com/80x80",
    },
  ]

  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonial * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="about-us-page">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <a href="/" className="logo">
              aahar
            </a>

            {/* Desktop Navigation Links */}
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
              <a href="/about-us" className="nav-link active">
                About Us
              </a>
            </div>

            {/* Contact Button and Mobile Menu Button */}
            <div className="nav-actions">
              <a href="/contact-us">
                <button className="contact-btn">Contact Us</button>
              </a>

              {/* Mobile Menu Button */}
              <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
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

      {/* Hero/About Us Banner */}
      <section className="hero-banner">
        <div className="hero-image">
          <img src="https://via.placeholder.com/1920x600" alt="About Us banner" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="our-story-section">
        {/* Background decorative elements */}
        <div className="bg-decoration bg-decoration-1"></div>
        <div className="bg-decoration bg-decoration-2"></div>
        <div className="bg-dot bg-dot-1"></div>
        <div className="bg-dot bg-dot-2"></div>
        <div className="bg-dot bg-dot-3"></div>

        <div className="container">
          <div className="story-grid">
            {/* Left Content */}
            <div className="story-content">
              <div className="content-wrapper">
                {/* Orange line and subheading with enhanced styling */}
                <div className="story-header">
                  <div className="header-decoration">
                    <div className="orange-gradient-line"></div>
                    <div className="pulse-dot"></div>
                  </div>
                  <p className="story-subtitle">
                    OUR STORY
                    <span className="subtitle-underline"></span>
                  </p>
                </div>

                {/* Main heading with enhanced typography */}
                <h2 className="story-title">
                  About <span className="gradient-text">aahar</span> & What We Create
                  <div className="title-underline"></div>
                </h2>

                {/* Enhanced description with better spacing */}
                <div className="story-description">
                  <div className="description-item">
                    <div className="description-dot orange-dot"></div>
                    <p className="description-text">
                      Aahar is a premier restaurant dedicated to transforming the{" "}
                      <span className="highlight">freshest ingredients</span> into memorable meals. With decades of
                      experience, we create exceptional dishes that stand the test of time.
                    </p>
                  </div>

                  <div className="description-item">
                    <div className="description-dot green-dot"></div>
                    <p className="description-text">
                      Our passion for <span className="highlight">culinary excellence</span> drives us to source the
                      finest ingredients and employ traditional techniques combined with modern innovation to deliver an
                      unforgettable dining experience.
                    </p>
                  </div>
                </div>

                {/* Stats or highlights */}
                <div className="stats-grid">
                  <div className="stat-card orange-border">
                    <div className="stat-number orange-text">25+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-card green-border">
                    <div className="stat-number green-text">500+</div>
                    <div className="stat-label">Happy Customers</div>
                  </div>
                  <div className="stat-card orange-border">
                    <div className="stat-number orange-text">50+</div>
                    <div className="stat-label">Signature Dishes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image with enhanced styling */}
            <div className="story-image-container">
              <div className="image-wrapper">
                {/* Background decorative shapes */}
                <div className="image-bg image-bg-1"></div>
                <div className="image-bg image-bg-2"></div>

                {/* Main image */}
                <div className="main-image-container">
                  <img src="https://via.placeholder.com/600x500" alt="About aahar" className="main-image" />
                  <div className="image-overlay"></div>

                  {/* Floating badge */}
                  <div className="floating-badge">
                    <div className="badge-content">
                      <div className="badge-dot"></div>
                      <span className="badge-text">Fresh Daily</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements around the image */}
                <div className="floating-element floating-element-1"></div>
                <div className="floating-element floating-element-2"></div>
                <div className="floating-element floating-element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <SectionHeading
            title="Why Choose Us"
            subtitle="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <div className="features-grid">
            {[
              { title: "Fresh Ingredients", icon: "🥬" },
              { title: "Healthy Meals", icon: "🥗" },
              { title: "Mediterranean Taste", icon: "🍅" },
              { title: "Eating Well", icon: "🍽️" },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-content">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">
                    It is a long established fact that a reader will be distracted to.
                  </p>
                  <button className="feature-link">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chef Section */}
      <section className="meet-chef">
        <div className="container">
          <div className="chef-header">
            <div className="chef-heading">
              <div className="heading-container">
                <h2 className="section-title">Meet Our Chef</h2>
                <div className="orange-line"></div>
              </div>
              <p className="chef-subtitle">
                Our talented team of culinary experts brings years of experience and passion to every dish.
              </p>
            </div>
            <a href="/chef">
              <button className="view-all-btn">View All Chefs</button>
            </a>
          </div>
          <div className="chefs-grid">
            {[
              { name: "Chef Marco", role: "Head Chef" },
              { name: "Chef Sarah", role: "Sous Chef" },
              { name: "Chef Antonio", role: "Pastry Chef" },
              { name: "Chef Maria", role: "Kitchen Manager" },
            ].map((chef, index) => (
              <div key={index} className="chef-card">
                <img
                  src={`https://via.placeholder.com/300x300?text=${chef.name}`}
                  alt={chef.name}
                  className="chef-image"
                />
                <h3 className="chef-name">{chef.name}</h3>
                <p className="chef-role">{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <SectionHeading
            title="Customer Say"
            subtitle="Hear what our valued customers have to say about their dining experience with us."
          />
          <div className="testimonials-grid">
            {getCurrentTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`dot ${currentTestimonial === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-title">aahar</h3>
              <p className="footer-description">Where ingredients tell a story. From our kitchen to your table.</p>
              <div className="social-links">
                <span className="social-icon">📘</span>
                <span className="social-icon">🐦</span>
                <span className="social-icon">📷</span>
                <span className="social-icon">📺</span>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/menu">Menu</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@aahar.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Food Street, City</span>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="newsletter-text">Subscribe to get updates on our latest offers.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 aahar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑
      </button>
    </div>
  )
}

export default AboutUs
