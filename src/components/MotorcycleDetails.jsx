import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import notImageIcon from '../img/notfound.png';
import NavBar from './NavBar';
import '../style/mainSection.css';
import { moneyDisplay } from '../timeCalc';

const MotorcycleDetails = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { selectedMotorcycle } = useSelector((state) => state.motorcycle);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <section className="mainUi">
        <NavBar />
        <div className="motorcycleDetailsContainer">
          <div className="btnContainer flexV">
            <div>
              <div className="mainButton flexV">
                <div className="buttonContainerLeft">
                  <button type="button">
                    <FontAwesomeIcon
                      icon={faCaretLeft}
                      id="leftIcon"
                    />
                    {' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="motorcycleDetailsContainerMain">
            {imageError && !imageLoaded && (
              <img
                id="notfoundImg"
                src={notImageIcon}
                alt="Notfound item"
              />
            )}

            <img
              src={selectedMotorcycle?.imageLink}
              alt={selectedMotorcycle.name}
              srcSet="Vespa Mota"
              className={imageError ? 'hide' : 'photoItem'}
              onError={() => {
                setImageLoaded(false);
                setImageError(true);
              }}
              onLoad={() => {
                setImageLoaded(true);
                setImageError(false);
              }}
            />

          </div>
          <div className="motorcycleDetailsContainerAbout flexV">
            <div className="detailsItemHeader">
              <h2>{selectedMotorcycle.name}</h2>
              <div className="selectedItemPriceContainer">
                <p>Sale Price</p>
                <p>{moneyDisplay(selectedMotorcycle.price)}</p>
              </div>

              <div className="selectedItemPriceContainer">
                <p>B. Price per hour</p>
                <p>{moneyDisplay(selectedMotorcycle.bookingPricePerHour)}</p>
              </div>
            </div>
            <div className="detailsItemBody">
              <button
                type="button"
                onClick={() => {
                  navigate('/reserve/new');
                }}
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MotorcycleDetails;
