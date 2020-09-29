import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AirplaneCard from './airplaneCard';

export default function AirportPage() {
    const [airplane, setAirplane] = useState([]);
  
    const effectFn = () => {
            axios
            .get('https://opensky-network.org/api/states/all/')
            .then(response => {
              console.log(response.data.states)
              setAirplane(response.data.states)
            })
            .catch((error) => console.log("error"));
          }

useEffect(effectFn);

    return (
        <div className='character'>
        {airplane.map((airplane) => {
          return <AirplaneCard key={airplane[0]}
                    flight={airplane[1]}
                    country={airplane[2]}
                    latitude={airplane[6]}
                    longitude={airplane[5]}
                     />
        })};
      </div>
    )
}