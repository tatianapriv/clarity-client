import React from "react";
import "./Navbar.scss";
import { TbHome } from "react-icons/tb";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoIosCreate } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="nav">
      <a className={`nav__icon ${activeNav === "#" ? "active" : ""}`} href="#">
        <TbHome />
      </a>
      <a
        className="nav__icon"
        href="#login"
        onClick={() => setActiveNav("#login")}
      >
        <HiOutlineUserCircle />
      </a>
      <a className="nav__icon" href="#createaccount">
        <IoIosCreate />
      </a>
    </nav>
  );
}
