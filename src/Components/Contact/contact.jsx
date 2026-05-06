import { useState } from 'react'
import './Contact.css'

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
        <h2 className="center">
          Contact <span className="highlight">Us</span>
        </h2>
        <p className="contact-sub center">
          Have a project in mind? We'd love to hear from you.
        </p>
        {sent && (
          <div className="success-msg">
            ✅ Message sent! We'll get back to you soon.
          </div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="btn-primary full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact