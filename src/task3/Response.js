import PropTypes from 'prop-types';

function Response(props) {
  const { from, message } = props;
  const { name } = from;
  const { time, text } = message;
   
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online">{'\u25cf'}</i> {name}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {text}
      </div>
    </li>
  );
}

Response.defaultProps = {
  text: ''
};

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Response;