import React from 'react';
import {ThemeContext} from './DefaultContext';
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

    const Config = StoresMap.find((x) =>  x.Domain === domain );
    const actual = Config.Context;
    const Store = Config.Component;

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
