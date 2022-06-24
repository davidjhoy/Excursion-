// import React, { useEffect, useState } from "react";


// function Hotel ({ city }){
//     const [hotels, setHotels] = useState(false)

//     const [hotel1, setHotel1] = useState({
//         name:"",
//         ratesSummary:{
//             minPrice:""
//         },
//         thumbnailUrl:""
//     })

//     const [hotel2, setHotel2] = useState({
//         name:"",
//         ratesSummary:{
//             minPrice:""
//         },
//         thumbnailUrl:""
//     })
 

//     const optionsId = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
//             'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
//         }
//     };

//     useEffect(() => { 
//     fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${city}&search_type=ALL`, optionsId)
//         .then(response => response.json())
//         .then(response => handleResponseId(response[0].id))
//         .catch(err => console.error(err));
//     }, [city])

//     function handleResponseId(id){

//         const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'cbd3654cbamshbad79803137a4fcp17e689jsn68013eecbb0d',
//             'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
//         }
//     };

//         fetch(`https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=HDR&location_id=${id}&date_checkout=2022-11-16&date_checkin=2022-11-15&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&rooms_number=1&amenities_ids=FINTRNT%2CFBRKFST`, options)
//         .then((response) => response.json())
//         .then ((data) => iterateHotels(data.hotels))
        
// } 

//     function iterateHotels(hotelsArray){
//         setHotel1(hotelsArray[0])
//         setHotel2(hotelsArray[1])
//         setHotels(true)
//     }
    

//     return (
//         <div>
//             <h1 className='hotelTitle'>Hotels in { city }</h1>
//             <div className='hotelParent'>
//             <div id='hotelOne'>
//                 <h4>{ hotels ? hotel1.name : "Loading..." }</h4>
//                 <img src={ hotels ? (hotel1.thumbnailUrl) : "Loading..." } />
//                 <h5>Price: { hotels ? (hotel1.ratesSummary.minPrice) : "Loading..." }</h5>
//             </div>
//             <div id='hotelTwo'>
//                 <h4>{ hotels ?  hotel2.name : "Loading..." }</h4>
//                 <img src={ hotels ? hotel2.thumbnailUrl : "Loading..." } />
//                 <h5>Price: { hotels ?  (hotel2.ratesSummary.minPrice)  : "Loading..." }</h5>
//             </div>
//             </div>
//         </div>
        
//     )

// }

// export default Hotel;









