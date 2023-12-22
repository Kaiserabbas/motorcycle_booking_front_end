import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import '../style/mainSection.css'


const Motorcycles = () => {
  return (
    <section className="mainUi">
      <NavBar/>
      <Main/>
    </section>    
  );
};
export default Motorcycles;
