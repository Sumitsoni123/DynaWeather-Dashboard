import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherData {
  id: number;
  name: string;
  temperature: number;
  humidity: number;
  description: string;
}

interface WeatherState {
  cities: WeatherData[];
  error: string | null;
}

const initialState: WeatherState = {
  cities: [],
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<WeatherData>) => {
      const existingCity = state.cities.find(
        (city) => city.id === action.payload.id
      );

      if (!existingCity) {
        state.cities.push(action.payload);
      }
    },
    removeCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload);
    },
    updateCity: (state, action: PayloadAction<WeatherData>) => {
      const index = state.cities.findIndex(
        (city) => city.id === action.payload.id
      );
      if (index !== -1) {
        state.cities[index] = action.payload;
      }
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addCity, removeCity, updateCity, setError } =
  weatherSlice.actions;
export default weatherSlice.reducer;
