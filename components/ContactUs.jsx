"use client"

import { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import "./ContactUs.css"

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="contact-us-page">
      <Navbar />

      <section className="hero-banner">
        <div className="hero-image">
          <img src="https://via.placeholder.com/1920x600?text=Contact+Us+Banner" alt="Contact Us banner" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">CONTACT US</h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <div className="heading-container">
              <h2 className="section-title">Contact Us</h2>
              <div className="orange-line"></div>
            </div>
            <p className="section-subtitle">Ready to start your dream project? Get in touch with us today</p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-card">
              <div className="form-content">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input id="phone" type="tel" placeholder="Your Phone" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Your Email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Tell us about your project..." rows={6} required />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-card">
                <div className="card-content">
                  <h3 className="card-title">Get in Touch</h3>

                  <div className="contact-items">
                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <span className="contact-icon">📞</span>
                      </div>
                      <div className="contact-details">
                        <h4 className="contact-label">Phone</h4>
                        <p className="contact-value">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <span className="contact-icon">✉️</span>
                      </div>
                      <div className="contact-details">
                        <h4 className="contact-label">Email</h4>
                        <p className="contact-value">info@bricksbywall.com</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon-wrapper">
                        <span className="contact-icon">📍</span>
                      </div>
                      <div className="contact-details">
                        <h4 className="contact-label">Address</h4>
                        <p className="contact-value">123 Construction Ave, Builder City, BC 12345</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="office-hours-card">
                <div className="card-content">
                  <h3 className="card-title">Office Hours</h3>

                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Monday - Friday:</span>
                      <span className="time">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Saturday:</span>
                      <span className="time">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Sunday:</span>
                      <span className="time">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default ContactUs
