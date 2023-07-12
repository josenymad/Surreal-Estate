import React, { useState, useEffect } from "react";
import "../styles/app.css";
import { Route, Routes } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import getProfile from "../requests/getProfile";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Alert from "./Alert";
import logo from "../images/logo.jpeg";

const App = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    getProfile(user, setProfile, setAlert);
  }, [user]);

  const logIn = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) =>
      setAlert({
        message: `Sorry, could not log in due to this error: ${error}`,
        isSuccess: false,
      }),
  });

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
          <div className="App__logged-in-container">
            <div className="App__account">
              <p className="App__profile-name">Signed in as {profile.name}</p>
              <button
                className="App__log-out__button"
                onClick={logOut}
                type="button"
              >
                Log out
              </button>
            </div>
            <img
              src={profile ? profile.picture : ""}
              alt="profile"
              className="profile-picture"
            />
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </div>
      ) : (
        <div className="App__logged-out">
          <button
            className="App__log-in__button"
            onClick={() => logIn()}
            type="button"
          >
            Google Login
          </button>
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
      )}
    </div>
  );
};

export default App;
