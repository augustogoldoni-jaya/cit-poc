import React from 'react';
import WebmdStore from './WebmdStore';
import SicklecellStore from './SicklecellStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      domain: window.location.hostname
    };
  }
  
  render() {
    let Store = function(domain) {
        switch (domain) {
        case 'webmd.tech':
          return WebmdStore;
        case 'sicklecell.tech':
          return SicklecellStore;
        default:
          return SicklecellStore;
      }
    }(this.state.domain);

    return <Store />;
  }
};

export default App;