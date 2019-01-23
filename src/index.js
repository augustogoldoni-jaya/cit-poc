import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebmdApp from './WebmdApp';
import SicklecellApp from './SicklecellApp';
import * as serviceWorker from './serviceWorker';

const domain = window.location.hostname;

const App = ((domain) => {
  switch (domain) {
    case 'webmd.tech':
      return WebmdApp;
    case 'sicklecell.tech':
      return SicklecellApp;
    default:
      return SicklecellApp;
  }
})(domain);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
