
import { Suspense, lazy } from "react"
import './App.css'
import Navbar from "./components/Navbar"


const About = lazy(() => import("./components/About"))
const Projects = lazy(() => import("./components/Projects"))
const Skills = lazy(() => import("./components/Skills"))
const Connect = lazy(() => import("./components/Contact"))



function App() {
 

  return (
    <>
      <Navbar />
       <Suspense fallback={<div className="text-center py-10">Loading...</div>}></Suspense>
      {/* <Hero /> */}
      <About/>
      <Projects/>
      <Skills />
      <Connect/>
      
    </>
  )
}

export default App
