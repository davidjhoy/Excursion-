import React, {useEffect, useState} from 'react';
import '../App.css';
import Weather from './Weather';
import Flights from './Flights';
import Photos from './Photos';


function App() {
  const[inputCity, setInputCity] = useState('')
  const [city, setCity] = useState('Miami')
  const [picArray, setPicArray] = useState([])
  
  const handlePictureGet =(response)=>{
    //map through the array and return photo URLS; 
    
   let intermediateArray = []
   console.log(response)
   response.photos.map((photo)=>{
    intermediateArray.push(photo.src.medium);
   })
    setPicArray(intermediateArray)
    

  }

  const handleCityChange = (e)=>{
    e.preventDefault()
    setCity((inputCity))

  }
  const handleChange = (e)=>{
    setInputCity(e.target.value)
  }

  useEffect(()=>{
    
    const options = {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Authorization": '563492ad6f9170000100000132891a3cc620473596b9e673b4393767',
        'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
        'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
      }
    };
    
    fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${city}&locale=en-US&per_page=4&page=1`, options)
      .then(response => response.json())
      .then(response => handlePictureGet(response))
      .catch(err => console.error(err));

  },[city])
  




  return (
    <div className="App">
      <header className="App-header">
        <div><button>Flights</button>
        <button>Weather</button>
        <button>Events</button></div>
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

      <div className = "bodyContainer">
        <Weather city ={city}/>
        <Flights city ={city}/>
        <img src = {picArray[0]} />
        <img src = {picArray[1]} />
        <img src = {picArray[2]} />
        <img src = {picArray[3]} />
      </div>
        
    </div>
  );
}

export default App;
