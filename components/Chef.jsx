"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import "./Chef.css"

const Chef = () => {
  const [hoveredChef, setHoveredChef] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const chefs = [
    {
      id: 1,
      name: "Chef Marco Rodriguez",
      role: "Head Chef",
      image: "https://via.placeholder.com/300x350?text=Chef+Marco",
    },
    {
      id: 2,
      name: "Chef Sarah Williams",
      role: "Sous Chef",
      image: "https://via.placeholder.com/300x350?text=Chef+Sarah",
    },
    {
      id: 3,
      name: "Chef Antonio Rossi",
      role: "Pastry Chef",
      image: "https://via.placeholder.com/300x350?text=Chef+Antonio",
    },
    {
      id: 4,
      name: "Chef Maria Garcia",
      role: "Kitchen Manager",
      image: "https://via.placeholder.com/300x350?text=Chef+Maria",
    },
    {
      id: 5,
      name: "Chef David Chen",
      role: "Grill Master",
      image: "https://via.placeholder.com/300x350?text=Chef+David",
    },
    {
      id: 6,
      name: "Chef Emma Thompson",
      role: "Salad Chef",
      image: "https://via.placeholder.com/300x350?text=Chef+Emma",
    },
    {
      id: 7,
      name: "Chef James Wilson",
      role: "Seafood Specialist",
      image: "https://via.placeholder.com/300x350?text=Chef+James",
    },
    {
      id: 8,
      name: "Chef Lisa Anderson",
      role: "Dessert Chef",
      image: "https://via.placeholder.com/300x350?text=Chef+Lisa",
    },
  ]

  return (
    <div className="chef-page">
      <Navbar />

      <section className="hero-banner">
        <div className="hero-image">
          <img src="https://via.placeholder.com/1920x600?text=Chef+Banner" alt="Chef banner" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">CHEF</h1>
        </div>
      </section>

      <section className="chef-team">
        <div className="container">
          <div className="section-heading">
            <div className="heading-container">
              <h2 className="section-title">Our Chef</h2>
              <div className="orange-line"></div>
            </div>
            <p className="section-subtitle">
              Meet our talented team of culinary experts who bring years of experience and passion to every dish.
            </p>
          </div>
          <div className="chefs-grid">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="chef-card"
                onMouseEnter={() => setHoveredChef(chef.id)}
                onMouseLeave={() => setHoveredChef(null)}
              >
                <div className="chef-image-container">
                  <img src={chef.image || "/placeholder.svg"} alt={chef.name} className="chef-image" />
                  <div className={`chef-overlay ${hoveredChef === chef.id ? "visible" : ""}`}>
                    <h3 className="chef-name">{chef.name}</h3>
                    <p className="chef-role">{chef.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="chef-collage">
        <div className="container">
          <div className="collage-container">
            <div className="desktop-collage">
              <div className="collage-wrapper">
                <div className="main-image">
                  <img src="https://via.placeholder.com/380x380?text=Main+Kitchen" alt="Main kitchen view" />
                </div>
                <div className="top-right-image">
                  <img src="https://via.placeholder.com/250x180?text=Chef+Preparing" alt="Chef preparing dish" />
                </div>
                <div className="bottom-right-image">
                  <img src="https://via.placeholder.com/250x180?text=Fresh+Ingredients" alt="Fresh ingredients" />
                </div>
                <div className="bottom-left-image">
                  <img src="https://via.placeholder.com/180x140?text=Cooking+Process" alt="Cooking process" />
                </div>
                <div className="bottom-center-image">
                  <img src="https://via.placeholder.com/180x140?text=Plated+Dish" alt="Plated dish" />
                </div>
                <div className="new-bottom-right-image">
                  <img src="https://via.placeholder.com/250x140?text=Kitchen+Detail" alt="Kitchen detail" />
                </div>
              </div>
            </div>

            <div className="mobile-collage">
              <div className="mobile-image">
                <img src="https://via.placeholder.com/380x380?text=Main+Kitchen" alt="Main kitchen view" />
              </div>
              <div className="mobile-image">
                <img src="https://via.placeholder.com/250x180?text=Chef+Preparing" alt="Chef preparing dish" />
              </div>
              <div className="mobile-image">
                <img src="https://via.placeholder.com/250x180?text=Fresh+Ingredients" alt="Fresh ingredients" />
              </div>
              <div className="mobile-images-row">
                <div className="mobile-image-small">
                  <img src="https://via.placeholder.com/180x140?text=Cooking+Process" alt="Cooking process" />
                </div>
                <div className="mobile-image-small">
                  <img src="https://via.placeholder.com/180x140?text=Plated+Dish" alt="Plated dish" />
                </div>
              </div>
              <div className="mobile-image">
                <img src="https://via.placeholder.com/250x140?text=Kitchen+Detail" alt="Kitchen detail" />
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

export default Chef
