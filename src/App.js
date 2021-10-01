import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const searchWeatherHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <Header onSearchWeather={searchWeatherHandler} />
      <Content />
    </div>
  );
}

export default App;
