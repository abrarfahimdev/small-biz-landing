import { useState, useEffect } from 'react'
import './App.css'

// ── NAVBAR ─────────────────────────────────────────
const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
  <div className="nav-logo">
    <span className="logo-icon">📱</span>
    <span className="logo-text">SmallBiz</span>
  </div>
  <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
    <button onClick={() => scrollTo('about')}>About</button>
    <button onClick={() => scrollTo('services')}>Services</button>
    <button onClick={() => scrollTo('contact')}>Contact</button>
    <button className="nav-cta" onClick={() => scrollTo('contact')}>Get Started</button>
  </div>
  <div className="nav-actions">
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? '✕' : '☰'}
    </button>
  </div>
</div>
    </nav>
  )
}

// ── HERO ───────────────────────────────────────────
const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🚀 Trusted by 500+ businesses</div>
        <h1>Modern Solutions for Your <span className="highlight">Growing Business</span></h1>
        <p>We help small businesses scale with professional digital tools and streamlined workflows.</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>Get Started</button>
          <button className="btn-secondary" onClick={() => scrollTo('about')}>Learn more →</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>500+</span><p>Clients</p></div>
          <div className="stat-divider" />
          <div className="stat"><span>98%</span><p>Satisfaction</p></div>
          <div className="stat-divider" />
          <div className="stat"><span>5★</span><p>Rating</p></div>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-wrapper">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team" />
          <div className="hero-badge-float">
            <span>⚡</span>
            <div>
              <p className="badge-title">Fast Delivery</p>
              <p className="badge-sub">Projects on time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── ABOUT ──────────────────────────────────────────
const About = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <p className="section-tag">About Us</p>
          <h2>Building trust through <span className="highlight">sustainable growth.</span></h2>
          <p className="about-desc">We provide small businesses with the digital tools they need to compete in a fast-paced market. By focusing on clean design and high-performance code, we ensure your brand stands out.</p>
          <div className="about-points">
            <div className="point">
              <span className="point-icon">🎯</span>
              <div>
                <h4>Reliability First</h4>
                <p>Stable, scalable solutions your customers can depend on every day.</p>
              </div>
            </div>
            <div className="point">
              <span className="point-icon">📈</span>
              <div>
                <h4>Goal Oriented</h4>
                <p>Every design choice is made to drive your business objectives.</p>
              </div>
            </div>
          </div>
          <button className="btn-primary" onClick={() => scrollTo('contact')}>Work With Us</button>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Team" />
          <div className="about-badge">
            <p className="badge-title">Empowering local businesses</p>
            <p className="badge-sub highlight">Verified Growth Partner 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── SERVICES ───────────────────────────────────────
const services = [
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80', title: 'Digital Strategy', desc: 'Planning your online growth path with data-driven insights and market analysis.', icon: '📊' },
  { img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80', title: 'UI/UX Design', desc: 'Crafting interfaces that users love through modern design principles.', icon: '🎨' },
  { img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80', title: 'Web Development', desc: 'High-performance, responsive websites built with the latest React technologies.', icon: '💻' }
]

const Services = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="services" id="services">
      <div className="services-container">
        <p className="section-tag center">What We Offer</p>
        <h2 className="center">Tailored Solutions for <span className="highlight">Your Business</span></h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-img"><img src={s.img} alt={s.title} /></div>
              <div className="service-body">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button className="learn-more" onClick={() => scrollTo('contact')}>Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CONTACT ────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="section-tag center">Get In Touch</p>
        <h2 className="center">Contact <span className="highlight">Us</span></h2>
        <p className="contact-sub center">Have a project in mind? We'd love to hear from you.</p>
        {sent && <div className="success-msg">✅ Message sent! We'll get back to you soon.</div>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
          <button type="submit" className="btn-primary full">Send Message</button>
        </form>
      </div>
    </section>
  )
}

// ── FOOTER ─────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <div className="nav-logo">
          <span className="logo-icon">📱</span>
          <span className="logo-text">SmallBiz</span>
        </div>
        <p>Empowering small businesses with clean, high-performance digital experiences.</p>
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

// ── MAIN APP ───────────────────────────────────────
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App