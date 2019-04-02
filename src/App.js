import React, { Component } from 'react';
import './App.css';

function Box(props) {
  return(
    <div>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

function App() {
  return(
    <Box 
      text="Hi, Boris"
      subtitle="I love React!"
    />
  )
}

export default App;
