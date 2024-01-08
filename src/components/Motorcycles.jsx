import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import '../style/mainSection.css';

const Motorcycles = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <section className="mainUi">
        <NavBar />
        <Main />
      </section>
    </>
  );
};

export default Motorcycles;
