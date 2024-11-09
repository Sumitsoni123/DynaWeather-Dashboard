import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/weatherSlice";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;

interface WeatherData {
  id: number;
  name: string;
  temperature: number;
  humidity: number;
  description: string;
}

export const useFetchWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const fetchWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);

    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const json = await response.json();
      const weatherData: WeatherData = {
        id: json.id,
        name: json.name,
        temperature: json.main.temp,
        humidity: json.main.humidity,
        description: json.weather[0].description,
      };

      setData(weatherData);
      dispatch(addCity(weatherData));
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchWeather };
};
