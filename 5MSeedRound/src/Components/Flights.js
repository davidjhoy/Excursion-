// import React, {useEffect, useState} from 'react';
// import '../App.css';



// function Flights({city}){
// const [homeCity, setHomeCity] = useState('');
// const [inputCity, setInputCity] = useState('');
// const [fromLocation, setFromLocation] = useState('');
// const [toLocation, setToLocation] = useState('');
// const[airlineName1, setAirlineName1] = useState('');
// const [airlineName2, setAirlineName2] = useState('');
// const [airlinePrice1, setAirlinePrice1] = useState('');
// const [airlinePrice2, setAirlinePrice2] = useState('');


// const handleSubmit = (e)=>{
//     e.preventDefault()
//     setHomeCity(inputCity)
//     //this needs to make the initial call to get the airport codes. 
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
//         'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
//       }
//     };
    
//     fetch(`https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=${city}`, options)
//       .then(response => response.json())
//       .then(response => setFromLocation(response[0].id))
//       .catch(err => console.error(err));
    
//     fetch(`https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=${inputCity}`, options)
//     .then(response => response.json())
//     .then(response => setToLocation(response[0].id))
//     .catch(err => console.error(err));


//   }


// const handleChange = (e)=>{
//     setInputCity(e.target.value)
//   }

// const parsePrices = (airline, summary)=>{
//   setAirlineName1(airline[0].name)
//   setAirlineName2(airline[1].name)

//   summary.map((item)=>{
//     if(item.code === airline[0].code){
//       setAirlinePrice1(item.lowestTotalFare.amount)
      
//     }else if (item.code === airline[1].code){
//       setAirlinePrice2(item.lowestTotalFare.amount)
//     }
//     return true;
//   })

// }
// const handeFlightPrices = (e)=>{
//   e.preventDefault()
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
//       'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
//     }
//   };
//   console.log(toLocation);
//   console.log(fromLocation)

//   fetch(`https://priceline-com-provider.p.rapidapi.com/v1/flights/search?itinerary_type=ONE_WAY&class_type=ECO&location_arrival=${toLocation}&date_departure=2022-11-15&location_departure=${fromLocation}&sort_order=PRICE&price_max=20000&number_of_passengers=1&duration_max=2051&price_min=100&date_departure_return=2022-11-16`, options)
//     .then(response => response.json())
    
//     .then(response => parsePrices(response.airline, response.totalTripSummary.airline))
//     .catch(err => console.error(err));

// }





//     return(
//         <div className='flightParent'>
//             <h1>Flights from {inputCity} to {city}</h1>
//             <h3>HomeCity:</h3>
//             <form onSubmit = {handleSubmit}>
//                 <input 
//                 type = "text"
//                 id = "flightCityInput"
//                 value = {inputCity}
//                 onChange = {handleChange}/>
//                 <button>Submit</button> 
//             </form>
//             <h3>Price:</h3>
//             <button onClick={handeFlightPrices}>See Prices...</button>

//             <div className = 'airlinePrices'>
//               <div id = 'firstFlight'>
//                 <h3>{airlineName2}</h3>
//                 <h3>$ {airlinePrice1}</h3>
//               </div>
//               <div id = 'secondFlight'>
//                 <h3>{airlineName2}</h3>
//                 <h3>$ {airlinePrice2}</h3>
//               </div>
//             </div>
           
//         </div>
        
//     )
// }

// export default Flights;