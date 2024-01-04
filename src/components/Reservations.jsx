import React from 'react';
import { Navigate } from 'react-router-dom';
import NavBar from './NavBar';

const Reservations = () => {
  if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);
  return (
    <section className="mainUi">
      <NavBar />
      <div>
        <h1>I will show all the reservations</h1>
      </div>
    </section>
  );
};
export default Reservations;
