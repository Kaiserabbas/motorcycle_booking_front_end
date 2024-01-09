import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftButton = () => (
  <div className="mainButton flexV">
    <div className="buttonContainerLeft flexH">
      <button type="button" aria-label="Left"><FontAwesomeIcon icon={faCaretLeft} id="leftIcon" /></button>
    </div>
  </div>
);

export default LeftButton;
