import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button, SHAPE } from "baseui/button";
import { NavigationItem } from "baseui/header-navigation/styled-components";
import {AppNavBar, setItemActive} from 'baseui/app-nav-bar';
import getScreenSize from "../../utils/getScreenSize";
import {NotificationCircle, COLOR} from 'baseui/badge';
import { useSelector } from "react-redux";





const Logo = () => {
  return (
    <div>
      <div className="logo" data-testid="logo"></div>
    </div>
  );
};

export default function Header() {

  const getDevice = getScreenSize();

  const cartItems = useSelector(store => store.cart.items);  //Only get what you need, not get all all the store. 
                                                              //It may cause the performance issues. Because when store update the ur all components will update

  console.log("Carts", cartItems);

  return (
    <>


      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem><Logo /></StyledNavigationItem>
        </StyledNavigationList>

        { getDevice === "desktop" ? (
          <StyledNavigationList $align={ALIGN.center}>
          <NavigationItem>
          hjh
          </NavigationItem>
         
        </StyledNavigationList>
        ) : null }
        
        

       
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Link className="link" to="/">
              Home
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link className="link" to="/about">
              About
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
           <Link to="/cart"> <Button shape={SHAPE.pill}>Cart&nbsp;&nbsp;<NotificationCircle content={cartItems.length} /></Button></Link>

          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>
    </>
  );
}
