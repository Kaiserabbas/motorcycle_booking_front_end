import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
// import Details from "./Details";
import '../style/mainSection.css'


const Home = () => {
  return (
    <section className="mainUi">
      <NavBar/>
      <Main/>
    </section>    
  );
};
export default Home;
