import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, KIND, SIZE, SHAPE } from "baseui/button";
import { clearAllItems, removeItem } from "../../utils/cartSlice";
import {
  DisplayLarge,
  DisplaySmall,
  DisplayXSmall,
  ParagraphXSmall,
  HeadingSmall,
  HeadingMedium,
} from "baseui/typography";
import { useStyletron } from "baseui";
import { StyledDivider } from "baseui/divider";
import Check from "baseui/icon/check";
import Delete from "baseui/icon/delete";
import { ListItem, ListItemLabel } from "baseui/list";
import {
  SnackbarProvider,
  useSnackbar,
  DURATION,
} from 'baseui/snackbar';


const Cart = () => {
  const [css, theme] = useStyletron();
  const {enqueue} = useSnackbar();



  const cartItems = useSelector((store) => store.cart.items); //Only get what you need, not get all all the store.
  //It may cause the performance issues. Because when store update the ur all components will update
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearAllItems());
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    enqueue({
      message: 'Item removed from cart',
      startEnhancer: ({size}) => <Check size={size} />,
    })
  };

  const getSubTotal = () => {
    let subTotal = 0;
    cartItems.map((item) => {
      subTotal = item.price + subTotal;
    });
    return subTotal / 100;
  };

  const getTotal = () => {
    let subTotal = getSubTotal();
    let total = subTotal + 40;
    return total;
  };

  return (
    <>
    
    <SnackbarProvider>
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

          <StyledDivider />
        </div>

        <HeadingSmall>Your items</HeadingSmall>

        {cartItems.map((item) => {
          return (
            <ListItem
              key={item?.id}
              endEnhancer={() => (
                <>
                  <div style={{ width: "18px" }} />
                  <Button
                    shape="round"
                    size="compact"
                    kind="secondary"
                    onClick={() => handleRemoveItem(item?.id)}
                  >
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

        <div>
          <HeadingSmall>Bill Details</HeadingSmall>
        </div>
        <ul>
          <ListItem
            endEnhancer={() => (
              <ListItemLabel>
                {" "}
                <i>&#8377; &nbsp;</i>
                {getSubTotal()}
              </ListItemLabel>
            )}
          >
            <ListItemLabel>Subtotal</ListItemLabel>
          </ListItem>

          <ListItem
            endEnhancer={() => (
              <ListItemLabel>
                <i>&#8377; &nbsp;</i>
                {40}
              </ListItemLabel>
            )}
          >
            <ListItemLabel>Delivery Fee</ListItemLabel>
          </ListItem>

          <ListItem
            endEnhancer={() => (
              <ListItemLabel>
                <i>&#8377; &nbsp;</i>
                {getTotal(getSubTotal())}
              </ListItemLabel>
            )}
          >
            <ListItemLabel>
              <b>Total</b>
            </ListItemLabel>
          </ListItem>

        </ul>
        <div style={{ marginBottom: "60px", marginTop: "60px" }}>
        <Button>Continue to payment</Button>
        </div>
        
      </div>
    </SnackbarProvider>
     
    </>
  );
};

export default Cart;
