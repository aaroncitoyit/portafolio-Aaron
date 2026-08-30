
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import About from './components/About'
import Experience from './components/Experience/Experience'
// import Contact from './components/Contact'
import GitHub from './components/Github'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <GitHub />
      {/* <Contact /> */}
      <Footer />

    </>
  );
}
export default App
