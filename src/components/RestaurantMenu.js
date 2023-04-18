import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../config";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { StarRating } from "baseui/rating";
import { HintDot, COLOR } from "baseui/badge";
import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
} from 'baseui/typography';
import {
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  LabelXSmall,
} from 'baseui/typography';
import {Tag, VARIANT, SIZE} from 'baseui/tag';

const RestaurantMenu = () => {

  // How to read dynamic params.
  const { id } = useParams();

  const restaurantDetail = useRestaurantMenu(id);

  console.log(restaurantDetail?.data?.cards[0].card?.card?.info);

  return (
    <div className="container-restaurant-menu">
     
     
      <img
        src={
          IMAGE_CDN_URL +
          restaurantDetail?.data?.cards[0].card?.card?.info?.cloudinaryImageId
        }
      ></img>
      <h3>{restaurantDetail?.data?.cards[0].card?.card?.info?.city}</h3>
      <h3>{restaurantDetail?.data?.cards[0].card?.card?.info?.areaName}</h3>
      <h3>{restaurantDetail?.data?.cards[0].card?.card?.info?.totalRatings}</h3>
      <div>
        <h1>Menu List</h1>
        <ul>
          {restaurantDetail?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (menu) => {
              console.log(menu?.card?.info);
              return <li>{menu?.card?.info?.name}</li>;
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
