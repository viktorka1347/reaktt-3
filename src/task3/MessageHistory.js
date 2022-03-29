import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';
import Mess from './data/Mess';

function MessageHistory(props) {
  const { list } = props;

  const messages = list.map(({ id, from, type, time, text }) => {
    switch (type) {
      case 'message':
        return <Message from={from} message={{ time, text }} key={id} />;
      case 'response':
        return <Response from={from} message={{ time, text }} key={id} />; 
      case 'typing':
        return <Typing from={from} message={{ time }} key={id} />; 
      default:
        return false;  
    }
  });

  return !!messages.length && <ul>{messages}</ul>;
}

MessageHistory.defaultProps = {
  list: []
}; 

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(Mess)).isRequired
};

export default MessageHistory;