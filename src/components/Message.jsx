import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="messageContainer flexV">
    {message.length > 0 ? <h4 className="content">{message}</h4> : <h4 className="content">{' '}</h4>}
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Message;
