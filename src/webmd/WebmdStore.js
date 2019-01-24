import React, { Component } from 'react';

class WebmdStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: props.config
    };
  }
  
  render() {
    const { ThemeContext } = this.state.config;

    return (
      <ThemeContext.Consumer>
        {context => context && <div>
          {context.fontSize}
          <br/>
          {context.color}
            <div style={{ fontSize: context.fontSize, color: context.color}}>
              <h1>Hello World WebMD!</h1>
              <span>Unsupported states: NY, AK, OH</span>
              <form>
                <input type="text" name="name"/>
                <label>Zipcode</label>
                <input type="submit" />
              </form>
            </div>
          </div>
        }
      </ThemeContext.Consumer>
    );
  }
}

export default WebmdStore;
