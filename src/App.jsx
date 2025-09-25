import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Projects from './components/Projects'
import Skills from "./components/Skills"
import Connect from './components/Contact'
import About from './components/About'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <About/>
      <Projects/>
      <Skills />
      <Connect/>
      
    </>
  )
}

export default App
