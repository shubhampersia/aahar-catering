"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import "./Home.css"

const SectionHeading = ({ title, subtitle }) => (
  <div className="section-heading">
    <div className="heading-container">
      <h2 className="section-title">{title}</h2>
      <div className="orange-line"></div>
    </div>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
)

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [heroAnimated, setHeroAnimated] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroAnimated(true)
    }, 500)
    return () => clearTimeout(timer)
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
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Restaurant background"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text-container">
            <div className={`hero-text ${heroAnimated ? "animated" : ""}`}>
              <h1 className="hero-title">WHERE INGREDIENTS TELL A STORY!</h1>
              <p className="hero-subtitle">From our kitchen to your table.</p>
              <button className="hero-btn">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80"
                alt="Chef cooking"
                className="about-img-1"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80"
                alt="Kitchen action"
                className="about-img-2"
              />
            </div>
            <div className="about-content">
              <div className="about-text">
                <div className="heading-container">
                  <h2 className="section-title">About Us</h2>
                  <div className="orange-line"></div>
                </div>
                <p className="about-description">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout.
                </p>
                <ul className="about-list">
                  <li>
                    <div className="bullet-point"></div>Personal Journey
                  </li>
                  <li>
                    <div className="bullet-point"></div>Training & Experience
                  </li>
                  <li>
                    <div className="bullet-point"></div>Passion & Philosophy
                  </li>
                  <li>
                    <div className="bullet-point"></div>Achievements & Recognition
                  </li>
                </ul>
                <a href="/about-us">
                  <button className="learn-more-btn">Learn More About Us</button>
                </a>
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

      {/* Our Services Section */}
      <section className="our-services">
        <div className="container">
          <SectionHeading title="Our Services" />
          <div className="services-grid">
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
              <div key={index} className="service-card">
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">Professional service with attention to detail and quality.</p>
                  <a href="/services">
                    <button className="service-link">Read More →</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <div className="menu-header">
            <div className="menu-heading">
              <div className="heading-container">
                <h2 className="section-title">Delicious Menu</h2>
                <div className="orange-line"></div>
              </div>
              <p className="menu-subtitle">
                Discover our carefully crafted dishes made with the finest ingredients and traditional techniques.
              </p>
            </div>
            <a href="/menu">
              <button className="view-more-btn">View More</button>
            </a>
          </div>
          <div className="menu-grid">
            {[
              {
                name: "Grand Platter",
                description:
                  "A magnificent selection of our finest dishes, perfectly arranged to showcase the diversity of flavors and textures.",
                image:
                  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Fusion Bowl",
                description:
                  "An innovative blend of traditional and modern cooking techniques, creating a harmonious fusion of flavors.",
                image:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Seafood Platter",
                description:
                  "Fresh catch of the day, expertly prepared with Mediterranean herbs and served with seasonal vegetables.",
                image:
                  "https://images.unsplash.com/photo-1559847844-d721426d6edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Baked Pears",
                description:
                  "Delicately baked pears with aromatic spices, served warm with a touch of honey and crushed nuts.",
                image:
                  "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Grilled Chicken",
                description:
                  "Perfectly grilled chicken breast with herbs and seasonal vegetables, served with our signature sauce.",
                image:
                  "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Pasta Primavera",
                description:
                  "Fresh pasta with seasonal vegetables in a light cream sauce, topped with parmesan cheese.",
                image:
                  "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="menu-image" />
                <div className="menu-card-content">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
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
              {
                name: "Chef Marco",
                role: "Head Chef",
                image:
                  "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Chef Sarah",
                role: "Sous Chef",
                image:
                  "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Chef Antonio",
                role: "Pastry Chef",
                image:
                  "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Chef Maria",
                role: "Kitchen Manager",
                image:
                  "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
            ].map((chef, index) => (
              <div key={index} className="chef-card">
                <img src={chef.image || "/placeholder.svg"} alt={chef.name} className="chef-image" />
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

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
