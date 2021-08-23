import React from "react";
import Option from "./options/Options";
import "./navbar.css";
const Navigation = () => {
  const aboutMe = "About me";
  const contact = "Contact";
  return (
    <div className="navbar-content">
      <Option value={aboutMe} />
      <Option value={contact} />
    </div>
  );
};

export default Navigation;
