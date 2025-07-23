"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 2)
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

  return (
    <div className="about-us-page">
      <Navbar />

      <section className="hero-banner">
        <div className="hero-image">
          <img src="https://via.placeholder.com/1920x600?text=About+Us+Banner" alt="About Us banner" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </section>

      <section className="our-story-section">
        <div className="bg-decoration bg-decoration-1"></div>
        <div className="bg-decoration bg-decoration-2"></div>
        <div className="bg-dot bg-dot-1"></div>
        <div className="bg-dot bg-dot-2"></div>
        <div className="bg-dot bg-dot-3"></div>

        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="content-wrapper">
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

                <h2 className="story-title">
                  About <span className="gradient-text">aahar</span> & What We Create
                  <div className="title-underline"></div>
                </h2>

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

            <div className="story-image-container">
              <div className="image-wrapper">
                <div className="image-bg image-bg-1"></div>
                <div className="image-bg image-bg-2"></div>

                <div className="main-image-container">
                  <img
                    src="https://via.placeholder.com/600x500?text=About+aahar"
                    alt="About aahar"
                    className="main-image"
                  />
                  <div className="image-overlay"></div>

                  <div className="floating-badge">
                    <div className="badge-content">
                      <div className="badge-dot"></div>
                      <span className="badge-text">Fresh Daily</span>
                    </div>
                  </div>
                </div>

                <div className="floating-element floating-element-1"></div>
                <div className="floating-element floating-element-2"></div>
                <div className="floating-element floating-element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default AboutUs
