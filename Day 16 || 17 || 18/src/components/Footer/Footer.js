import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <ul>
                <li className="nav-item">
                    <a href="/">Home</a>
                    <span className="line"></span>
                </li>
                <li className="nav-item">
                    <a href="#about">About</a>
                    <span className="line"></span>
                </li>
                <li className="nav-item">
                    <a href="#testimonials">Testimonials</a>
                    <span className="line"></span>
                </li>
                <li className="nav-item">
                    <a href="#demo">Youtube</a>
                    <span className="line"></span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer