import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [city, setCity] = useState("London");
  const searchWeatherHandler = (city) => {
    setCity(city);
  };
  return (
    <div className="App">
      <Header onSearchWeather={searchWeatherHandler} />
      <Content weatherCity={city} />
    </div>
  );
}

export default App;
