import { MessageCard, IMAGE_LAYOUT } from "baseui/message-card";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../config";
import { ParagraphSmall, ParagraphMedium } from "baseui/typography";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { clearAllItems } from "../../utils/cartSlice";
import {
  DisplayLarge,
  DisplaySmall,
  DisplayXSmall,
  ParagraphXSmall,
  HeadingSmall,
} from "baseui/typography";
import { useStyletron } from "baseui";
import { StyledDivider, SIZE } from "baseui/divider";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import Check from "baseui/icon/check";
import Delete from 'baseui/icon/delete'

const Cart = () => {
  const [css, theme] = useStyletron();

  const cartItems = useSelector((store) => store.cart.items); //Only get what you need, not get all all the store.
  //It may cause the performance issues. Because when store update the ur all components will update
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearAllItems());
  };
  return (
    <>
      <div className="container-restaurant-menu">
        <div>
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: theme.sizing.scale800,
            })}
          >
            <DisplayXSmall>{cartItems[0]?.restaurantName}</DisplayXSmall>

            <Button
              kind={KIND.secondary}
              size={SIZE.mini}
              shape={SHAPE.pill}
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </Button>
          </div>

          <StyledDivider $size={SIZE.module} />
        </div>

        <HeadingSmall>Your items</HeadingSmall>

        {cartItems.map((item) => {
          return (
            <ListItem
              key={item?.id}
              endEnhancer={() => (
                <>
                  <Button shape="round" size="compact" kind="secondary">
                    <Check />
                  </Button>
                  <div style={{ width: "18px" }} />
                  <Button shape="round" size="compact" kind="secondary">
                    <Delete />
                  </Button>
                </>
              )}
            >
              <ListItemLabel>
                <p>{item?.name}</p>
                <p>
                  <i>&#8377; &nbsp;</i>
                  {item?.price / 100}
                </p>
              </ListItemLabel>
            </ListItem>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
