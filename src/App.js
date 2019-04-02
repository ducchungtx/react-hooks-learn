import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actived: false
    };
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  handleActiveChange() {
    this.setState((prevState) => {
      return{
        actived: !prevState.actived
      }
    });
  }

  render() {
    const buttonText = this.state.actived ? this.props.activeText : this.props.inactiveText;
    return(
      <button onClick={this.handleActiveChange}>
        {buttonText}
      </button>
    )
  }
}

class App extends Component {
  render() {
    return(
      <Button
        activeText="ON"
        inactiveText="OFF"
      />
    )
  }
}

export default App;
