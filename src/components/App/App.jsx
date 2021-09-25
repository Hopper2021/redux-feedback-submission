import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentPage from '../CommentPage/CommentPage';
import SubmitPage from '../SubmitPage/SubmitPage';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form>
        <Router>
          <Route>
            <FeelingPage />
          </Route>
          <Route>
            <UnderstandingPage />
          </Route>
          <Route>
            <SupportedPage />
          </Route>
          <Route>
            <CommentPage />
          </Route>
          <Route>
            <SubmitPage />
          </Route>
          <Route>
            <ThankYouPage />
          </Route>
        </Router>
      </form>
    </div>
  );
}

export default App;
