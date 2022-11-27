import React from 'react'
import About from '../../components/About/About'
import Demo from '../../components/Demo/Demo'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Navbar/Nav'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  )
}

export default Home
