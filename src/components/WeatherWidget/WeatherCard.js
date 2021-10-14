import React, { useState, useEffect } from "react";
import classes from "./WeatherCard.module.css";
import "./icons/css/weather-icons.css";
import {
  getCityForecastWeatherData,
  getCityWeatherData,
} from "./openWeatherMapApi";
import CityError from "./ErrorMessage";
import { weatherDescriptons } from "./textMessages";
import { weatherIconsIndex } from "./weatherIconsIndex";

const WeatherCard = (props) => {
  const { city } = props;
  const [selectedCard, setSelectedCard] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecastData, setWeatherForecastData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const currentWeatherData = await getCityWeatherData(city);
      console.log(currentWeatherData);

      //if no data, set errors,  return
      if (
        currentWeatherData.cod === "400" ||
        !currentWeatherData.count ||
        currentWeatherData.error
      ) {
        setWeatherData({ ...currentWeatherData });
        return;
      }

      const cleanedWeatherData = {
        city: {
          name: currentWeatherData.list[0].name,
          country: currentWeatherData.list[0].sys.country,
        },

        weather: {
          description: currentWeatherData.list[0].weather[0].main,
          temperature: Math.round(+currentWeatherData.list[0].main.temp),
          feelsLike: Math.round(+currentWeatherData.list[0].main.feels_like),
          humidity: currentWeatherData.list[0].main.humidity,
          message:
            weatherDescriptons[currentWeatherData.list[0].weather[0].main],
          iconIndex: currentWeatherData.list[0].weather[0].icon,
          dayTimeMarker:
            currentWeatherData.list[0].weather[0].icon.at(-1) === "d"
              ? "day"
              : "night",
        },
      };

      setWeatherData({ ...cleanedWeatherData });
      if (currentWeatherData.count && currentWeatherData.count > 0) {
        const currentForecastData = await getCityForecastWeatherData(city);
        console.log(currentForecastData);

        const cleanedForecastData = {
          city: {
            name: currentForecastData.city.name,
            country: currentForecastData.city.country,
          },
          forecast: [],
        };
        currentForecastData.list.forEach((forecast) => {
          const date = new Date(
            (forecast.dt + currentForecastData.city.timezone) * 1000
          );
          let hours = date.getHours();
          let minutes = date.getMinutes();

          if (hours < 10) hours = "0" + hours;
          if (minutes < 10) minutes = "0" + minutes;

          const forecastItem = {
            time: `${hours}:${minutes}`,
            description: forecast.weather[0].main,
            temperature: Math.round(forecast.main.temp),
            feelsLike: Math.round(forecast.main.feels_like),
            humidity: forecast.main.humidity,
            message: weatherDescriptons[forecast.weather[0].main],
            iconIndex: forecast.weather[0].icon,
            dayTimeMarker:
              forecast.weather[0].icon.at(-1) === "d" ? "day" : "night",
          };
          cleanedForecastData.forecast.push(forecastItem);
        });
        //cleanedForecastData.forecast[0] = cleanedWeatherData.weather;
        setWeatherForecastData({ ...cleanedForecastData });
      }
    };
    getData();
  }, [city]);

  const cardClickHandler = (cardNumber) => {
    setSelectedCard(cardNumber);
    setWeatherData({
      ...weatherData,
      weather: { ...weatherForecastData.forecast[cardNumber] },
    });
  };
  let content = null;
  let cardlets = null;

  if (!weatherData) return null;
  //if api call returns a catch block error:
  if (weatherData.error)
    return (content = <CityError errorMessage={`Sorry, Network error`} />);

  //if bad query
  if (weatherData.cod === "400")
    return (content = <CityError errorMessage="Weather server error!" />);

  //if no cities found
  if (weatherData.count === 0)
    return (content = <CityError errorMessage="Sorry, city not found!" />);

  const cardBackgroundClass = `${weatherData.weather.description}-${weatherData.weather.dayTimeMarker}-background`;

  if (weatherForecastData) {
    cardlets = weatherForecastData.forecast.map((forecast, idx) => (
      <div
        key={idx}
        className={`${classes["forecast-card"]} ${
          selectedCard === idx
            ? classes["forecast-card-selected"]
            : classes[`forecast-card-${idx}`]
        }`}
        onClick={() => {
          cardClickHandler(idx);
        }}
      >
        <span>{ forecast.time}</span>
        <div>
          <i
            className={weatherIconsIndex[forecast.iconIndex]}
            style={{ transform: "scale(2)", marginRight: "1rem" }}
          ></i>
          <span>{forecast.temperature}</span>
        </div>
        <span>{forecast.description}</span>
      </div>
    ));
  }

  content = (
    <div className={classes["card-content"]}>
      <h1
        className={classes["card-title"]}
      >{`${weatherData.city.name}, ${weatherData.city.country}`}</h1>
      <div className={classes["weather-info"]}>
        <div className={classes["weather-info-group"]}>
          <i
            className={weatherIconsIndex[weatherData.weather.iconIndex]}
            style={{ transform: "scale(3)" }}
          ></i>
          <h3 className={classes["weather-message-title"]}>
            {weatherData.weather.description}
          </h3>

          <p className={classes["weather-message"]}>
            {weatherData.weather.message}
          </p>
        </div>
        <div className={classes["temperature-data-container"]}>
          <div className={classes["degrees-container"]}>
            <p className={classes.temperature}>
              {weatherData.weather.temperature}
            </p>
            <span className={classes.degree}> &#176;C</span>
          </div>
          <span className={classes["temperature-details"]}>
            Feels Like {weatherData.weather.feelsLike} &#176;C
          </span>
          <span className={classes["temperature-details"]}>
            Humidity: {weatherData.weather.humidity}%
          </span>
        </div>
      </div>
      <div className={classes["hourly-cards-container"]}>{cardlets}</div>
    </div>
  );

  return (
    <div
      className={`${classes.card}
      ${classes["default-background"]} ${classes[cardBackgroundClass]} ${
        props.class ? props.class : ""
      }`}
    >
      {content}
    </div>
  );
};

export default WeatherCard;
