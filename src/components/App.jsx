import React, { useState, useEffect } from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import logo from "../images/logo.jpeg";

const App = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const logIn = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div className="App">
      <div className="App__banner">
        <img src={logo} alt="Logo" className="App__header__logo" />
        <h1 className="App__header">Surreal Estate</h1>
      </div>
      {profile ? (
        <div className="App__logged-in">
          <button
            className="App__log-out__button"
            onClick={logOut}
            type="button"
          >
            Log out
          </button>
          <NavBar />
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </div>
      ) : (
        <button
          className="App__log-in__button"
          onClick={() => logIn()}
          type="button"
        >
          Google Login
        </button>
      )}
    </div>
  );
};

export default App;
