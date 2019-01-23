import React from 'react';
import {ThemeContext} from './theme-context';
import {StoresMap} from './Store'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: window.location.hostname
    };
  }

  render() {
    const { domain } = this.state;
    const actual = StoresMap[domain].Context;
    const Store = StoresMap[domain].Component;

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
