import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <SocialIcon url="https://linkedin.com/jaketrent" 
      />
      <SocialIcon url="https://reddit.com/jaketrent"
      />
      <SocialIcon url="https://instagram.com/jaketrent"
      />
      <SocialIcon url="https://facebook.com/
      jaketrent"
      />
      <SocialIcon url="https://github.com/
      jaketrent"
      />
    </Router>
  </React.StrictMode>, 
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
