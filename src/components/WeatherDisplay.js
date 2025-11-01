import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
