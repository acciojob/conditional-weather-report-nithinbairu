import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [data] = useState({ temperature: 25, conditions: "Sunny" });

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay 
        temperature={data.temperature} 
        conditions={data.conditions} 
      />
    </div>
  );
};

export default App;
