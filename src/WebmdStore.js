import React, { Component } from 'react';
import { ThemeContext } from './WebmdContext';

class WebmdStore extends Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <div {...props} style={{fontSize: theme.fontSize, color: theme.color}}>
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

WebmdStore.contextType = ThemeContext;

export default WebmdStore;
