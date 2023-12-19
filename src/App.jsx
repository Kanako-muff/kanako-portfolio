import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'


function App() {
  return (
    <>
      <Header />
        <Home />
        <div className='aboutSkills'>
          <About />
          <Skills />
        </div>
        <Work />
        <Contact />
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
