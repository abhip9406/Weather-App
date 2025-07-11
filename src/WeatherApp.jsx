import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./App.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="container">
      <h1 className="title">SkyCast – Live Weather</h1>
      <SearchBox updateInfo={updateInfo} />
      <div className="card">
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
