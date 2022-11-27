import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="container">
          <ul>
            <li className="nav-item">
              <Link to="/">Home</Link>
              <span className="line"></span>
            </li>
            <li className="nav-item">
              <Link to="/services">Services</Link>
              <span className="line"></span>
            </li>
            <li className="nav-item">
              <Link to="/projects">Project</Link>
              <span className="line"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
