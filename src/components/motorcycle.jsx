import '../style/motorcycle.css';
import vespa from '../img/whitevespa.png'

const Motorcycle =({motorcycle})=>{
    return(
        <div className="motorcycleItem">
            <div className='motorcycleItemPicture'>
                <img src={motorcycle.image} alt="Vespa" srcset="Vespa MOta" />
            </div>

            <div className='motorcycleItemNameModel flexH'>
            <h4>{motorcycle.name}</h4>
            </div>

            <hr className='bar' />

            <div className='motorcycleItemDescription flexH'>
                <p>{motorcycle.description}</p>
            </div>

            <div className='motorcycleItemLinks flexH'>
                <p>Chegando</p>
            </div>


        </div>
    );
};

export default Motorcycle;