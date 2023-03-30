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
      <a
        className={`nav__icon ${activeNav === "#" ? "active" : ""}`}
        href="#"
        onClick={() => setActiveNav("#")}
      >
        <TbHome />
      </a>
      <a
        href="#login"
        className={`nav__icon ${activeNav === "#login" ? "active" : ""}`}
        onClick={() => setActiveNav("#login")}
      >
        <HiOutlineUserCircle />
      </a>
      <a
        className={`nav__icon ${activeNav === "#register" ? "active" : ""}`}
        href="#register"
        onClick={() => setActiveNav("#login")}
      >
        <IoIosCreate />
      </a>
    </nav>
  );
}
