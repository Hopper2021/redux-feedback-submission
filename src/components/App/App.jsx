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
        <div className="question-container">
          <h1>How are you feeling today?</h1>
          <div className="input-div">
            <p className="input-question">Feeling?</p>
            <input type="number" />
            <button className="next-button">Next</button>
          </div>
        </div>
        <div className="question-container">
          <h1>How well are you understanding the content?</h1>
          <div className="input-div">
            <p className="input-question">Understanding?</p>
            <input type="number" />
            <button className="next-button">Next</button>
          </div>
        </div>
        <div className="question-container">
          <h1>How well are you being supported?</h1>
          <div className="input-div">
            <p className="input-question">Support?</p>
            <input type="number" />
            <button className="next-button">Next</button>
          </div>
        </div>
        <div className="question-container">
          <h1>Any comments you want to leave?</h1>
          <div className="input-div">
            <p className="input-question">Comments?</p>
            <input type="number" />
            <button className="next-button">Next</button>
          </div>
        </div>
        <div className="review-container">
          <h1>Review Your Feedback</h1>
          <p>Feelings:</p>
          <p>Understanding:</p>
          <p>Support:</p>
          <p>Comments:</p>
          <button className="submit-button">Submit</button>
        </div>
        <div className="thank-you-container">
          <h1>Feedback!</h1>
          <div>
            <h1 className="feedback-thank-you">Thank you!</h1>
            <button>Leave New Feedback</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
