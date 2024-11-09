import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface HeaderProps {
  handleSearch: (cityName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  const [city, setCity] = useState<string>('');

  const handleSubmit = () => {
    if (city?.trim()) {
      handleSearch(city);
    }
    setCity('');
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        label="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit} disabled={!city}>
        Search
      </Button>
    </Box>
  );
};

export default Header;
