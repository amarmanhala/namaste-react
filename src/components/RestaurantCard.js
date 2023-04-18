import React from "react";
import { IMAGE_CDN_URL } from "../config";
import { Badge, SHAPE, COLOR } from "baseui/badge";

import { MessageCard } from "baseui/message-card";

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
        paragraph={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Delivery time - {deliveryTime} min</p>
            <Badge
              content={avgRating}
              shape={SHAPE.pill}
              color={COLOR.warning}
            />
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
