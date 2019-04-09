import React, { useState } from 'react';
import './App.css';

function useInput() {
  const [value, setValue] = useState('')
  function onChange(event) {
    setValue(event.target.value);
  }
  return {
    value,
    onChange
  }
}

function App() {
  return(
    <form>
      <input
        type="text"
        placeholder="Name"
        { ...useInput() }
      />
      <input
        type="text"
        placeholder="SurName"
        { ...useInput() }
      />
      <input
        type="text"
        placeholder="Age"
        { ...useInput() }
      />
    </form>
  )
}

export default App;
