import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Details from "./Details";


const Home = () => {
  return (
    <div className="main-ui">
      <NavBar />
      <Main />
      <Details />
    </div>
  );
};
export default Home;
