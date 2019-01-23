import React, { Component } from 'react';
import themes from './StoreThemes'

let ThemeContext = React.createContext('sicklecell');

class SicklecellStore extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello World Sicklecell!</h1>
          <form>
            <input type="text" name="address"/>
            <label>Address</label>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SicklecellStore;
