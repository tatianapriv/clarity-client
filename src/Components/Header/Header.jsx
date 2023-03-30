import React from "react";
import eye from "../../Assets/eye.svg";
import blue from "../../Assets/bluegradient.jpg";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import "./Header.scss";
import CircularSlider from "../CircularSlider/CircularSlider";

export default function Header() {
  return (
    <header>
      {/* <div className="header__container">
        <h1 className="header__text-light">Clarity</h1> */}
        {/* <div className="header__cta">
          <a href="" className="header__btn">
            Log In
          </a>
          <a href="" className="btn header__btn-primary">
            Sign Up
          </a>
        </div>
        <div className="header__picture">
          <CircularSlider /> */}
          {/* <img className="header__image" src={blue} alt="background" /> */}
        {/* </div> */}
        <a href="#contact" className="header__scroll-down">
          Scroll Down
        </a>
        {/* <div className="header__socials">
          <a href="https://linkedin.com" target="_blank">
            <CiLinkedin />
          </a>
          <a href="https://github.com" target="_blank">
            <VscGithub />
          </a>
        </div> */}
      {/* </div> */}
    </header>
  );
}
