import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const [restaurantDetail, setRestaurantDetail] = useState({});

  // How to read dynamic params.
  const { id } = useParams();

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=" + id + "&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurantDetail(json);
    console.log(restaurantDetail.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
  };

  return (
    <div>
      <h1>Restaurant id: {id}</h1>
      <h2>{restaurantDetail.data?.cards[0].card?.card?.info?.name}</h2>
      <img src={IMAGE_CDN_URL + restaurantDetail.data?.cards[0].card?.card?.info?.cloudinaryImageId}></img>
      <h3>{restaurantDetail.data?.cards[0].card?.card?.info?.city}</h3>
      <h3>{restaurantDetail.data?.cards[0].card?.card?.info?.areaName}</h3>
      <h3>{restaurantDetail.data?.cards[0].card?.card?.info?.totalRatings}</h3>
      <div><h1>Menu List</h1>
      <ul>
      {restaurantDetail.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.map(menu => {
        console.log(menu)
        
      })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
