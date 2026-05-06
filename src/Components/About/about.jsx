import './about.css'

const About = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <p className="section-tag">About Us</p>
          <h2>
            Building trust through{' '}
            <span className="highlight">sustainable growth.</span>
          </h2>
          <p className="about-desc">
            We provide small businesses with the digital tools they need
            to compete in a fast-paced market. By focusing on clean design
            and high-performance code, we ensure your brand stands out.
          </p>
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
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Work With Us
          </button>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
            alt="Team"
          />
          <div className="about-badge">
            <p className="badge-title">Empowering local businesses</p>
            <p className="badge-sub highlight">Verified Growth Partner 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About