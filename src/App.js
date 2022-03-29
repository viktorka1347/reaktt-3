import './App.css';
import Stars from './task1/Stars';
import Listing from './task2/Listing';
import data from './task2/data';
import MessageHistory from './task3/MessageHistory';
import messages from './task3/data/messages';

function App() {
  return (
    <div> 
      <div className="task-1">  
        <Stars count={1} />
        <Stars count={2} />
        <Stars count={3} />
        <Stars count={4} />
        <Stars count={5} />
      </div>
      <div className="task-2">
        <Listing items={data} />
      </div>
      <div className="task-3">
        <div className="clearfix container">
          <div className="chat">
            <div className="chat-history">
              <MessageHistory list={messages} />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;