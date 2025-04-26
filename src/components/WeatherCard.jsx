import React from "react";
import cloudpng from "../assets/cloudy.png"; // Assuming you have cloudpng installed for image optimization

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const current = weatherData.current_condition[0];
  const area = weatherData.nearest_area[0];
  const astronomy = weatherData.weather[0].astronomy[0];

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-8 mt-10 text-white text-center space-y-4">
      <h2 className="text-3xl font-bold">
        {area.areaName[0].value}, {area.country[0].value}
      </h2>

      <img
        src={cloudpng} // No icon in wttr.in API, so you can add a default icon here if you want
        alt="weather-icon"
        className="mx-auto w-20 h-20"
      />

      <p className="text-xl">{current.weatherDesc[0].value}</p>

      <p className="text-5xl font-bold">{current.temp_C}°C</p>

      <div className="flex justify-around mt-4 text-md">
        <div>Humidity: {current.humidity}%</div>
        <div>Wind: {current.windspeedKmph} km/h</div>
      </div>

      <div className="flex justify-around mt-2 text-sm">
        <div>Sunrise: {astronomy.sunrise}</div>
        <div>Sunset: {astronomy.sunset}</div>
      </div>
    </div>
  );
}

export default WeatherCard;
