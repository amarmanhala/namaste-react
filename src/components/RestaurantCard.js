import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { IMAGE_CDN_URL } from "../config";
import { useStyletron } from "baseui";
import { Badge, SHAPE, COLOR } from "baseui/badge";

import { MessageCard, BUTTON_KIND } from "baseui/message-card";



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

  return (
    <>
      <MessageCard
        heading={name}
        onClick={() => alert("click")}
        paragraph={
          <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
    <p>Delivery time - {deliveryTime} min</p>
 <Badge content={avgRating} shape={SHAPE.pill} color={COLOR.primary} />
  </div>
        }
        image={{
          src: IMAGE_CDN_URL + cloudinaryImageId,
        }}
      />
    </>
  );
};

export default RestaurantCard;
