import React from "react";
import "../styles/navbar.css";
import logo from "../images/logo.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li className="navbar-links__item">View Properties</li>
        <li className="navbar-links__item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
