import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { motorclesPath, requestHeader } from '../urls';
import { deleteMotorcycles, getMotorcycles } from '../redux/motorcycleSlice';

const hideModal = () => {
  document.querySelector('#deleteModal').classList.add('hideComponent');
  document.querySelector('.bodyContainer').classList.remove('hiddenScroll');
};

const DeleteModal = () => {
  const requestHeader = useSelector((state) => state.user.requestHeader);
  const itemToDeleteId = useSelector((state) => state.motorcycle.toDeleteId);
  const dispatch = useDispatch();
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    dispatch(getMotorcycles(requestHeader));
    setForceUpdate(false);
  }, [forceUpdate]);
  return (
    <div
      className="modalContainer hideComponent flexV"
      id="deleteModal"
    >
      <div className="deleteModalContainer flexV">
        <h3>Are you Sure you want delete this Motorcycle ?</h3>
        <div className="confirmationButtonsContainer flexH">
          <button
            id="btnYes"
            className="modalBtn"
            type="button"
            onClick={() => {
              dispatch(deleteMotorcycles({ header: requestHeader, data: itemToDeleteId }));
              setForceUpdate(true);
              // dispatch(deleteMotorcycles(itemToDeleteId));
              hideModal();
            }}
          >
            YES
          </button>
          <button
            id="btnNo"
            className="modalBtn"
            type="button"
            onClick={() => {
              hideModal();
            }}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
