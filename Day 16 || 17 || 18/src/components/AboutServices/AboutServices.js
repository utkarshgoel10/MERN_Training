import React from 'react'
import './About.css'
import IMG from '../../assets/setup.jpg'

const AboutServices = () => {
  return (
    <div>
        <div className="about" id='about'>
            <div className="container">
                <img src={IMG} alt="" />
                <div className="col">
                    <h2>About</h2>
                    <span className="line"></span>
                    <p>I'm looking for some part-time as well as full time opportuntities, if you believe I may be of assistance, feel free to contact me.</p>
                    <p id='p2'>I am Utkarsh, a software engineer and a freelance web developer.</p>
                    <button className='btn'>Connect</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutServices