import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import axios, { AxiosResponse } from 'axios';
import Header from '@/components/Header';

interface WeatherData {
  name: string;
  country: string;
  dt: number;
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastData {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
  const [locationEntered, setLocationEntered] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const handleSearch = async (location: string) => {
    try {
      const currentWeatherResponse: AxiosResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=metric`);
      setWeatherData(currentWeatherResponse.data);

      const forecastResponse: AxiosResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIKEY}&units=metric`);
      setForecastData(forecastResponse.data.list);

      setLocationEntered(true);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className={styles.main}>
        <div className={styles.scroll}>
          {!locationEntered && (
            <div className={styles.maintext}>
              <h2>Don’t Know The Weather Use <strong>SKY-CAST</strong></h2>
              <ol>
                <li>Search for a location</li>
                <li>Find out the current weather situation, tomorrow’s forecast, or a 6-day forecast</li>
              </ol>
            </div>
          )}
          {weatherData && (
            <div className={styles.container}>
              <div className={styles.left}>
                <h2>{weatherData.name}</h2>
                <p>{weatherData.country}</p>
                <p>Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
              </div>
              <div className={styles.right}>
                <h2>Temperature: {weatherData.main.temp}°C</h2>
                <p>Weather: {weatherData.weather[0].main}</p>
              </div>
            </div>
            
          )}
                    {weatherData && (
            <div className={styles.container}>
              <div className={styles.left}>
                <h2>{weatherData.name}</h2>
                <p>{weatherData.country}</p>
                <p>Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
              </div>
              <div className={styles.right}>
                <h2>Temperature: {weatherData.main.temp}°C</h2>
                <p>Weather: {weatherData.weather[0].main}</p>
              </div>
            </div>
            
          )}
                    {weatherData && (
            <div className={styles.container}>
              <div className={styles.left}>
                <h2>{weatherData.name}</h2>
                <p>{weatherData.country}</p>
                <p>Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
              </div>
              <div className={styles.right}>
                <h2>Temperature: {weatherData.main.temp}°C</h2>
                <p>Weather: {weatherData.weather[0].main}</p>
              </div>
            </div>
            
          )}
                    {weatherData && (
            <div className={styles.container}>
              <div className={styles.left}>
                <h2>{weatherData.name}</h2>
                <p>{weatherData.country}</p>
                <p>Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
              </div>
              <div className={styles.right}>
                <h2>Temperature: {weatherData.main.temp}°C</h2>
                <p>Weather: {weatherData.weather[0].main}</p>
              </div>
            </div>
            
          )}
                    {weatherData && (
            <div className={styles.container}>
              <div className={styles.left}>
                <h2>{weatherData.name}</h2>
                <p>{weatherData.country}</p>
                <p>Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
              </div>
              <div className={styles.right}>
                <h2>Temperature: {weatherData.main.temp}°C</h2>
                <p>Weather: {weatherData.weather[0].main}</p>
              </div>
            </div>
            
          )}
        </div>
      <footer className={styles.footer}>
        <p>Created By : Patrick Hui</p>
        <p>Powered By : <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather</a></p>
      </footer>
      </div>
    </>
  );
}

/*{weatherData && (
  <div>
    <h2>{weatherData.name}</h2>
    <p>Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}</p>
    <p>Temperature: {weatherData.main.temp}°C</p>
    <p>Weather: {weatherData.weather[0].main}</p>
    <p>Wind speed: {weatherData.wind.speed} m/s</p>
  </div>
)}

{forecastData && forecastData.map((forecast, index) => (
  <div key={index}>
    <h3>{new Date(forecast.dt_txt).toLocaleString()}</h3>
    <p>Temperature: {forecast.main.temp.toFixed(1)}°C</p>
    <p>Weather: {forecast.weather[0].main}</p>
    <p>Description: {forecast.weather[0].description}</p>
    <p>Wind speed: {forecast.wind.speed} m/s</p>
  </div>
))}*/