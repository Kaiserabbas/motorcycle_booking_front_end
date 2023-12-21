import React, { useState, useEffect } from "react";
import Title from "./navbarComponents/Title";
import Menu from "./navbarComponents/Menu";
import Footer from "./navbarComponents/Footer";
import '../style/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navContainer">
      <div className="navBody flexV">
      <Title/>
      <Menu/>
      </div>
      <Footer/>
    </nav>
  );
};

export default NavBar;
