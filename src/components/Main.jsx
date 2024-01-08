import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Motorcycle from './motorcycle';
import { getMotorcycles } from '../redux/motorcycleSlice';

const Main = () => {
  const [currentToDisplay, setCurrentToDisplay] = useState(0);
  const { requestHeader } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { motorcycles, isLoading, error } = useSelector((state) => state.motorcycle);
  useEffect(() => {
    dispatch(getMotorcycles(requestHeader));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="infoContainer flexV">
        <p>Loading... your  motorcycles😁😍</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="infoContainer flexV">
        <p>Upss! There is an Error😁</p>
        <p>Please Check your Connection and try Again!</p>
      </div>
    );
  }

  if (motorcycles.length === 0) {
    return (
      <div className="infoContainer flexV">
        <p>Upss! There is no motorcycles😁</p>
        <p>But you can Add it😍 or Contact the App Adm.</p>
      </div>
    );
  }

  return (
    <main className="mainContainer">
      <div className="mainButton flexV">
        <div className={currentToDisplay === 0 ? 'noneItemLeft flexH' : 'buttonContainerLeft flexH'}>
          <button type="button">
            {' '}
            <FontAwesomeIcon
              icon={faCaretLeft}
              id="leftIcon"
              onClick={() => {
                if (currentToDisplay > 0) {
                  setCurrentToDisplay(currentToDisplay - 1);
                }
              }}
            />
          </button>
        </div>
      </div>

      <div className="mainBody flexV">
        <header className="mainBodyHeader flexV">
          <h1>LATEST MODELS</h1>
          <p>Please select a Vespa Model</p>
          <hr className="bar" />
        </header>
        <section className="motorcyclesContainer">

          {motorcycles.length <= 2 && motorcycles.map((motorcycle) => (
            <Motorcycle
              key={(1 + (Math.sin(Math.random() * 10) + Math.cos(Math.random() * 11)))}
              motorcycle={motorcycle}
            />
          ))}
          {motorcycles.length >= 3 && (
            <>
              <Motorcycle motorcycle={motorcycles[currentToDisplay]} />
              <Motorcycle motorcycle={motorcycles[currentToDisplay + 1]} />
              <Motorcycle motorcycle={motorcycles[currentToDisplay + 2]} />
            </>
          )}
        </section>
        <section className="motorcyclesContainerMobile flexV">
          {motorcycles.length > 0 && (
            <>
              <Motorcycle motorcycle={motorcycles[currentToDisplay]} />
            </>
          )}
        </section>
      </div>

      <div className="mainButton flexV">
        <div className="buttonContainerRightDesktop">
          <div className={currentToDisplay < motorcycles.length - 3
            ? 'buttonContainerRight flexH' : 'noneItemRight flexH'}
          >
            <button type="button">
              {' '}
              <FontAwesomeIcon
                icon={faCaretRight}
                id="rightIcon"
                onClick={() => {
                  if (currentToDisplay < motorcycles.length - 3) {
                    setCurrentToDisplay(currentToDisplay + 1);
                  }
                }}
              />
            </button>
          </div>
        </div>
        <div className="buttonContainerRightMobile">
          <div className={currentToDisplay < motorcycles.length - 1 ? 'buttonContainerRight flexH' : 'noneItemRight flexH'}>
            <button type="button">
              {' '}
              <FontAwesomeIcon
                icon={faCaretRight}
                id="rightIcon"
                onClick={() => {
                  if (currentToDisplay < motorcycles.length - 1) {
                    setCurrentToDisplay(currentToDisplay + 1);
                  }
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
