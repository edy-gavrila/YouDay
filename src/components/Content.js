import React from "react";
import WeatherCard from "../UI/WeatherCard";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes["content-container"]}>
      <div className={classes["sidebar-container"]}></div>
      <div className={classes["weather-container"]}>
        <WeatherCard />
      </div>
      <div className={classes["news-container"]}></div>
    </div>
  );
};

export default Content;
