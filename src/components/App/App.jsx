import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentPage from '../CommentPage/CommentPage';
import SubmitPage from '../SubmitPage/SubmitPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage';
import AdminPage from '../AdminPage/AdminPage';

/* Please refer to FeelingPage for code comments for the following pages
   due to components being almost identical: 
   
   FeelingPage, UnderstandPage, SupportPage, CommentPage */
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        {/* All Page Routes exist in App.jsx
            Back button Links exist inside of each components
            POST exists inside SubmitPage
            GET exists inside AdminPage */}
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
          <Route path="/comment">
            <CommentPage />
          </Route>
          <Route path="/submit">
            <SubmitPage />
          </Route>
          <Route path="/thankYou">
            <ThankYouPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
        </Router>
    </div>
  );
}

export default App;
