import React, { useState } from "react";
import classes from "./WeatherCard.module.css";
import "../assets/icon/css/weather-icons.css";

const WeatherCard = (props) => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cardClickHandler = (cardNumber) => {
    setSelectedCard(cardNumber);
  };
  console.log(selectedCard);
  return (
    <div
      className={`${classes.card} ${classes["fair-weather-night-background"]} ${
        props.class ? props.class : ""
      }`}
    >
      <div className={classes["card-content"]}>
        <h1 className={classes["card-title"]}>London</h1>
        <div className={classes["weather-info"]}>
          <div>
            <i
              className="wi wi-day-sunny"
              style={{ transform: "scale(3)" }}
            ></i>
            <h3 className={classes["weather-message-title"]}>
              sunny currently
            </h3>
            <p className={classes["weather-message"]}>
              Wear light clothes as the weather is beautiful today.
            </p>
          </div>
          <div className={classes["temperature-data-container"]}>
            <span className={classes.temperature}>25</span>
            <span className={classes.degree}> &#176;C</span>
            <span className={classes["temperature-feel"]}>
              Feels Like 23 &#176;C
            </span>
          </div>
        </div>
        <div className={classes["hourly-cards-container"]}>
          <div
            className={`${classes["forecast-card"]} ${classes["forecast-card-selected"]}`}
            onClick={() => {
              cardClickHandler(1);
            }}
          >
            <span>now</span>
            <div>
              <i
                className="wi wi-day-sunny"
                style={{ transform: "scale(2)", marginRight: "1rem" }}
              ></i>
              <span>25</span>
            </div>
            <span>Sunny</span>
          </div>

          <div
            className={`${classes["forecast-card"]} ${classes["forecast-card-day"]}`}
            onClick={() => {
              cardClickHandler(2);
            }}
          >
            <span>1:00pm</span>
            <div>
              <i
                className="wi wi-day-cloudy"
                style={{ transform: "scale(2)", marginRight: "1rem" }}
              ></i>
              <span>27</span>
            </div>
            <span>Sunny</span>
          </div>

          <div
            className={`${classes["forecast-card"]} ${classes["forecast-card-dusk"]}`}
            onClick={() => {
              cardClickHandler(3);
            }}
          >
            <span>4:00pm</span>
            <div>
              <i
                className="wi wi-day-lightning"
                style={{ transform: "scale(2)", marginRight: "1rem" }}
              ></i>
              <span>26</span>
            </div>
            <span>Sunny</span>
          </div>

          <div
            className={`${classes["forecast-card"]} ${classes["forecast-card-night"]}`}
            onClick={() => {
              cardClickHandler(4);
            }}
          >
            <span>7:00pm</span>
            <div>
              <i
                className="wi wi-night-clear"
                style={{ transform: "scale(2)", marginRight: "1rem" }}
              ></i>
              <span>16</span>
            </div>
            <span>Sunny</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
