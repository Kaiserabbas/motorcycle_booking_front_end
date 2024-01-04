import axios from 'axios';
import { motorclesPath, requestHeader } from '../urls';

const hideModal = () => {
  document.querySelector('#deleteModal').classList.add('hideComponent');
  document.querySelector('.bodyContainer').classList.remove('hiddenScroll');
};

const deleteMotorcycle = async () => {
  try {
    const result = axios.delete(motorclesPath.concat('/3'), requestHeader);
    console.log(result.data);
    hideModal();
    alert('apagado com sucesso!');
  } catch (error) {
    console.log(error);
  }
};

const DeleteModal = () => (
  <div
    className="modalContainer hideComponent flexV"
    id="deleteModal"
  >
    <div className="deleteModalContainer flexV">
      <h3>Are you Sure you want delete this Motorcycle ?</h3>
      <div className="confirmationButtonsContainer flexH">
        <button id="btnYes" className="modalBtn" type="button" onClick={deleteMotorcycle}>YES</button>
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

export default DeleteModal;
