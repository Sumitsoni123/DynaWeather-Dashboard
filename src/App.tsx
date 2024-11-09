import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import WeatherDashboard from "./components/WeatherDashboard";

const App: React.FC = () => (
  <ErrorBoundary
    fallback={<h2>Application crashed. Please try again later.</h2>}
  >
    <WeatherDashboard />
  </ErrorBoundary>
);

export default App;