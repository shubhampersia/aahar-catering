"use client"

import { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"
import "./Menu.css"

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon",
      image: "https://via.placeholder.com/300x300?text=Grilled+Salmon",
    },
    {
      id: 2,
      name: "Beef Tenderloin",
      description: "Premium beef tenderloin with roasted vegetables and red wine sauce",
      image: "https://via.placeholder.com/300x300?text=Beef+Tenderloin",
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      description: "Traditional Italian carbonara with pancetta, eggs, and parmesan",
      image: "https://via.placeholder.com/300x300?text=Pasta+Carbonara",
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan",
      image: "https://via.placeholder.com/300x300?text=Caesar+Salad",
    },
    {
      id: 5,
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and truffle oil",
      image: "https://via.placeholder.com/300x300?text=Mushroom+Risotto",
    },
    {
      id: 6,
      name: "Lamb Chops",
      description: "Herb-crusted lamb chops with mint sauce and seasonal vegetables",
      image: "https://via.placeholder.com/300x300?text=Lamb+Chops",
    },
    {
      id: 7,
      name: "Lobster Thermidor",
      description: "Fresh lobster in rich cream sauce with cheese and herbs",
      image: "https://via.placeholder.com/300x300?text=Lobster+Thermidor",
    },
    {
      id: 8,
      name: "Duck Breast",
      description: "Pan-seared duck breast with cherry sauce and roasted potatoes",
      image: "https://via.placeholder.com/300x300?text=Duck+Breast",
    },
    {
      id: 9,
      name: "Vegetable Curry",
      description: "Aromatic mixed vegetable curry with basmati rice and naan",
      image: "https://via.placeholder.com/300x300?text=Vegetable+Curry",
    },
    {
      id: 10,
      name: "Fish Tacos",
      description: "Fresh fish tacos with avocado, salsa, and lime crema",
      image: "https://via.placeholder.com/300x300?text=Fish+Tacos",
    },
  ]

  return (
    <div className="menu-page">
      <Navbar />

      <section className="hero-banner">
        <div className="hero-image">
          <img src="https://via.placeholder.com/1920x600?text=Menu+Banner" alt="Menu banner" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">MENU</h1>
        </div>
      </section>

      <section className="menu-dishes">
        <div className="container">
          <div className="section-heading">
            <div className="heading-container">
              <h2 className="section-title">Our Menu</h2>
              <div className="orange-line"></div>
            </div>
            <p className="section-subtitle">
              Discover our carefully crafted dishes made with the finest ingredients and traditional techniques.
            </p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-card-content">
                  <div className="menu-image-container">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="menu-image" />
                  </div>
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Menu
