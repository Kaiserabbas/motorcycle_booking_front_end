import Motorcycle from "../Motorcycle";

const Body = ()=>{
    return(
        <div className="mainBody flexV">
            <header className="mainBodyHeader flexV">
        <h1>LATEST MODELS</h1>
        <p>Please select a Vespa Model</p>
        <hr className='bar' />
            </header>
            <section className="motorcyclesContainer">
                <Motorcycle path={'https://images.piaggio.com/vespa/vehicles/evpr000ep4/evprq02ep4/evprq02ep4-02-s.png'} />
                <Motorcycle path={'https://images.piaggio.com/vespa/vehicles/evpr000hka/evpr8znhka/evpr8znhka-02-s.png'}/>
                <Motorcycle path={'https://images.piaggio.com/vespa/vehicles/evpv000ep1/evpv8znep1/evpv8znep1-02-s.png'}/>
            </section>
        </div>
    );
};

export default Body;
