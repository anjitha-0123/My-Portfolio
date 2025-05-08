import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 mb-4 sticky-top ">
<div className="container-fluid">
        <a className="navbar-brand " href="#">My Portfolio</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link text-danger" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#About Me">About Me</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#Skills">Skills</a>
            </li>

            <li className="nav-item">
            <a className="nav-link text-danger" href="#Project">Projects</a>
           </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#Education">Education</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#Certifications">Certifications</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#contact">Get in Touch</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
