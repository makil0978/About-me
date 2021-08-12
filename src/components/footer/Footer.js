import React from "react";
import Email from "./icons/email.png";
import Phone from "./icons/phone.png";
import Github from "./icons/github.png";
import Linkedin from "./icons/linkedin.png";
import "./footer.css";
const Footer = () => {
  const click = (props) => {
    if (document.querySelector(".footer-off")) {
      document.querySelector(".footer-off").className = "footer-active";
      if (props.target.className === "icon phone") {
        document.querySelector(".phone-hover").className = "phone-active";
      }
      if (props.target.className === "icon email") {
        document.querySelector(".email-hover").className = "email-active";
      }
    } else {
      document.querySelector(".footer-active").className = "footer-off";
      if (document.querySelector(".email-active")) {
        document.querySelector(".email-active").className = "email-hover";
      }
      if (document.querySelector(".phone-active")) {
        document.querySelector(".phone-active").className = "phone-hover";
      }
    }
  };
  const quit = () => {
    document.querySelector(".footer-active").className = "footer-off";
    if (document.querySelector(".email-active")) {
      document.querySelector(".email-active").className = "email-hover";
    }
    if (document.querySelector(".phone-active")) {
      document.querySelector(".phone-active").className = "phone-hover";
    }
  };
  return (
    <div className="footer">
      <div onClick={click}>
        <img src={Email} className="icon email" alt="ico" />
      </div>
      <div onClick={click} className="asd">
        <img src={Phone} className="icon phone" alt="ico" />
      </div>
      <a href="https://github.com/makil0978" target="_blank" rel="noreferrer">
        <img src={Github} className="icon" alt="ico" />
      </a>
      <a
        href="https://www.linkedin.com/in/kamil-jaworski-772a25194/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} className="icon" alt="ico" />
      </a>
      <div className="footer-off" onClick={click}></div>
      <div className="phone-hover">
        <p>+48 790 505 573</p>
        <div className="quit" onClick={quit}>
          <div className="footer-lines footer-line1"></div>
          <div className="footer-lines footer-line2"></div>
        </div>
      </div>
      <div className="email-hover">
        <p>kamil.jaworski0978@gmial.com</p>
        <div className="quit" onClick={quit}>
          <div className="footer-lines footer-line1"></div>
          <div className="footer-lines footer-line2"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
