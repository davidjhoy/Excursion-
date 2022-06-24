import React, { useEffect, useState } from "react";


function Visited({city}){
    const [cities, setCities] = useState([])
    
    
    useEffect(()=>{
        fetch('http://localhost:3000/cities')
        .then((data)=> data.json())
        .then((json)=> parseData(json))
    
    },[city])
       

    const parseData = (data) =>{
        const cityArr = []
        data.map((item)=>{
            cityArr.push(item.city);
        })
        setCities(cityArr)
    }
    

    return(
        <>
            <h1>Visited Cities:</h1>
            {cities.map((item)=>{
            return(
                <h2 key = {city}>{item}</h2>
            )
             })}
        </>
    )
}


export default Visited;