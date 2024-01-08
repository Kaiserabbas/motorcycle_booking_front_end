// import { useState } from 'react';

// // const Slide= ({arraySource,step,last=0})=>{
// //     return(
// //         arraySource.map((image,index)=>{
// //             if(index<step){return(<Motorcycle path={image} />)}})
// //         );
// //     };

// const Body = () => {
//   const [currentToDisplay, setCurrentToDisplay] = useState(0);
//   const [imageArray, setImageArray] = useState([
//     vespa,
//     vespaYellow,
//     vespared,
//     vespaSea,
//     vesparedBank,
//     vesp,
//   ]);

//   return (
//     <div className="mainBody flexV">
//       <header className="mainBodyHeader flexV">
//         <h1>LATEST MODELS</h1>
//         <p>Please select a Vespa Model</p>
//         <hr className="bar" />
//       </header>
//       <section className="motorcyclesContainer">
//         {/* <Slide arraySource={imageArray} step={currentToDisplay} /> */}
//         <Motorcycle path={imageArray[currentToDisplay]} />
//         <Motorcycle path={imageArray[currentToDisplay + 1]} />
//       </section>
//     </div>
//   );
// };

// export default Body;
