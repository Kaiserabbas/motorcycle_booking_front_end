import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="nav-container">
      <div className={`navigation ${isVisible ? "" : "hidden"}`}>
        <h1>TITLE</h1>
        <ul className="nav-list">
          <li>MODELS</li>
          <li>LIFESTYLE</li>
          <li>SHOP</li>
          <li>TEST DRIVE</li>
        </ul>

        <ul className="icons">
          <li>
            <i className="fab fa-google"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <i className="fab fa-pinterest"></i>
          </li>
        </ul>
      </div>
      <div className={`toggler ${isVisible ? "left" : "right"}`} onClick={toggleVisibility}>
        <i className={`fa fa-caret-${isVisible ? "left" : "right"}`} aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default NavBar;
