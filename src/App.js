import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Details from "./components/Details";
import './App.css'
const App =()=>{
  return(
    <div className="main-ui">
      <NavBar />
      <Main />
      <Details />
    </div>
  )
}

export default App;
