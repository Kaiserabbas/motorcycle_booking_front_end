import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = ()=>{
  const [logouting,setLogouting]=useState(false);

    return(
    <ul className="navList flexV">
          <li><NavLink to="/motorcycles"> Motorcycles</NavLink></li>
          <li><NavLink to="/reserve">Reserve Form</NavLink></li>
    <li><NavLink to="/reservations">My reservations </NavLink></li>
    
    {JSON.parse(localStorage.getItem('session_token')).user.admin &&(
      <>
    <li><NavLink to="/motorcycle">Add motorcycle</NavLink></li>
      <li><NavLink to="/delete"> Delete motorcycle</NavLink></li>
    </>
    )}
    <li id="logoutLi" onClick={()=>{
      setLogouting(true);
    }}>Logout</li>
    {logouting &&(
    <div className="logoutingContainer flexV" onKeyDown={(event)=>{
      if(event.key==='Escape'){
        setLogouting(false)
      }
  }} tabIndex={0}>
      <p>Are you Sure?</p>
      <div className="logoutButtonContainer flexH">
      <a href="/logout"><button id="btnYes" className="logoutBtn">YES</button></a>
            <button id="btnNo" className="logoutBtn" onClick={()=>{setLogouting(false)}}>NO</button>

      </div>
      </div>)}
  </ul>
  );
};

export default Menu;
