import React, { useState } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import bg from "./assets/bg.jpg";
import SuggestedCard from "./components/SuggestedCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeatherData(response.data);
    } catch (err) {
      setError("City not found! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-contain bg-no-repeat bg-center text-white`}
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <Navbar />

      <div className="flex-grow container mx-auto p-6 flex flex-col items-center">
        <div className="mt-10 flex gap-4 border-2 border-gray-900 rounded-lg p-2 placeholder:text-gray-500 text-gray-800">
          <input
            type="text"
            placeholder="Enter City Name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 rounded-lg outline-none w-64"
          />
          <button
            onClick={fetchWeather}
            className="bg-gray-900 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition"
          >
            Search
          </button>
        </div>

        <div className="container mx-auto max-w-6xl min-h-96 flex justify-center items-center">
          {loading && <div className="text-gray-900 mt-6">Loading...</div>}

          {error && <div className="text-red-600 mt-6">{error}</div>}

          {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-2xl font-bold">Popular Cities</h2>
        <SuggestedCard />
      </div>
    </div>
  );
}

export default App;
