import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightButton= ()=>{
    return(
        <div className="mainButton flexV">
        <div className="buttonContainerRight flexH">
        <button>{<FontAwesomeIcon icon={faCaretRight} id="rightIcon"/>}</button>
            </div>
        </div>
    )
};

export default RightButton;
