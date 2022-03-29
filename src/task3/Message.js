import PropTypes from 'prop-types';

function Message(props) {
  const { from, message } = props;
  const { name } = from;
  const { time, text } = message;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{name}</span>
        <i className="fa fa-circle me">{' \u25cf'}</i>
      </div>
      <div className="message other-message float-right">
        {text}
      </div>
    </li>
  );
}

Message.defaultProps = {
  text: ''
}; 

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Message;