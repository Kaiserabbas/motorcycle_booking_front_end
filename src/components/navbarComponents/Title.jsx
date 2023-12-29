import React from "react";
import Logo from '../../img/logo.webp'
import { Navigate } from "react-router-dom";

const Title=()=><div className="titleContainer flexH"><img src={Logo} alt="Logo" onClick={()=>{return <Navigate to="/" />}} /></div>

export default Title;
