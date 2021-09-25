import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentPage from '../CommentPage/CommentPage';
import SubmitPage from '../SubmitPage/SubmitPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <Router>
          <Route exact path="/">
            <FeelingPage />
          </Route>
          <Route path="/understanding">
            <UnderstandingPage />
          </Route>
          <Route path="/supported">
            <SupportedPage />
          </Route>
          <Route path="comment">
            <CommentPage />
          </Route>
          <Route path="submit">
            <SubmitPage />
          </Route>
          <Route path="thankYou">
            <ThankYouPage />
          </Route>
        </Router>
    </div>
  );
}

export default App;
