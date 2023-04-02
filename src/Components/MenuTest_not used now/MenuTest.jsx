import React, { useState } from 'react';
import './MenuTest.scss';

function MenuTest() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <div className={`burger-menu-eye ${isOpen ? 'open' : ''}`}>
        <div className="burger-menu-pupil"></div>
      </div>
      {isOpen && (
        <ul className="burger-menu-items">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
      <div className="body">Helloo</div>
    </div>
  );
}

export default MenuTest;
