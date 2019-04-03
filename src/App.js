import React, { useState } from 'react';
import './App.css';

function App() {
  // useState sẽ trả về một array có chứa 2 item
  // một là giá trị 2 là hàm để set lại giá trị
  const [ activated, setActivated ] = useState(false);
  const buttonText = activated ? 'Active' : 'Inactive';
  const onClick = () => setActivated(!activated);
  return(
    <button onClick={onClick}>{ buttonText }</button>
  )
}

export default App;
