import React, { Component, createContext } from 'react';
import './App.css';

const NameContext = createContext()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chung Nguyen'
    }
  }

  render() {
    return(
      <NameContext.Provider value={this.state.name}>
        <Child/>
      </NameContext.Provider>
    )
  }
}

class Child extends Component {
  render() {
    return(
      <section className="child">
        <Grandchild />
      </section>
    )
  }
}

class Grandchild extends Component {
  render() {
    return(
      <div className="grandchild">
        <Button />
      </div>
    )
  }
}

class Button extends Component {
  render() {
    return(
      <NameContext.Consumer>
        {
          name => <button>{name}</button>
        }
      </NameContext.Consumer>
    )
  }
}

// ThemeContext
// LanguageContext
// TimezoneContext

export default App;
