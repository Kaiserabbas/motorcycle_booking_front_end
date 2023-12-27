import React from "react";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import '../style/mainSection.css'

const MotorcycleDetails = () => {
    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
    return (
      <>
        {(JSON.parse(localStorage.getItem('session_token'))?.token)&&(
          <section className="mainUi">
          <NavBar/>
          <h1>Motorcycle item</h1>
        </section>
        )}
      </>
    );
  };

export default MotorcycleDetails;