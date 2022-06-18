import React, {useEffect, useState} from 'react';
import '../App.css';
import Weather from './Weather';

function App() {
  
  const [city, setCity] = useState('London')
  


  return (
    <div className="App">
      <header className="App-header">
      <Weather city ={city}/>
      
       
      </header>
    </div>
  );
}

export default App;
