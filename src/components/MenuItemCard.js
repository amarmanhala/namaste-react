import React from "react";
import { MessageCard, IMAGE_LAYOUT } from "baseui/message-card";
import { StyledDivider, SIZE } from "baseui/divider";
import { ParagraphMedium, ParagraphSmall } from "baseui/typography";
import { IMAGE_CDN_URL } from "../config";

const CardContent = (props) => {
  return (<><ParagraphSmall style={{ margin: 0 }}>{props.description}</ParagraphSmall><br></br><ParagraphMedium style={{ margin: 0 }}><i>&#8377; &nbsp;</i>{Number(props.price)/100}</ParagraphMedium></>)
}

const MenuItemCard = ({ name, description, price, imageId, showImage }) => {
  console.log(price);
  return (
    <>
      <MessageCard
        heading={name}
        paragraph={<CardContent description={description} price={price} />}
        buttonLabel="I want it"
        onClick={() => alert("Clicked 🙂")}
        overrides={{ Root: { style: { border: "none" } } }}
       
        image={{
          src: IMAGE_CDN_URL + imageId,
          backgroundPosition: 'center',
          layout: IMAGE_LAYOUT.trailing,
          ariaLabel: 'A table with freshly prepared food',
        }}
      />
      <StyledDivider $size={SIZE.cell} />
    </>
  );
};

export default MenuItemCard;
