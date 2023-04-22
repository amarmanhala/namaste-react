import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { HeadingMedium } from "baseui/typography";
import RestaurantHeader from "./RestaurantHeader";
import Shimmer, { ShimmerMenu } from "./Shimmer";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenu = () => {
  // How to read dynamic params.
  const { id } = useParams();

  const restaurantDetail = useRestaurantMenu(id);

  const MenuArray = [];

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
              MenuArray.push(getMenuItems(eachCard?.card));
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return restaurantDetail.length === 0 ? (
    <ShimmerMenu />
  ) : (
    <div className="container-restaurant-menu">
      <RestaurantHeader
        data={restaurantDetail?.data?.cards[0]?.card?.card?.info}
      />

      <div>
        {MenuArray.map((each, index) => {
          //  console.log(each);
          return (
            <>
              <HeadingMedium key={index}>{each?.title}</HeadingMedium>

              {each?.itemCards.map((itemCard) => {
                // console.log(itemCard?.card?.info);
                return (
                  <MenuItemCard
                    key={itemCard?.card?.info?.id}
                    ItemData={itemCard?.card?.info}
                    restaurantName={restaurantDetail?.data?.cards[0]?.card?.card?.info?.name}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
