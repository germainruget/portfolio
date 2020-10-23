import React, { useState, useEffect, useCallback } from 'react';

import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import CityList from './CityList/CityList';
import classes from './Weather.module.scss';

const Weather = () => {
   /**
    *  WEATHER MAIN  |  ICONS
    * --------------------------------------
    *  Thunderstorm  |  Thunderstorm 
    *  Drizzle       |  Fog 
    *  Rain          |  HeavyRain 
    *  Snow          |  Snowflake 
    *  Clear         |  Sun 
    *  Clouds        |  Cloudy
    * 
    * **/

   const [weatherData, setWeatherData] = useState(null);

   const changeCity = useCallback((newCity) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${newCity}&appid=de2ddd75e6cabfa609e42c832f5027fe&units=metric`)
         .then(response => {
            return response.json();
         }).then(responseData => {

            //FORMAT DATA
            const formatData = {};
            formatData.name = responseData.name;
            formatData.temp = responseData.main.temp;
            formatData.temp_min = responseData.main.temp_min;
            formatData.temp_max = responseData.main.temp_max;
            formatData.icon = getIcon(responseData.weather[0].main);
            formatData.description = responseData.weather[0].description;
            setWeatherData(formatData);
         });
   }, []);

   useEffect(() => {
      changeCity(2996944);
   }, [changeCity]);

   const getIcon = (openWeatherIcon) => {
      switch (openWeatherIcon) {
         case 'Thunderstorm':
            return 'Thunderstorm';
         case 'Drizzle':
            return 'Fog';
         case 'Rain':
            return 'HeavyRain';
         case 'Snow':
            return 'Snowflake';
         case 'Clear':
            return 'Sun';
         case 'Clouds':
            return 'Cloudy';
         default:
            return 'Sun';
      }
   }

   return (
      <div className={classes.Weather}>
         <WeatherDisplay data={weatherData} /*loading={isLoading}*/ />
         <CityList changeCity={changeCity} />
      </div>
   );
}

export default Weather;