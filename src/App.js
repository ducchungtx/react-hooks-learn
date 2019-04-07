import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease= () => setCount(count - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    console.log(`I'm in useEffect. I will only run upon mounting. The current count is ${count}`);
    return () => {
      console.log(`I'm removing anything that was setup above! The last count was ${count}. But now, I will onlu run when component is being unmounted`)
    }
  }, [])

  return(
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

function App() {
  const [ visible, setVisible ] = useState(false)

  return(
    <div>
      <button onClick={() => setVisible(!visible)}>Show / Hide Counter component</button>
      { visible && <Counter /> }
    </div>
  )
}

export default App;
