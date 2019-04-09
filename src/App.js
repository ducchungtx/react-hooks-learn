import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const userText = useKeyPress('Once upon a time...');
  return(
    <div>
      <h1>Feel free to type! Your text will show up bellow!</h1>
      <blockquote>
        { userText }
      </blockquote>
    </div>
  )
}

function useKeyPress(startingValue) {
  const [userText, setUserText] = useState(startingValue);
  function handUserKeyPress(event) {
    const { key, keyCode } = event;
    if(keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`)
    }
  }
  // Component lifecycle
  useEffect(() => {
    window.addEventListener('keydown', handUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handUserKeyPress)
    }
  })
  return userText;
}

export default App;
