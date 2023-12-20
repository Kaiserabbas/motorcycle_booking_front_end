import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="nav-container">
      <div className={`navigation ${isVisible ? "" : "hidden"}`}>
        <h1>TITLE</h1>
        <ul className="nav-list">
          <li>
            <Link
              to="/reservation"
              className={activeLink === "/reservation" ? "active" : ""}
              onClick={() => handleLinkClick("/reservation")}
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={activeLink === "#" ? "active" : ""}
              onClick={() => handleLinkClick("#")}
            >
              LIFESTYLE
            </Link>
          </li>
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
      <div
        className={`toggler ${isVisible ? "left" : "right"}`}
        onClick={toggleVisibility}
      >
        <i
          className={`fa fa-caret-${isVisible ? "left" : "right"}`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default NavBar;
