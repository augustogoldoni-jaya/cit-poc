import React, { Component } from 'react';
import {ThemeContext} from './DefaultContext';

class DefaultStore extends Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <div {...props} style={{fontSize: theme.fontSize, color: theme.color}}>
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

DefaultStore.contextType = ThemeContext;

export default DefaultStore;
