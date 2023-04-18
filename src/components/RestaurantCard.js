import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { IMAGE_CDN_URL } from "../config";
import { useStyletron } from "baseui";
import { createTheme } from "baseui";
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
} from "baseui/typography";
import { Heading } from "baseui/heading";


import {
  MessageCard,
  BUTTON_KIND
} from "baseui/message-card";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.data;
  const [css] = useStyletron();

  return (
    <>
     


      <MessageCard
      heading={name}
      
      onClick={() => alert("click")}
      
      paragraph={deliveryTime}
      image={{
        src:
        IMAGE_CDN_URL + cloudinaryImageId
      }}
    />
    </>
  );
};

export default RestaurantCard;
