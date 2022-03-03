import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';
import './controller.css';


const API = {
    link: "http://api.openweathermap.org/data/2.5/weather?",
    key: "&appid=a9987845c80c933c697521142e6fce7e&units=metric"
};




const Controller = () => {

    // Store city and current weather in state
    const [city, setCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState();

    // Store current longitute and latitude in state
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);


    // Request the current weather for a city
    const fetchWeather = async () => {
        // Fetch results
        const { data } = await axios.get(API.link + "q=" + city + API.key);
        // Store in state
        setCurrentWeather(data);
    };


    // Request GeoLocation when App is rendered
    useEffect(() => {
        const fetchLongAndLat = async () => {
            // Store current geo location in state
            navigator.geolocation.getCurrentPosition(async (position) => {
                setLong(position.coords.longitude);
                setLat(position.coords.latitude);
            });
        };
        fetchLongAndLat();
    }, []);


    const fetchCurrentCityWeather = async () => {
        // Fetch results
        const { data } = await axios.get(API.link + "lat=" + lat + "&lon=" + long + API.key);
        // Store in state
        setCurrentWeather(data);
    }
    
    

    return (
        <div className="controller">

            {/* City Input */}
            <input placeholder='City Name' className='cityInput' type="text" value={city} onChange={(e) => setCity(e.target.value)} />

            {/* City Search Button */}
            <button className="requestButton" onClick={fetchWeather}>Request Weather</button>
            
            {/* Current Location Button */}
            <button className="cityButton" onClick={fetchCurrentCityWeather}>Current Location</button>

            {/* Display results if stored in state */}
            {currentWeather && <Results currentWeather={currentWeather} />}
        </div>
    );
};



export default Controller;