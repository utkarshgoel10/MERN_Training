import React from 'react'
import Cards from '../../components/Cards/Cards'
import Nav from '../../components/Navbar/Nav'

const Projects = () => {
  return (
    <div>
      <Nav />
      <div className="projects">
        <div className="container">
        <h2 style={{fontSize: '3rem',textAlign: 'center',marginTop:'4rem'}}>Projects</h2>
        <Cards />
        </div>
      </div>
    </div>
  )
}

export default Projects
