import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <div className="nav-logo">
          <span className="logo-icon">📱</span>
          <span className="logo-text">SmallBiz</span>
        </div>
        <p>Empowering small businesses with clean, high-performance digital experiences. Built for growth, designed for trust.</p>
      </div>
      <div className="footer-links">
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 SmallBiz. All rights reserved.</p>
      <p>Made with ❤️ for modern businesses.</p>
    </div>
  </footer>
)

export default Footer