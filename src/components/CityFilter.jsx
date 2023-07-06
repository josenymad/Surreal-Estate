import React from "react";
import { Link } from "react-router-dom";
import "../styles/city-filter.css";

const CityFilter = ({ setCity }) => {
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

  return (
    <div className="CityFilter">
      {cities.map((city) => {
        return (
          <Link
            key={city}
            className="city-filter__link"
            to={`/?query={"city": "${city}" }`}
            onClick={setCity(city)}
          >
            {city}
          </Link>
        );
      })}
    </div>
  );
};

export default CityFilter;
