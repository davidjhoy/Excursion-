import React, {useEffect, useState} from 'react';
import '../App.css';



function Flights({city}){
const [homeCity, setHomeCity] = useState('');
const [inputCity, setInputCity] = useState('London');
const [fromAirport, setFromAirport] = useState('');
const [toAirport, setToAirport] = useState('');
let date = new Date().toISOString().slice(0, 10)

let tomorrow = "2022-07-19";



const handleSubmit = (e)=>{
    e.preventDefault()
    setHomeCity(inputCity)
    // Here I need to make an API call to find an airport in this city. 
    // then setFromAirport(return from this call)
   
            const url = `https://flight-fare-search.p.rapidapi.com/v2/flight/?from=${fromAirport}&to=${toAirport}&date=${tomorrow}&adult=1&type=economy&currency=USD`;
        
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
                'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
              }
            };
            
            fetch(url, options)
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.error('error:' + err));
          
  }

const handleChange = (e)=>{
    setInputCity(e.target.value)
  }

useEffect(()=>{
const toUrl = `https://aerodatabox.p.rapidapi.com/airports/search/term?q=${city}&limit=1`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
  }
};

fetch(toUrl, options)
	.then(res => res.json())
	.then(json => setToAirport(json.items[0].iata))
	.catch(err => console.error('error:' + err));

},[city])





    return(
        <div className='flightParent'>
            <h1>Flights from {inputCity} to {city}</h1>
            <h3>HomeCity:</h3>
            <form onSubmit = {handleSubmit}>
                <input 
                type = "text"
                id = "flightCityInput"
                value = {inputCity}
                onChange = {handleChange}/>
                <button>Submit</button> 
            </form>
            <h3>Prices:</h3>
        </div>
        
    )
}

export default Flights;