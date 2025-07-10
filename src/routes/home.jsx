import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';


const Home = () =>{

  return (
    <div>
<main >
   <Hero />
   <About />
   <Skills />
   <Project />
   <Contact />
   </main>
    </div>
  )
}

export default Home