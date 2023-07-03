import React from "react";
import "../styles/properties.css";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className="properties">
      <h3 className="properties__header">Properties Page</h3>
      <PropertyCard
        title="title"
        type="type"
        bedrooms="2"
        bathrooms="1"
        price="150000"
        city="Manchester"
      />
    </div>
  );
};

export default Properties;
