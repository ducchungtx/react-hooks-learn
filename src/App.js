import React, { useState, useEffect } from 'react';
import './App.css';

function App() { 
  const [userText, setUserText] = useState('');
  function handUserKeyPress(event) {
    const { key, keyCode } = event;
    if(keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`)
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handUserKeyPress)
    }
  })

  return(
    <div>
      <h1>Feel free to type! Your text will show up below!</h1>
      <blockquote>
        { userText }
      </blockquote>
    </div>
  )
}

export default App;
