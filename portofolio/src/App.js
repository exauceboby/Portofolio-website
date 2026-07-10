import Navbar from './components/Navbar/Navbar'
import './App.css'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Works from './components/Works/Works'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { themeContext } from './Context'
import { useContext } from 'react'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <Navbar />
      <main>
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
