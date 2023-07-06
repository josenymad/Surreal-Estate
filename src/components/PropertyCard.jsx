import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faHouse,
  faBed,
  faBath,
  faSterlingSign,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <ul className="property-card__list">
        <li className="property-card__list__item">
          <FontAwesomeIcon icon={faCircleInfo} />
          {` ${title}`}
        </li>
        <li className="property-card__list__item">
          <FontAwesomeIcon icon={faHouse} className="icon" />
          {` ${type}`}
        </li>
        <li className="property-card__list__item">
          <FontAwesomeIcon icon={faBed} className="icon" />
          {` ${bedrooms} bed | `}
          <FontAwesomeIcon icon={faBath} className="icon" />
          {` ${bathrooms} bath`}
        </li>
        <li className="property-card__list__item">
          <FontAwesomeIcon icon={faSterlingSign} className="icon" />
          {` ${price}`}
        </li>
        <li className="property-card__list__item">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          {` ${city}`}
        </li>
        <li className="property-card__list__item">
          <a href={`mailto:${email}`} className="email-link">
            <FontAwesomeIcon icon={faEnvelope} />
            {" Email"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PropertyCard;
