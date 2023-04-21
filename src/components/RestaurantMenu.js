import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
  HeadingMedium,
  HeadingXSmall,
} from "baseui/typography";
import RestaurantHeader from "./RestaurantHeader";
import Shimmer from "./Shimmer";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenu = () => {
  // How to read dynamic params.
  const { id } = useParams();

  const restaurantDetail = useRestaurantMenu(id);

  const arr = [];

  getRestaurantData();

  function getMenuItems(listOfMenus) {
    try {
      if (
        listOfMenus?.card?.title !== undefined &&
        listOfMenus?.card?.itemCards !== undefined
      ) {
        return listOfMenus.card;
      }
    } catch (error) {
      console.log("There is something wrong...");
    }
  }

  async function getRestaurantData() {
    try {
      if (restaurantDetail.length !== 0) {
        console.log(
          restaurantDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards
        );
        restaurantDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (eachCard) => {
            if (getMenuItems(eachCard?.card) !== undefined) {
              arr.push(getMenuItems(eachCard?.card));
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return restaurantDetail.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container-restaurant-menu">
      <RestaurantHeader
        data={restaurantDetail?.data?.cards[0]?.card?.card?.info}
      />

      <div>
        {arr.map((each) => {
          //console.log(each?.itemCards);
          return (
            <>
              <HeadingMedium>{each?.title}</HeadingMedium>
              {each?.itemCards.map((j) => {
                console.log(j.card.info);
                return <MenuItemCard {...j.card.info} />;
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
