import React from 'react';
import { StoresMap } from './StoresMap'

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
    const Store = Config.Component;
    const ThemeContext = Config.ThemeContext;

    return (
      <div>
        <ThemeContext.Provider value={Config.Context}>
          <Store config={Config}/>
        </ThemeContext.Provider>
      </div>
    )
  }
};

export default App;
