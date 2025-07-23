"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import "./Services.css"

const Services = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
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
    <div className="services-page">
      <Navbar />

      <section className="hero-banner">
        <div className="hero-image">
          <img src="https://via.placeholder.com/1920x600?text=Services+Banner" alt="Services banner" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">SERVICES</h1>
        </div>
      </section>

      <section className="our-services">
        <div className="container">
          <div className="section-heading">
            <div className="heading-container">
              <h2 className="section-title">Our Services</h2>
              <div className="orange-line"></div>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-heading">
            <div className="heading-container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="orange-line"></div>
            </div>
            <p className="section-subtitle">
              Find answers to common questions about our services and how we can help make your event memorable.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-image">
              <img src="https://via.placeholder.com/600x500?text=Chef+Preparing+Food" alt="Chef preparing food" />
            </div>

            <div className="faq-questions">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-question" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                    <span>{faq.question}</span>
                    <span className={`faq-arrow ${openFAQ === index ? "open" : ""}`}>▶</span>
                  </button>
                  {openFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Services
