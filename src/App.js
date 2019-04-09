import React, { useState } from 'react';
import './App.css';

function useCounter(startingValue) {
  const [count, setCount] = useState(startingValue);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease= () => setCount(count - 1);
  const handleReset = () => setCount(0);
  return {
    handleIncrease,
    handleDecrease,
    handleReset,
    count
  }
}

function Display(props) {
  const { count, handleDecrease, handleIncrease, handleReset } = useCounter(props.start);
  return(
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

function FancyDisplay(props) {
  const { count, handleDecrease, handleIncrease, handleReset } = useCounter(props.start);
  return(
    <section>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h2>{count}</h2>
    </section>
  )
}

function App() {
  return(
    <div>
      <Display start={10} />
      <Display start={20} />
      <FancyDisplay start={30}/>
    </div>
  )
}

export default App;
