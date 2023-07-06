import React from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import logo from "../images/logo.jpeg";

const App = () => {
  return (
    <div className="App">
      <h1 className="App__header">
        Surreal <img src={logo} alt="Logo" className="App__header__logo" />{" "}
        Estate
      </h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
