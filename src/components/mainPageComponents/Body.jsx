import Motorcycle from "../motorcycle";

const Body = ()=>{
    return(
        <div className="mainBody flexV">
            <header className="mainBodyHeader flexV">
        <h1>LATEST MODELS</h1>
        <p>Please select a Vespa Model</p>
        <hr className='bar' />
            </header>



            <section className="motorcyclesContainer">
                <Motorcycle/>
                <Motorcycle/>
                <Motorcycle/>
            </section>
        </div>
    );
};

export default Body;
