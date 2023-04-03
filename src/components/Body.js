import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterRestaurantData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.trim().toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurandData();
    
  }, []);

  //Call to swiggy api
  const getRestaurandData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    //use optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   
  };

  console.log("render...");

  //not render anything
  if(!allRestaurants) return null;

  if(filteredRestaurants?.length === 0)
  return <h1>No data found</h1>;

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
          const data = filterRestaurantData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>

    <div className="card-container">
      
     
      {filteredRestaurants?.map((eachRestaurant) => (
        <RestaurantCard
          key={eachRestaurant.data.id}
          restaurantData={eachRestaurant}
        />
      ))}
    </div>
  </div>
  )
 
};

export default Body;
