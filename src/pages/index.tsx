import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import axios, { AxiosResponse } from 'axios';
import Header from '@/components/Header';

interface WeatherData {
  name: string;
  sys: {
    country: string;
  }
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
      const currentWeatherResponse: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=942515143e6a5df04a3a931b3baf05b9&units=metric`);
      setWeatherData(currentWeatherResponse.data);

      const forecastResponse: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=942515143e6a5df04a3a931b3baf05b9&units=metric`);
      setForecastData(forecastResponse.data.list);

      setLocationEntered(true);
    } catch (error: any) {
      console.error(error);
    }
  };

  const groupForecastByDay = () => {
    if (!forecastData) return [];
    const groupedForecast: { [key: string]: ForecastData[] } = {};

    forecastData.forEach(forecast => {
      const date = forecast.dt_txt.split(' ')[0]; 
      if (!groupedForecast[date]) {
        groupedForecast[date] = [];
      }
      groupedForecast[date].push(forecast);
    });

    return Object.entries(groupedForecast).map(([date, dailyForecast]) => ({
      date,
      dailyForecast,
    }));
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
                  <li>Find out the current weather situation, tomorrow’s forecast, or a 5-day forecast</li>
                </ol>
              </div>
            )}
            {weatherData && (
              <div className={styles.container}>
                <div className={styles.left}>
                  <h2><strong>{weatherData.name}</strong></h2>
                  <p> <strong>Country:</strong> {weatherData.sys.country}</p>
                  <p> <strong>Last updated:</strong> {new Date(weatherData.dt * 1000).toLocaleString()}</p>
                </div>
                <div className={styles.right}>
                  <h2><strong>Temperature:</strong> {weatherData.main.temp}°C</h2>
                  <p><strong>Wind speed: </strong>{weatherData.wind.speed} m/s</p>
                  <p><strong>Weather:</strong> {weatherData.weather[0].main}</p>
                </div>
              </div>
            )}
            {forecastData && groupForecastByDay().map((group, index) => (
              <div key={index} className={styles.container2}>
                <h2><strong>{group.date}</strong></h2>
                <div className={styles.fiveboxes}>
                  {group.dailyForecast.map((forecast, idx) => (
                    <div key={idx} className={styles.weathercontainer}>
                      <div>
                      {forecast.weather[0].main === 'Clear' && <img src= "/Icons/sunny.svg" alt="Sunny" />}
                        {forecast.weather[0].main === 'Rain' && <img src= "/Icons/rainy.svg" alt="Rainy" />}
                        {forecast.weather[0].main === 'Clouds' && <img src= "/Icons/cloudy.svg" alt="Cloudy" />}
                        <p><strong>Weather Condition:</strong> {forecast.weather[0].main}</p>
                      </div>
                      <div>
                        <p><strong>Time:</strong> {new Date(forecast.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                        <p><strong>Temperature:</strong> {forecast.main.temp.toFixed(1)}°C</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className={styles.footer}>
          <p>Created By : Patrick Hui</p>
          <p>Powered By : <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather</a></p>
        </footer>
    </>
  );
}