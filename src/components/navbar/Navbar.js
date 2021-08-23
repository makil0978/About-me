import React, { useState } from "react";
import Navigation from "./Navigation";
import "./navbar.css";
import logo from "./logo.png";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!navbar);
  return (
    <div
      className={
        navbar ? "navbar-active hamburger-active" : "navbar hamburger-off"
      }
    >
      <a className="logo" href="#home">
        <img src={logo} alt="k"></img>
      </a>
      <Navigation />
      <div className="hamburger" onClick={showNavbar}>
        <div className="line1 lines"></div>
        <div className="line2 lines"></div>
        <div className="line3 lines"></div>
        <div className="line4 lines"></div>
      </div>
    </div>
  );
};

export default Navbar;
