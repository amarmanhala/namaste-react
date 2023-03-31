import React, { useState } from "react";
import { restaurantData } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("KFC");
  return (
    <div className="body">
      <div className="search-container">

        <input
          type="search"
          className="search-input"
          placeholder="Search anything..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)
          }
        />

      </div>
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
