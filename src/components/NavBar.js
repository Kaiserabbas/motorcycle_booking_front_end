import React, { useState, useEffect } from "react";
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

  // Use useEffect to ensure that the activeLink state is updated before rendering
  useEffect(() => {
    // Your logic to handle link activation (e.g., styling updates) can go here
  }, [activeLink]);

  return (
    <div className="nav-container">
      <div className={`navigation ${isVisible ? "" : "hidden"}`}>
        <h1>TITLE</h1>
        <ul className="nav-list">
          <li>
            <Link
              to="/motorcycles"
              className={activeLink === "/motorcycle" ? "active" : ""}
              onClick={() => handleLinkClick("/motorcycle")}
            >
              MOTORCYCLES
            </Link>
          </li>
          <li>
            <Link
              to="/reservation"
              className={activeLink === "/reservation" ? "active" : ""}
              onClick={() => handleLinkClick("/reservation")}
            >
            RESERVE
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={activeLink === "#" ? "active" : ""}
              onClick={() => handleLinkClick("#")}
            >
            MY RESERVATIONS
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={activeLink === "#" ? "active" : ""}
              onClick={() => handleLinkClick("#")}
            >
            ADD MOTORCYCLE
            </Link>
          </li>

          <li>
            <Link
              to="#"
              className={activeLink === "#" ? "active" : ""}
              onClick={() => handleLinkClick("#")}
            >
            DELETE MOTORCYCLE
            </Link>
          </li>
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
