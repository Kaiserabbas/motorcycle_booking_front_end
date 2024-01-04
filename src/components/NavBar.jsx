import React from 'react';
import Title from './navbarComponents/Title';
import Menu from './navbarComponents/Menu';
import Footer from './navbarComponents/Footer';
import '../style/NavBar.css';

const NavBar = () => (
  <nav className="navContainer">
    <Title />
    <Menu />
    <Footer />
  </nav>
);

export default NavBar;
