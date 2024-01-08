import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import '../style/mainSection.css';

const MotorcycleDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <section className="mainUi">
        <NavBar />
        <h1>Motorcycle item</h1>
      </section>
    </>
  );
};

export default MotorcycleDetails;
