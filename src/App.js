import React from 'react';
import { ThemeContext } from './DefaultContext';
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
    console.log(StoresMap);
    const Config = StoresMap.find((x) =>  x.Domain === domain );
    const Store = Config.Component;

    return (
      <div>
        <ThemeContext.Provider value={Config.Context}>
          <Store/>
        </ThemeContext.Provider>
      </div>
    )
  }
};

export default App;
