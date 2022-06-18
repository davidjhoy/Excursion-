import React, {useEffect, useState} from 'react';
import '../App.css';
import Weather from './Weather';

function App() {
  const[inputCity, setInputCity] = useState('')
  const [city, setCity] = useState('Miami')
  
  const handleCityChange = (e)=>{
    e.preventDefault()
    setCity(inputCity)
  }
  const handleChange = (e)=>{
    setInputCity(e.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleCityChange}>
        <input
        type ="text"
        id = "cityInput"
        value ={inputCity}
        onChange ={handleChange}
        />
        <button>Here</button>
        </form>
      <Weather city ={city}/>
      {/* <Flights city ={city}/> */}
       
      </header>
    </div>
  );
}

export default App;
