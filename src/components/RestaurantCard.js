import React from "react";
import { IMAGE_CDN_URL } from "../config";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.data;

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          className="card-image"
          alt="megna foods"
          src={IMAGE_CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="card-content">
        <span className="card-title">{name}</span>
        <div className="card-secondary-content-wrapper">
          <span className="card-title-secondary">{deliveryTime} min</span>
          <span className="rating">{avgRating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
