import React from 'react';
import "./results.css";



const Results = ({ currentWeather }) => {


    return (
        <div className="results">
            <h4 className="result">City: {currentWeather?.name}</h4>
            <h4 className="result">Description: {currentWeather?.weather[0].description}</h4>
            <h4 className="result">Temperature: {currentWeather?.main.temp}°C</h4>
            <h4 className="result">Feels like: {currentWeather?.main.feels_like}°C</h4>
            <h4 className="result">Wind Speed: {currentWeather?.wind.speed}</h4>
            <h4 className="result">Humidity: {currentWeather?.main.humidity}%</h4>
        </div>
    );
};



export default Results;