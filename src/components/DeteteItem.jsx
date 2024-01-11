import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setToDelete } from '../redux/motorcycleSlice';

const DeleteItem = ({ motorcycle }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="motorcyclesItemsContainer">
        <div className="motorcycleToDelete flexH">
          <h3>{motorcycle.name}</h3>
          <div className="flexV">
            <button
              type="button"
              onClick={() => {
                dispatch(setToDelete(motorcycle.id));
                document.querySelector('#deleteModal').classList.remove('hideComponent');
                document.querySelector('.bodyContainer').classList.add('hiddenScroll');
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteItem.propTypes = {
  motorcycle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default DeleteItem;
