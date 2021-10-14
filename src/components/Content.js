import React from "react";
import WeatherCard from "../components/WeatherWidget/WeatherCard";
import classes from "./Content.module.css";
const Content = (props) => {
  const { weatherCity } = props;
  return (
    <div className={classes["content-container"]}>
      <div className={classes["sidebar-container"]}></div>
      <div className={classes["weather-container"]}>
        <h1>Weather</h1>
        <WeatherCard city={weatherCity} />
      </div>
      <div className={classes["news-container"]}></div>
    </div>
  );
};

export default Content;
