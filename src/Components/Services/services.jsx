import './Services.css'

const services = [
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    title: 'Digital Strategy',
    desc: 'Planning your online growth path with data-driven insights and market analysis.',
    icon: '📊'
  },
  {
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    title: 'UI/UX Design',
    desc: 'Crafting interfaces that users love through modern design principles.',
    icon: '🎨'
  },
  {
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80',
    title: 'Web Development',
    desc: 'High-performance, responsive websites built with the latest React technologies.',
    icon: '💻'
  }
]

const ServiceCard = ({ img, title, desc, icon }) => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="service-card">
      <div className="service-img">
        <img src={img} alt={title} />
      </div>
      <div className="service-body">
        <span className="service-icon">{icon}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className="learn-more" onClick={() => scrollTo('contact')}>
          Learn More →
        </button>
      </div>
    </div>
  )
}

const Services = () => (
  <section className="services" id="services">
    <div className="services-container">
      <p className="section-tag center">What We Offer</p>
      <h2 className="center">
        Tailored Solutions for{' '}
        <span className="highlight">Your Business</span>
      </h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </div>
  </section>
)

export default Services