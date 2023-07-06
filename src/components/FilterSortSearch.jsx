import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/filter-sort-search.css";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      <div className="city-filter">
        <p className="city-filter__label">Filter by city</p>
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
      </div>
      <div className="price-sort">
        <p className="price-sort__label">Sort by price</p>
        <Link
          to={buildQueryString("sort", { price: 1 })}
          className="price-sort__link"
        >
          Low to High
        </Link>
        <Link
          to={buildQueryString("sort", { price: -1 })}
          className="price-sort__link"
        >
          High to Low
        </Link>
      </div>
      <form className="search-form">
        <label htmlFor="search" className="search-label">
          Search{" "}
        </label>
        <div className="search__input__button">
          <input id="search" placeholder="bungalow" className="search-input" />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterSortSearch;
