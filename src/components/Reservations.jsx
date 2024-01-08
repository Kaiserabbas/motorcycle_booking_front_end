import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getReserves } from '../redux/reserveSlice';
import { getMotorcycles } from '../redux/motorcycleSlice';
import NavBar from './NavBar';
import reserveDisplayName from '../reserveDisplay';

const Reservations = () => {
  const dispatch = useDispatch();
  const { requestHeader } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getReserves(requestHeader));
    dispatch(getMotorcycles(requestHeader));
  }, [dispatch]);
  const {
    reserves, isLoading, error,
  } = useSelector((state) => state.reserve);
  const { motorcycles } = useSelector((state) => state.motorcycle);
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <section className="mainUi">
      <NavBar />
      <div className="reservesItemListContainer">
        <div className="revervesTableContainer">
          <div className="reservesTableHead">
            <h4>Date</h4>
            <h4>Motorcycle</h4>
            <h4>City</h4>
          </div>
          <div className="reservesTableBody">
            {isLoading
              && (
                <div className="infoContainer flexV">
                  <p>Loading... your  Reserves😁😍</p>
                </div>
              )}

            {error && (
              <div className="infoContainer flexV">
                <p>Upss! There is an Error😁</p>
                <p>Please Check your Connection and try Again!</p>
              </div>
            )}
            {Array.isArray(reserves) && !isLoading && !error && reserves.length > 0
              ? reserves.map((reserv) => (
                <div
                  key={Math.random() + 2 + Math.sin(Math.random() * 10)}
                  className="reservationItem"
                >
                  <h5>{reserv.date}</h5>
                  <h5>
                    {Array.isArray(motorcycles)
                      && reserveDisplayName(reserv.motorcycle_id, motorcycles)}
                  </h5>
                  <h5>{reserv.city}</h5>
                </div>
              ))
              : (
                !error && (
                <div className="infoContainer flexV">
                  <p>Upss! There is no Reserves😁</p>
                  <p>But you can Add it😍 or Contact the App Adm.</p>
                </div>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reservations;
