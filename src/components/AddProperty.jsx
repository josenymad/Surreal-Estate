import React, { useState } from "react";
import "../styles/add-property.css";
import postPropertyDetails from "../requests/postProperty";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    postPropertyDetails(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <h3 className="add-property__header">Tell us about your new property:</h3>
      <form onSubmit={handleAddProperty} className="add-property__form">
        <label htmlFor="title">
          Property Title:
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="2 bedroom flat"
            className="form__input"
          />
        </label>
        <label htmlFor="type">
          Property Type:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            className="form__input"
          >
            <option value="">Please select</option>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Number of bedrooms:
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="2"
            className="form__input"
          />
        </label>
        <label htmlFor="bathrooms">
          Number of bathrooms:
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="1"
            className="form__input"
          />
        </label>
        <label htmlFor="price">
          Property value:
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="£150,000"
            className="form__input"
          />
        </label>
        <label htmlFor="city">
          City:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            className="form__input"
          >
            <option value="">Please select</option>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="contact@email.com"
            className="form__input"
          />
        </label>
        <button type="submit" className="add-property__form__button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
