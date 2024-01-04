import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Motorcycle from './motorcycle';

import vespa from '../img/whiteVespa.webp';
import vespaYellow from '../img/yellowVespa.webp';
import vespared from '../img/VESPA.jpg';
import vespaSea from '../img/VESPA_YELLOW.jpg';
// import vesparedBank from '../img/whitevespa.png';
import vesp from '../img/vv.jpg';

// const Slide = ({ arraySource, step, last = 0 }) => (
//   arraySource.map((image, index) => {
//     if (index < step) { return (<Motorcycle path={image} />); }
//   })
// );

const motorcycleArray = [
  { name: 'vespa Branca', image: vespa, description: 'MInha Vespa Louca' },
  { name: 'vespa Yellow', image: vespaYellow, description: 'Minha Vespa Amarela...' },
  { name: 'vespa Red siter', image: vespared, description: 'Vespa Banco Vermelha' },
  { name: 'vespa Louca', image: vesp, description: 'Muito louca .............' },
  { name: 'vespa Mritima', image: vespaSea, description: 'Vespa no Mar .............' },
];

const Main = () => {
  const [currentToDisplay, setCurrentToDisplay] = useState(0);

  return (
    <main className="mainContainer">
      {/* <LeftButton/> */}
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

      {/* <Body/> */}

      <div className="mainBody flexV">
        <header className="mainBodyHeader flexV">
          <h1>LATEST MODELS</h1>
          <p>Please select a Vespa Model</p>
          <hr className="bar" />
        </header>
        <section className="motorcyclesContainer">
          {/* <Slide arraySource={imageArray} step={currentToDisplay} /> */}
          <Motorcycle motorcycle={motorcycleArray[currentToDisplay]} />
          <Motorcycle motorcycle={motorcycleArray[currentToDisplay + 1]} />
          <Motorcycle motorcycle={motorcycleArray[currentToDisplay + 2]} />
        </section>
      </div>

      {/* <RightButton/> */}
      <div className="mainButton flexV">
        <div className={currentToDisplay < motorcycleArray.length - 3 ? 'buttonContainerRight flexH' : 'noneItemRight flexH'}>
          <button type="button">
            {' '}
            <FontAwesomeIcon
              icon={faCaretRight}
              id="rightIcon"
              onClick={() => {
                if (currentToDisplay < motorcycleArray.length - 3) {
                  setCurrentToDisplay(currentToDisplay + 1);
                }
              }}
            />
          </button>
        </div>
      </div>
    </main>
  );
};
export default Main;
