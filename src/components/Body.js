import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
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
       <Link to={"/restaurant/" + eachRestaurant.data.id} key={eachRestaurant.data.id}>
        <RestaurantCard
          key={eachRestaurant.data.id}
          restaurantData={eachRestaurant}
        />
       </Link> 
      ))}
    </div>
  </div>
  )
 
};

export default Body;
