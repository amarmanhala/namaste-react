import React from "react";
import { MessageCard, IMAGE_LAYOUT } from "baseui/message-card";
import { StyledDivider, SIZE } from "baseui/divider";
import { ParagraphMedium, ParagraphSmall } from "baseui/typography";
import { IMAGE_CDN_URL } from "../config";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const CardContent = (props) => {
  return (<><ParagraphSmall style={{ margin: 0 }}>{props.description}</ParagraphSmall><br></br><ParagraphMedium style={{ margin: 0 }}><i>&#8377; &nbsp;</i>{Number(props.price)/100}</ParagraphMedium></>)
}

const MenuItemCard = (props) => {

  const dispatch = useDispatch();

  const handleAddItem = (props) => {
    console.log("Dispatched...")
    dispatch(addItem(props));
  }
  
  return (
    <>
      <MessageCard
        heading={props.name}
        paragraph={<CardContent description={props.description} price={props.price} />}
        buttonLabel="I want it"
        onClick={() => handleAddItem(props)}
        overrides={{ Root: { style: { borderWidth: 0 } } }}
    
        image={{
          src: IMAGE_CDN_URL + props.imageId,
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
