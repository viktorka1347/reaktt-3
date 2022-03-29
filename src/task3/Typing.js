import PropTypes from 'prop-types';

function Typing(props) {
  const { from, message } = props;
  const { name } = from;
  const { time } = message;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{name}</span>
        <i className="fa fa-circle me">{' \u25cf'}</i>
      </div>
      <div className="align-right">
        <i className="fa fa-circle me">{' \u25cf'}</i>
        <i className="fa fa-circle me fa-05">{' \u25cf'}</i>
        <i className="fa fa-circle me fa-025">{' \u25cf'}</i>        
      </div>
    </li>
  );
}
 
Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string
  }).isRequired
};

export default Typing;