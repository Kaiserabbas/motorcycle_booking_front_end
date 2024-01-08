// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { deleteMotorcycles, getMotorcycles } from '../redux/motorcycleSlice';
import { setToDelete } from '../redux/motorcycleSlice';

const DeleteItem = ({ motorcycle }) => {
  const dispatch = useDispatch();
  // const requestHeader = useSelector((state) => state.user.requestHeader);
  // const [forceUpdate, setForceUpdate] = useState(false);

  // useEffect(() => {
  //   dispatch(getMotorcycles(requestHeader));
  //   setForceUpdate(false);
  // }, [forceUpdate]);
  return (
    <>
      <div className="motorcyclesItemsContainer">
        <div className="motorcycleToDelete flexH">
          <h3>{motorcycle.name}</h3>

          <div className="flexV">
            <button
              type="button"
              onClick={() => {
                // dispatch(deleteMotorcycles({ header: requestHeader, data: motorcycle.id }));
                // setForceUpdate(true);
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

export default DeleteItem;
