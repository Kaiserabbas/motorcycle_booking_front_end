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
        MOTORCYCLES
      </Link>
    </li>
    <li>
      <Link
        to="/reservations"
        className={activeLink === "/reservation" ? "active" : ""}
        onClick={() => handleLinkClick("/reservation")}
      >
      RESERVE
      </Link>
    </li>
    <li>
      <Link
        to="#"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      MY RESERVATIONS
      </Link>
    </li>
    <li>
      <Link
        to="#"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      ADD MOTORCYCLE
      </Link>
    </li>

    <li>
      <Link
        to="#"
        className={activeLink === "#" ? "active" : ""}
        onClick={() => handleLinkClick("#")}
      >
      DELETE MOTORCYCLE
      </Link>
    </li>
  </ul>
  );
};

export default Menu;