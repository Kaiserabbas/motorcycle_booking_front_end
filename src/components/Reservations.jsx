import React from "react";
import { Navigate } from "react-router-dom";
// import NavBar from "./NavBar";
// import '../style/NavBar.css'

const Reservations =()=> {
    if(!JSON.parse(localStorage.getItem('session_token'))?.token)return(<Navigate to="/"/>);
    return(
        <div>
            <h1>I will show all the reserves</h1>
        </div>
    )
}
export default Reservations;