import React, { useState } from "react";
import { RESTAURANT_DATA } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterRestaurantData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText.trim())
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANT_DATA);
  const [searchText, setSearchText] = useState("");

  

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search anything..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterRestaurantData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {restaurants.map((eachRestaurant) => (
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
