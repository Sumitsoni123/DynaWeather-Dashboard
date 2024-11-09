import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

interface WeatherCardProps {
  cityData: {
    id: number;
    name: string;
    temperature: number;
    humidity: number;
    description: string;
  };
  handleRemoveCity: (cityId: number) => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityData,
  handleRemoveCity,
}) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{cityData.name}</Typography>
      <Typography variant="body2">Temp: {cityData.temperature}°C</Typography>
      <Typography variant="body2">Humidity: {cityData.humidity}</Typography>
      <Typography variant="body2">WeatherCondition: {cityData.description}</Typography>
      <Button onClick={() => handleRemoveCity(cityData.id)}>Remove</Button>
    </CardContent>
  </Card>
);

export default WeatherCard;
