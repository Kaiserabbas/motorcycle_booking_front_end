import React from "react";
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
        <h1>TITLE</h1>
        <ul className="nav-list">
          <li>MODELS</li>

          <li>LIFESTYLE</li>

          <li>SHOP</li>

          <li>TEST DRIVE</li>
        </ul>

        <ul className="icons"> 
            <li><i className="fab fa-google"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-pinterest"></i></li>

        </ul>
    </div>
  );
};
export default NavBar;
