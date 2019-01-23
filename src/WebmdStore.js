import React, { Component } from 'react';
import themes from './StoreThemes'

let ThemeContext = React.createContext('webmd');

class WebmdStore extends Component {
  render() {
    return (
      <div>
        <h1>Hello World WebMD!</h1>
        <span>Unsupported states: NY, AK, OH</span>
        <form>
          <input type="text" name="name"/>
          <label>Zipcode</label>
          <input type="submit" />
        </form>  
      </div>
    );
  }
}

export default WebmdStore;
