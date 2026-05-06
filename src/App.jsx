import { useTheme } from './Hooks/useTheme.js'
import Navbar from './Components/Navbar/navbar.jsx'
import Hero from './Components/Hero/hero.jsx'
import About from './Components/About/about.jsx'
import Services from './Components/Services/services.jsx'
import Contact from './Components/Contact/contact.jsx'
import Footer from './Components/Footer/footer.jsx'
import './App.css'
function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app">
      <Navbar  theme={theme} toggleTheme={toggleTheme} ></Navbar>
      <Hero></Hero>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App