import './Hero.css'

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🚀 Trusted by 500+ businesses</div>
        <h1>
          Modern Solutions for Your{' '}
          <span className="highlight">Growing Business</span>
        </h1>
        <p>
          We help small businesses scale with professional digital
          tools and streamlined workflows.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('about')}>
            Learn more →
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span>500+</span>
            <p>Clients</p>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span>98%</span>
            <p>Satisfaction</p>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span>5★</span>
            <p>Rating</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            alt="Team working"
          />
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

export default Hero