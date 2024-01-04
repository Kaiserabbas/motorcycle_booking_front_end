import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import NavBar from './NavBar';
import FormReserve from './FormReserve';
import '../style/reserve.css';

library.add(faXmark, faBars);

const Reserve = () => {
  const [icon, setIcon] = useState('bars');
  if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);
  return (
    <section className="reserveContainer flexV">
      <header className="flexH">
        <FontAwesomeIcon
          icon={icon}
          onClick={() => {
            if (icon === 'bars') {
              setIcon('xmark');
            } else {
              setIcon('bars');
            }
            document.querySelector('.reseverNavbarContainer').classList.toggle('hide');
          }}
        />

        <div className="glassContainer">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="glass" />
        </div>
      </header>
      <div className="reseveBodyContainer flexH">
        <section className="reseverNavbarContainer hide">
          <NavBar />
        </section>
        <div className="reserveDiv">
          <FormReserve />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
