import React from "react";
import { MessageCard, IMAGE_LAYOUT } from "baseui/message-card";
import { StyledDivider, SIZE } from "baseui/divider";
import { ParagraphMedium, ParagraphSmall } from "baseui/typography";

const CardContent = (props) => {
  return (<><ParagraphSmall style={{ margin: 0 }}>{props.description}</ParagraphSmall><br></br><ParagraphMedium style={{ margin: 0 }}>{props.price}</ParagraphMedium></>)
}

const MenuItemCard = ({ name, description, price }) => {
  console.log(price);
  return (
    <>
      <MessageCard
        heading={name}
        paragraph={<CardContent description={description} price={price} />}
        buttonLabel="I want it"
        onClick={() => alert("Clicked 🙂")}
        overrides={{ Root: { style: { border: "none" } } }}
      />
      <StyledDivider $size={SIZE.cell} />
    </>
  );
};

export default MenuItemCard;
