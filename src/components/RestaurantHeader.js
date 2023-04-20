import React from "react";
import { HintDot, COLOR } from "baseui/badge";
import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
} from "baseui/typography";
import {
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  LabelXSmall,
} from "baseui/typography";

const RestaurantHeader = (props) => {
  //console.log(props.data);
  const { name, cuisines, avgRatingString, availability, feeDetails } =
    props.data;
  return (
    <div>
      <DisplayXSmall>{name}</DisplayXSmall>
      <ParagraphMedium>{cuisines.map(String).join(", ")}</ParagraphMedium>
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
          {avgRatingString} ratings -{" "}
          {availability?.opened === true ? (
            <HintDot color={COLOR.positive}>Open</HintDot>
          ) : (
            <HintDot color={COLOR.negative}>Closed</HintDot>
          )}
        </ParagraphLarge>
        <ParagraphSmall>{feeDetails.message}</ParagraphSmall>
      </div>
    </div>
  );
};

export default RestaurantHeader;
