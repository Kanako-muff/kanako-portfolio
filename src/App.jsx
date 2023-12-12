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
// import Images from './components/threejs/Images'
// import Slogan from './components/threejs/Slogan'
// import { Canvas } from '@react-three/fiber'
// import { ScrollControls, Scroll } from '@react-three/drei'


function App() {
  return (
    <>
      {/* ▼▽▼ Three.js Section ▼▽▼ */}
      {/* <Canvas>
        <ScrollControls pages={2} dumping={3}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <Slogan />
          </Scroll>
        </ScrollControls>
      </Canvas> */}
      {/* ▲△▲ Three.js Section ▲△▲ */}
      <Header />
      {/* <main className='main stars'> */}
        <Home />
        <div className='aboutSkills'>
          <About />
          <Skills />
        </div>
        <Work />
        <Contact />
      {/* </main> */}
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
