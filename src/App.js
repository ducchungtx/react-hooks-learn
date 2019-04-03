import React, { useState } from 'react';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    city: '',
    country: ''
  });

  const handleCityChange = (e) => setState({ ...state, city: e.target.value });
  const handleCountryChange = (e) => setState({ ...state, country: e.target.value });

  return(
    <form>
      <div>
        <input
          type="text"
          placeholder="City"
          value={state.city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          value={state.country}
          onChange={handleCountryChange}
        />
      </div>
      <div>
        You live in { `${state.city}, ${state.country}` }
      </div>
    </form>
  )
}

export default App;
