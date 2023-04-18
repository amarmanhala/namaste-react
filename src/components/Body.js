import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../../utils/useIsOnline";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { useStyletron } from "baseui";
import { Search } from "baseui/icon";
import { Block } from "baseui/block";
import useRestaurants from "../../utils/useRestaurants";


const Body = () => {
  const allRestaurants = useRestaurants();
  const [searchText, setSearchText] = useState("");
  const [css, theme] = useStyletron();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.trim().toLowerCase())
  );

  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h1>Sorry, Please check your internet connection.</h1>;
  }
  //not render anything
  if (!allRestaurants) return null;
console.log("This is an obj", filteredData);


  return  filteredData.length === 0 ?  (<Shimmer />) : (
    <div className="body">
      
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          padding: "20px 28px",
        })}
      >
        <Block marginRight={"12px"} width={"300px"}>
          <Input
            placeholder="Search Restaurants"
            value={searchText}
            onChange={handleSearchChange}
            className={css({ width: "100%" })}
            clearOnEscape
            clearable
            startEnhancer={<Search size={24} />}
          />
        </Block>
      </div>

      <div className="card-container">
        {filteredData?.map((eachRestaurant) => (
          <Link
            to={"/restaurant/" + eachRestaurant?.data?.id}
            key={eachRestaurant?.data?.id}
          >
            <RestaurantCard
              key={eachRestaurant.data.id}
              restaurantData={eachRestaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
