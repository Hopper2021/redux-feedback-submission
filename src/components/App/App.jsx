import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form>
        <div className="question-div">
          <h1>How are you feeling today?</h1>
          <div className="input-div">
            <p>Feeling?</p>
            <input type="number" />
            <button>Next</button>
          </div>
        </div>
        <div className="question-div">
          <h1>How well are you understanding the content?</h1>
          <div className="input-div">
            <p>Understanding?</p>
            <input type="number" />
            <button>Next</button>
          </div>
        </div>
        <div className="question-div">
          <h1>How well are you being supported?</h1>
          <div className="input-div">
            <p>Support?</p>
            <input type="number" />
            <button>Next</button>
          </div>
        </div>
        <div className="question-div">
          <h1>Any comments you want to leave?</h1>
          <div className="input-div">
            <p>Comments?</p>
            <input type="number" />
            <button>Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
