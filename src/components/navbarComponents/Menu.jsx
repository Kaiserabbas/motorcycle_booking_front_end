import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = ()=>{
  const [isVisible, setIsVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const toggleVisibility = () => {
     setIsVisible(!isVisible);
   };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // // Use useEffect to ensure that the activeLink state is updated before rendering
  useEffect(() => {
  //   // Your logic to handle link activation (e.g., styling updates) can go here
  }, [activeLink]);

    return(
    <ul className="navList flexV">
          <li>
      <NavLink
        to="/motorcycles"
        // onClick={() => handleLinkClick("/motorcycle")}
        activeClassName="active-link"
      >
        Motorcycles
      </NavLink>
    </li>

          <li>
      <NavLink
        to="/reserve"
        className={activeLink === "/reservation" ? "active" : ""}
        onClick={() => handleLinkClick("/reservation")}
      >
      Reserve
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/reservations"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      My reservations
      </NavLink>
    </li>
    {JSON.parse(localStorage.getItem('session_token')).user.admin &&(
      <>
    <li>
      <NavLink
        to="/motorcycle"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Add motorcycle
      </NavLink>
    </li>
    
      <li>
      <NavLink
        to="/delete"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Delete motorcycle
      </NavLink>
    </li>
    </>
    )}

    {/* {JSON.parse(localStorage.getItem('session_token')).user.admin
    &&(
    <li>
      <Link
        to="/delete"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Delete motorcycle
      </Link>
    </li>
    )} */}

    <li>
      <NavLink
        to="/logout"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Logout
      </NavLink>
    </li>
  </ul>
  );
};

export default Menu;