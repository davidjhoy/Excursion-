import React, {useEffect, useState} from 'react';
import '../App.css';
import TitleCard from './TitleCard';
import {Switch, Route } from "react-router-dom";


function App() {
  const[inputCity, setInputCity] = useState('')
  const [city, setCity] = useState('Miami')
 
  

  

  const handleCityChange = (e)=>{
    e.preventDefault()
    setCity((inputCity))

    fetch('  http://localhost:3000/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {id: Math.random(),
        city: inputCity}
      )

    })

  }
  const handleChange = (e)=>{
    setInputCity(e.target.value)
  }


  




  return (
    <div className="App">
      <header className="App-header">
        <h3>Pick a City!</h3>
        <form onSubmit={handleCityChange}>
          <input
          type ="text"
          id = "cityInput"
          value ={inputCity}
          onChange ={handleChange}
          />
          <button>Submit</button>
        </form>
        
      </header>
      <TitleCard city = {city}/>
      
      
        
      
        
    </div>
  );
}

export default App;
