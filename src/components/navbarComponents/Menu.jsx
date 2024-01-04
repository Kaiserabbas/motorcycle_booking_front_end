import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [logouting, setLogouting] = useState(false);

  return (
    <ul className="navList flexV">
      <li><NavLink to="/motorcycles"> Motorcycles</NavLink></li>
      <li><NavLink to="/reserve">Reserve Form</NavLink></li>
      <li><NavLink to="/reservations">My reservations </NavLink></li>

      {JSON.parse(localStorage.getItem('session_token')).user.admin && (
        <>
          <li><NavLink to="/motorcycle">Add motorcycle</NavLink></li>
          <li><NavLink to="/delete"> Delete motorcycle</NavLink></li>
        </>
      )}
      <li>
        <button
          type="button"
          id="logoutLi"
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              setLogouting(true);
            }
          }}
          onClick={() => {
            setLogouting(true);
          }}
        >
          Logout
        </button>
      </li>
      {logouting && (
        <div
          className="logoutingContainer flexV"
          role="status"
        >
          <p>Are you Sure?</p>
          <div className="logoutButtonContainer flexH">
            <a href="/logout"><button id="btnYes" type="button" className="logoutBtn">YES</button></a>
            <button id="btnNo" className="logoutBtn" type="button" onClick={() => { setLogouting(false); }}>NO</button>
          </div>
        </div>
      )}
    </ul>
  );
};

export default Menu;
