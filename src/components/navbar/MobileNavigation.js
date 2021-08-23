import React from "react";
import Option from "./options/Options";
import "./navbar.css";

const MobileNavigation = () => {
  const aboutMe = "About me";
  const contact = "Contact";

  return (
    <div>
      <Option value={aboutMe} />
      <Option value={contact} />
    </div>
  );
};

export default MobileNavigation;
