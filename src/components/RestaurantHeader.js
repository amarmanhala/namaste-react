import React from "react";
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


const RestaurantHeader = () => {
  return (
    <div>
      <DisplayXSmall>
        {restaurantDetail?.data?.cards[0].card?.card?.info?.name}
      </DisplayXSmall>
      <ParagraphMedium>
        {restaurantDetail?.data?.cards[0].card?.card?.info?.cuisines
          .map(String)
          .join(", ")}
      </ParagraphMedium>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ParagraphLarge>
          {restaurantDetail?.data?.cards[0].card?.card?.info?.avgRatingString}{" "}
          ratings -{" "}
          {restaurantDetail?.data?.cards[0].card?.card?.info?.availability
            ?.opened === true ? (
            <HintDot color={COLOR.positive}>Open</HintDot>
          ) : (
            <HintDot color={COLOR.negative}>Closed</HintDot>
          )}
        </ParagraphLarge>
        <ParagraphSmall>
          Very Far (2,058 kms) | Additional delivery fee will apply
        </ParagraphSmall>
      </div>
    </div>
  );
};

export default RestaurantHeader;
