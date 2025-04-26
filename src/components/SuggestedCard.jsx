import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const cities = [
  "Mumbai",
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Dubai",
  "Toronto",
  "Beijing",
  "Moscow",
];

const SuggestedCard = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async (city) => {
    console.log(weatherData);

    if (!city) return;
    try {
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeatherData((prevData) => [...prevData, response.data]);
    } catch (err) {}
  };

  useEffect(() => {
    cities.map((city) => fetchWeather(city));
  }, []);
  return (
    <div className="container mx-auto rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {weatherData.map((data, ind) => (
        <WeatherCard key={ind} weatherData={data} />
      ))}
    </div>
  );
};

export default SuggestedCard;
