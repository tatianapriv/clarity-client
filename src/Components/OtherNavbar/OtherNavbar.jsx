import { useState } from "react";
import "./NavBar.scss";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav">
      <div className="nav__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
        <li className="nav__link">Link 1</li>
        <li className="nav__link">Link 2</li>
        <li className="nav__link">Link 3</li>
      </ul>
    </div>
  );
}
export default NavBar;
