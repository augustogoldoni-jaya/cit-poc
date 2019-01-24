import React, { Component } from 'react';
import styled from "styled-components"

const Container = styled.div`
  background-color: ${props => props.context.color};
  font-size: ${props => props.context.fontSize};
`

class DefaultStore extends Component {
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
          <Container context={context}>
            <h1>Hello World Default!</h1>
            <form>
              <input type="text" name="address"/>
              <label>Address</label>
              <input type="submit" />
            </form>
          </Container>
        </div>
        }
      </ThemeContext.Consumer>
    );
  }
}



export default DefaultStore;
