import React, { useEffect, useState } from "react";
import "../styles/properties.css";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import getProperties from "../requests/getProperties";
import Alert from "./Alert";
import CityFilter from "./CityFilter";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const { search } = useLocation();
  const [city, setCity] = useState("");

  useEffect(() => {
    getProperties(setProperties, setAlert, search);
  }, [search]);

  useEffect(() => {
    getProperties(setProperties, setAlert);
  }, []);

  return (
    <div className="properties">
      <h3 className="properties__header">Properties Page</h3>
      <CityFilter setCity={setCity} />
      {properties.length > 0 ? (
        <div className="properties__container">
          {properties.map((property) => (
            <div key={property._id} className="property">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-properties">
          {`Sorry, there are no available properties in ${city}`}
        </p>
      )}
      <Alert
        message={alert.message}
        success={alert.isSuccess}
        className="alert"
      />
    </div>
  );
};

export default Properties;
