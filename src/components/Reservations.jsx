import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { getReserves } from '../redux/reserveSlice';
import NavBar from './NavBar';
import { moneyDisplay } from '../timeCalc';

const Reservations = () => {
  // if (!JSON.parse(localStorage.getItem('session_token'))?.token) return (<Navigate to="/" />);
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve.reserves);
  useEffect(() => {
    dispatch(getReserves());
  }, [dispatch]);
  return (
    <section className="mainUi">
      <NavBar />
      <div>
        <h1>I will show all the reservations</h1>
        {reserves.map((reserv, index) => (
          <div key={{ index }} className="reserveItem flexH">
            <p>
              Duration
              {' '}
              {reserv.duration}
              {' '}
              hours
            </p>
            <p>
              City
              {' '}
              {reserv.city}
            </p>
            <p>
              Total
              {' '}
              {moneyDisplay(reserv.total)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Reservations;
