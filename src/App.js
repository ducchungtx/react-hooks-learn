import React, { createContext, useState, useContext } from 'react';
import './App.css';

const NameContext = createContext()

function App() {
  const [name, setName] = useState('Chung Nguyen');
  return(
    <NameContext.Provider value={name}>
        <Child/>
      </NameContext.Provider>
  )
}

function Child() {
  return(
    <section className="child">
      <Grandchild />
    </section>
  )
}

function Grandchild() {
  return(
    <div className="grandchild">
      <Button />
    </div>
  )
}

function Button() {
  const name = useContext(NameContext);
  return(
    <button>{name}</button>
  )
}

// ThemeContext
// LanguageContext
// TimezoneContext

export default App;
