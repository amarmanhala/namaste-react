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
import RestaurantHeader from "./RestaurantHeader";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {



  // How to read dynamic params.
  const { id } = useParams();

  const restaurantDetail = useRestaurantMenu(id);

  const arr = [];

  test();

  function getMenuItems(obj) {
    
    if(obj?.card?.title !== undefined && obj?.card?.itemCards !== undefined) {
      //console.log(obj.card);
      return obj.card;

    //return {title, itemCards} = obj.card;
    
    }
   // if (obj.card)
  }

  
async function test() {
  try {
    if(restaurantDetail.length !== 0) {
      console.log(restaurantDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      restaurantDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(eachCard => {
        if(getMenuItems(eachCard?.card) !== undefined) {
          arr.push(getMenuItems(eachCard?.card))
        }
      });
    }
  }
  catch(error) {
    console.log(error);
  }
  
}




 

 // console.log("This is new one", arr);

  //console.log(restaurantDetail?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);

  return restaurantDetail.length === 0 ? (<Shimmer />) : (
    <div className="container-restaurant-menu">
     <RestaurantHeader data={restaurantDetail?.data?.cards[0]?.card?.card?.info} />
     
     
     
      <div>
        <h1>Menu</h1>
        <ul>
      


{arr.map(each => {
  
  
  
  //console.log(each?.itemCards);
  return <>
  <h1>{each?.title}</h1>
  { each?.itemCards.map(j => {
    //console.log(j.card.info);
    return <p>{j?.card?.info?.name}</p>
    
  }) }
 
  </>
  
  
})}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
