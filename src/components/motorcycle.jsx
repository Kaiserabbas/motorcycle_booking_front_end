import '../style/motorcycle.css';

const Motorcycle = ({ motorcycle }) => (
  <div className="motorcycleItem">
    <div className="motorcycleItemPicture">
      <img src={motorcycle.image} alt="Vespa" srcSet="Vespa MOta" />
    </div>

    <div className="motorcycleItemNameModel flexH">
      <h4>{motorcycle.name}</h4>
    </div>

    <hr className="bar" />

    <div className="motorcycleItemDescription flexH">
      <p>{motorcycle.description}</p>
    </div>

    <div className="motorcycleItemLinks flexH">
      <p>Chegando</p>
    </div>

  </div>
);

export default Motorcycle;
