import React, {useEffect, useState} from 'react';
import '../Weather.css';

function Weather({city}){
const[dayOneForecast, setDayOneForecast] = useState({
    
    date: "",
    day:{}
    
})
const[dayTwoForecast, setDayTwoForecast] = useState({
    
    date: "",
    day:{}
    
})
const[dayThreeForecast, setDayThreeForecast] = useState({
    
    date: "",
    day:{}
    
})
const[gotTemp, setGotTemp] = useState(false)
const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;



    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const helperFunction = (json)=>{
    setDayOneForecast(json.forecast.forecastday[0])
    setDayTwoForecast(json.forecast.forecastday[1])
    setDayThreeForecast(json.forecast.forecastday[2])
    setGotTemp(true)
  }

  useEffect(()=>{
  fetch(url, options)
	.then(res => res.json())
	.then((json) => helperFunction(json))
	.catch(err => console.error('error:' + err));
  },[city])
  

    return(
    <div className = "weatherParent">
        <h2 className='weatherTitle'>{city} 3 Day Forecast:</h2>
        <h3>{gotTemp ? dayOneForecast.day.avgtemp_f : "loading ..."} F</h3>
        <h3>{gotTemp ? dayTwoForecast.day.avgtemp_f : "loading ..."} F</h3>
        <h3>{gotTemp ? dayThreeForecast.day.avgtemp_f : "loading ..."} F</h3>
     
        
    </div>
    )

}

export default Weather;