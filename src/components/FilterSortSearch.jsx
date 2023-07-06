import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/filter-sort-search.css";
import qs from "qs";

const FilterSortSearch = ({ setCity }) => {
  const cities = ["Manchester", "Leeds", "Sheffield", "Liverpool"];

  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="filter-sort-search">
      {cities.map((city) => {
        return (
          <Link
            key={city}
            className="city-filter__link"
            to={buildQueryString("query", { city })}
            onClick={() => setCity(city)}
          >
            {city}
          </Link>
        );
      })}
      <Link
        to={buildQueryString("sort", { price: 1 })}
        className="city-filter__link"
      >
        Low to High
      </Link>
      <Link
        to={buildQueryString("sort", { price: -1 })}
        className="city-filter__link"
      >
        High to Low
      </Link>
    </div>
  );
};

export default FilterSortSearch;
