import React, { useState } from "react";
import Option from "./options/Options";
import "./navbar.css";
import logo from "./logo.png";
const Navbar = () => {
  const aboutMe = "About me";
  const contact = "Contact";
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
      <div className="navbar-content navbar-content-active">
        <Option value={aboutMe} />
        <Option value={contact} />
      </div>
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
