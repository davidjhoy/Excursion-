import React, {useEffect, useState} from 'react';
import '../App.css';
import Weather from './Weather';
import Flights from './Flights';
import {Switch, Route, Link } from "react-router-dom";




function TitleCard({city}) {
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
        
        fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${city}&locale=en-US&per_page=1&page=1`, options)
          .then(response => response.json())
          .then(response => handlePictureGet(response))
          .catch(err => console.error(err));
    
      },[city])
    const renderImages = ()=>{
        return(
          <>
            <img src = {picArray[0]} className="image-edit" />
          </>
        )
      }
    return(
        <div className='overView'>
            <div className = 'justCity'>
                <h1 className='cityTitleFont'>{city}</h1>
                <div className='cityPicture'>
                {renderImages()}
                    <div>
                        <Link id = "flightsLink" to = "/flights">Flights</Link>
                        <Link id = "weatherLink" to = "/weather">Weather</Link>
                        <Link id = "eventsLink" to = "/events">Events</Link>
                    </div>
                </div>
            </div>
            <div className='switchStatements'>
                <Switch>
                    <Route exact path = "/">
                        <h2>{city}</h2>
                    </Route>
                    <Route path = "/flights">
                        <Flights city = {city}/>
                    </Route>
                    <Route path = "/weather">
                        <Weather city ={city} />
                    </Route>
                    <Route path="*">
                        <h2>404 not found</h2>
                    </Route>
                </Switch>
                
            </div>
        </div>
   
        
    
    )
}
export default TitleCard;