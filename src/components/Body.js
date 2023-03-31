import React from "react";
import { restaurantData } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {restaurantData.map((eachRestaurant) => (
          <RestaurantCard
            key={eachRestaurant.data.id}
            restaurantData={eachRestaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
