import { useState } from 'react';
import Motorcycle from '../Motorcycle';
import vespa from '../../img/whiteVespa.webp';
import vespaYellow from '../../img/yellowVespa.webp';
import vespared from '../../img/VESPA.jpg';
import vespaSea from '../../img/VESPA_YELLOW.jpg';
import vesparedBank from '../../img/whitevespa.png';
import vesp from '../../img/vv.jpg';

// const Slide= ({arraySource,step,last=0})=>{
//     return(
//         arraySource.map((image,index)=>{
//             if(index<step){return(<Motorcycle path={image} />)}})
//         );
//     };

const Body = () => {
  const [currentToDisplay, setCurrentToDisplay] = useState(0);
  const [imageArray, setImageArray] = useState([
    vespa,
    vespaYellow,
    vespared,
    vespaSea,
    vesparedBank,
    vesp,
  ]);

  // const slideHandler=()=>{
  //     if(document.querySelector('#rightIcon')){
  //         document.querySelector('#rightIcon').addEventListener('click',()=>{setCurrentToDisplay(currentToDisplay+1)})
  //         document.querySelector('#leftIcon').addEventListener('click',()=>{setCurrentToDisplay(currentToDisplay-1)})
  //     }
  // };

  // slideHandler();
  return (
    <div className="mainBody flexV">
      <header className="mainBodyHeader flexV">
        <h1>LATEST MODELS</h1>
        <p>Please select a Vespa Model</p>
        <hr className="bar" />
      </header>
      <section className="motorcyclesContainer">
        {/* <Slide arraySource={imageArray} step={currentToDisplay} /> */}
        <Motorcycle path={imageArray[currentToDisplay]} />
        <Motorcycle path={imageArray[currentToDisplay + 1]} />
      </section>
    </div>
  );
};

export default Body;
