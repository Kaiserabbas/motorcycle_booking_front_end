import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import notImageIcon from '../img/notfound.png';
import '../style/motorcycle.css';
import { setSelectedMotorcycle } from '../redux/motorcycleSlice';

const Motorcycle = ({ motorcycle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="motorcycleItem">
      <div className="motorcycleItemPicture"
        tabIndex={0}
        data-info={JSON.stringify(motorcycle)}
        role="button"
        onClick={(e) => {
          const selectedItem = JSON.parse(e.currentTarget.dataset.info);
          console.log(selectedItem);
          dispatch(setSelectedMotorcycle(selectedItem));
          navigate('/motorcycle/'.concat(selectedItem.id));
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const selectedItem = JSON.parse(e.currentTarget.dataset.info);
            console.log(selectedItem);
            dispatch(setSelectedMotorcycle(selectedItem));
            navigate('/motorcycle/'.concat(selectedItem.id));
          }
        }}
      >
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
