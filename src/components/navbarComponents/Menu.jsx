import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, setIconUser } from '../../redux/userSlice';

const Menu = () => {
  const [logouting, setLogouting] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navegate = useNavigate();

  return (
    <ul className="navList flexV">
      <li>
        <NavLink
          to="/motorcycles"
          onClick={() => {
            dispatch(setIconUser());
          }}
        >
          {' '}
          Motorcycles
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reserve"
          onClick={() => {
            dispatch(setIconUser());
          }}
        >
          Reserve Form
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reservations"
          onClick={() => {
            dispatch(setIconUser());
          }}
        >
          My reservations
        </NavLink>
      </li>

      {currentUser?.admin && (
        <>
          <li>
            <NavLink
              to="/motorcycle"
              onClick={() => {
                dispatch(setIconUser());
              }}
            >
              Add motorcycle
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/delete"
              onClick={() => {
                dispatch(setIconUser());
              }}
            >
              {' '}
              Delete motorcycle
            </NavLink>
          </li>
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
            <button
              id="btnYes"
              type="button"
              className="logoutBtn"
              onClick={() => {
                dispatch(logout());
                dispatch(setIconUser());
                navegate('/');
              }}
            >
              YES
            </button>
            <button
              id="btnNo"
              className="logoutBtn"
              type="button"
              onClick={() => {
                dispatch(setIconUser());
                setLogouting(false);
              }}
            >
              NO
            </button>
          </div>
        </div>
      )}
    </ul>
  );
};

export default Menu;
