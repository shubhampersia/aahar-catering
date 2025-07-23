import "./Footer.css"

const Footer = () => {
  return (
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
  )
}

export default Footer
