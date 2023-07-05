import React, { useEffect, useState } from "react";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";
import getProperties from "../requests/getProperties";
import Alert from "./Alert";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    getProperties(setProperties, setAlert);
  }, []);

  return (
    <div className="properties">
      <h3 className="properties__header">Properties Page</h3>
      <div className="properties__container">
        {properties.map((property) => {
          return (
            <div key={property._id}>
              <PropertyCard {...property} />
            </div>
          );
        })}
      </div>
      <Alert
        message={alert.message}
        success={alert.isSuccess}
        className="alert"
      />
    </div>
  );
};

export default Properties;
