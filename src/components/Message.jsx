import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="messageContainer flexV">
    <h4 className="content">{message}</h4>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Message;
