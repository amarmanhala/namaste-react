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

function filterRestaurantData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.trim().toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  //const [allRestaurants, setAllRestaurants] = useState([]);
 const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [css, theme] = useStyletron();
  const allRestaurants = useRestaurants();

  useEffect(() => {
    //const data = useRestaurants();
    //console.log(data)
   // getRestaurandData();
   setFilteredRestaurants(allRestaurants);
   console.log("This is filtered" + filterRestaurantData);
  }, []);


  //const filteredRestaurants = useRestaurants();

  

  const isOnline = useIsOnline();

  if (!isOnline) {
    return <h1>Sorry, Please check your internet connection.</h1>;
  }
  //not render anything
  if (!allRestaurants) return null;

  return (
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
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className={css({ width: "100%" })}
            clearOnEscape
            clearable
            startEnhancer={<Search size={24} />}
          />
        </Block>

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
