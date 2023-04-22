import { MessageCard } from "baseui/message-card";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); //Only get what you need, not get all all the store.
  //It may cause the performance issues. Because when store update the ur all components will update
  return (
    <>
      <div className="container-restaurant-menu">
        <div>Cart Items</div>
        {cartItems.map((item) => {
          return (
            <MessageCard
              heading={item.name}
              paragraph={
                <CardContent
                  description={item.description}
                  price={item.price}
                />
              }
              buttonLabel="I want it"
              overrides={{ Root: { style: { borderWidth: 0 } } }}
              image={{
                src: IMAGE_CDN_URL + item.imageId,
                backgroundPosition: "center",
                layout: IMAGE_LAYOUT.trailing,
                ariaLabel: "A table with freshly prepared food",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
