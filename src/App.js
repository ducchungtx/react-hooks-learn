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
  const { value: name, onChange: handleNameChange } = useInput()
  const { value: surname, onChange: handleSurnameChange } = useInput()
  const { value: age, onChange: handleAgeChange } = useInput()
  return(
    <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="SurName"
        value={surname}
        onChange={handleSurnameChange}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
    </form>
  )
}

export default App;
