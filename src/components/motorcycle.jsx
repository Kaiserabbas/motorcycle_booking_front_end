import { useState } from 'react';
import notImageIcon from '../img/notfound.png';
import '../style/motorcycle.css';

const Motorcycle = ({ motorcycle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  return (
    <div className="motorcycleItem">
      <div className="motorcycleItemPicture">
        {imageError && (
          <img
            src={notImageIcon}
            alt="Notfound item"
          />
        )}
        <img
          src={motorcycle?.imageLink}
          alt="_"
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
      <div className="motorcycleItemNameModel flexH">
        <h4>{motorcycle?.name}</h4>
      </div>
      <hr className="bar" />
      <div className="motorcycleItemDescription flexH">
        <p>{motorcycle?.model}</p>
      </div>
      <div className="motorcycleItemLinks flexH">
        <p id="description">{motorcycle?.description}</p>
      </div>
    </div>
  );
};

export default Motorcycle;
