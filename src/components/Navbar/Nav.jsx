import React from "react";
import { Link } from "react-router-dom"; 
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
            <Link className="nav-link" to="/Portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
