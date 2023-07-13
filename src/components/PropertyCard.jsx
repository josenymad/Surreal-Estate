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
  faHeart,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";
import logo from "../images/logo.jpeg";

const PropertyCard = ({
  _id,
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
  profileId,
  onSaveProperty,
  heartAlert,
}) => (
  <div className="property-card">
    <ul className="property-card__list">
      <li className="property-card__list__item">
        <img src={logo} alt="Logo" className="property-card__list__logo" />
      </li>
      <li className="property-card__list__item">
        <FontAwesomeIcon icon={faCircleInfo} />
        {` ${title}`}
      </li>
      <li className="property-card__list__item">
        <FontAwesomeIcon icon={faHouse} />
        {` ${type}`}
      </li>
      <li className="property-card__list__item">
        <FontAwesomeIcon icon={faBed} />
        {` ${bedrooms} bed | `}
        <FontAwesomeIcon icon={faBath} />
        {` ${bathrooms} bath`}
      </li>
      <li className="property-card__list__item">
        <FontAwesomeIcon icon={faSterlingSign} />
        {` ${price}`}
      </li>
      <li className="property-card__list__item">
        <FontAwesomeIcon icon={faLocationDot} />
        {` ${city}`}
      </li>
      <li className="property-card__list__item">
        <a href={`mailto:${email}`} className="email-link">
          <FontAwesomeIcon icon={faEnvelope} />
          {" Email"}
        </a>
      </li>
      {profileId ? (
        <li className="property-card__list__item">
          <button
            type="button"
            onClick={() => onSaveProperty(_id)}
            className="save-button"
          >
            {_id === heartAlert.propertyKey ? (
              <>
                <FontAwesomeIcon icon={faHeartCircleCheck} />{" "}
                {heartAlert.message}
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faHeart} /> Save
              </>
            )}
          </button>
        </li>
      ) : null}
    </ul>
  </div>
);

export default PropertyCard;
