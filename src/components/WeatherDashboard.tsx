import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeCity, setError } from "../redux/weatherSlice";
import Header from "./Header";
import WeatherCard from "./WeatherCard";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { Box, Grid, Typography } from "@mui/material";
import Error from "./Error"; 

const WeatherDashboard: React.FC = () => {
  const cities = useSelector((state: RootState) => state.weather.cities);
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();
  const { loading, fetchWeather } = useFetchWeather();

  const handleSearch = (cityName: string) => {
    fetchWeather(cityName).catch(() => {
      dispatch(setError("City not found or API error"));
    });
  };

  const handleRemoveCity = (cityId: number) => {
    dispatch(removeCity(cityId));
  };

  return (
    <Box p={3}>
      <Typography textAlign="center" variant="h3">
        DynaWeather Dashboard
      </Typography>
      <Header handleSearch={handleSearch} />
      {error && <Error message={error} />}
      {loading && (
        <Typography textAlign="center" variant="h6">
          loading....
        </Typography>
      )}
      <Grid container spacing={2}>
        {cities.map((city) => (
          <Grid item key={city.id} xs={12} sm={6} md={4}>
            <WeatherCard cityData={city} handleRemoveCity={handleRemoveCity} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherDashboard;
