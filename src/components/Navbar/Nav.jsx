import React from "react";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          START BOOTSTRAP
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
