import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__links">
        <li className="navbar__links__item">
          <Link to="/">View all Properties</Link>
        </li>
        <li className="navbar__links__item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
