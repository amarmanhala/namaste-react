import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../../utils/useIsOnline";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {useStyletron} from 'baseui';
import { Search } from "baseui/icon";




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
  const [css, theme] = useStyletron();

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

  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h1>Sorry, Please check your internet connection.</h1>
  }
  //not render anything
  if(!allRestaurants) return null;
  

  

  return (
    <div className="body">
    <div className={css({ display: "flex", flexDirection: "row", padding: "20px 28px" })}>
     

<div className={css({ width: "300px", marginRight: "12px" })}>
<Input
        
        placeholder="Search Restaurants"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className={css({ width: "100%" })}
        clearOnEscape
        clearable
        startEnhancer={<Search size={24} />}
      
        
      />
</div>
   
       <Button
        onClick={() => {
          const data = filterRestaurantData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
        
      >
        Search
      </Button>


     
      
     
    </div>

    <div className="card-container">
      
     
      {filteredRestaurants?.map((eachRestaurant) => (
       <Link to={"/restaurant/" + eachRestaurant?.data?.id} key={eachRestaurant?.data?.id}>
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
