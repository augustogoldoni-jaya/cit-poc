import React from 'react';
import WebmdStore from './WebmdStore';
import SicklecellStore from './SicklecellStore';
import {ThemeContext} from './theme-context';
import {sicklecell} from './SicklecellContext'
import {webmd} from './WebmdContext'

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

    const actual = Store == SicklecellStore ? sicklecell : webmd

    return (
      <div>
        <ThemeContext.Provider value={actual}>
            <Store/>
        </ThemeContext.Provider>
      </div>
    )
  }
};

export default App;
