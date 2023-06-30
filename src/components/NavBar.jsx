import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <ul className="navbar__links">
        <li className="navbar__links__item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar__links__item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
