import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="nav-container">
      <div className={`navigation ${isVisible ? '' : 'hidden'}`}>
        <h1>TITLE</h1>
        <ul className="nav-list">
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
          <li>
            <Link to="/newMoter">Add new Motor</Link>
          </li>
          <li>
            <Link to="/removeMoter">Remove Motor</Link>
          </li>
        </ul>

        <ul className="icons">
          <li>
            <i className="fab fa-google" />
          </li>
          <li>
            <i className="fab fa-twitter" />
          </li>
          <li>
            <i className="fab fa-facebook" />
          </li>
          <li>
            <i className="fab fa-pinterest" />
          </li>
        </ul>
      </div>
      <div
        className={`toggler ${isVisible ? 'left' : 'right'}`}
        onClick={toggleVisibility}
      >
        <i
          className={`fa fa-caret-${isVisible ? 'left' : 'right'}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default NavBar;
