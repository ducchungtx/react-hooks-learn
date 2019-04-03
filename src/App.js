import React, { useState } from 'react';
import './App.css';

function App() {
  const [ city, setCity ]  = useState('');
  const [ country, setCountry ]  = useState('');

  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  return(
    <form>
      <div>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div>
        You live in { `${city}, ${country}` }
      </div>
    </form>
  )
}

export default App;
