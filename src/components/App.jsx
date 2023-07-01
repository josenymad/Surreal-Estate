import React from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import logo from "../images/logo.jpg";

const App = () => {
  return (
    <div className="App">
      <div className="App__container">
        <img src={logo} alt="Logo" className="App__logo" />
        <h1>Surreal Estate</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
