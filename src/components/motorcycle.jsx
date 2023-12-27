import '../style/motorcycle.css';
import vespa from '../img/whitevespa.png'

const Motorcycle =({path})=>{
    return(
        <div className="motorcycleItem">
            <div className='motorcycleItemPicture'>
                <img src={path} alt="Vespa" srcset="Vespa MOta" />
            </div>

            <div className='motorcycleItemNameModel flexH'>
            <h4>Vespa 15A</h4>
            </div>

            <hr className='bar' />

            <div className='motorcycleItemDescription flexH'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magni dolor corrupti, eos distinctio sint similique ea ad vitae architecto beatae officia facere adipisci perferendis voluptate sapiente alias, deserunt nemo.</p>
            </div>

            <div className='motorcycleItemLinks flexH'>
                <p>Chegando</p>
            </div>


        </div>
    );
};

export default Motorcycle;