import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightButton = () => (
  <div className="mainButton flexV">
    <div className="buttonContainerRight flexH">
      <button type="button">
        <FontAwesomeIcon icon={faCaretRight} id="rightIcon" />
        {' '}
      </button>
    </div>
  </div>
);

export default RightButton;
