import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <Link
        to="/motorcycles"
        className={activeLink === "/motorcycle" ? "active" : ""}
        onClick={() => handleLinkClick("/motorcycle")}
      >
        Motorcycles
      </Link>
    </li>

          <li>
      <Link
        to="/reserve"
        className={activeLink === "/reservation" ? "active" : ""}
        onClick={() => handleLinkClick("/reservation")}
      >
      Reserve
      </Link>
    </li>


    <li>
      <Link
        to="/reservations"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      My reservations
      </Link>
    </li>
    <li>
      <Link
        to="/motorcycle"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Add motorcycle
      </Link>
    </li>

    <li>
      <Link
        to="/delete"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Delete motorcycle
      </Link>
    </li>

    <li>
      <Link
        to="/delete"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      Logout
      </Link>
    </li>
  </ul>
  );
};

export default Menu;