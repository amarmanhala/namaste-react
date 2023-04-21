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




const Logo = () => {
  return (
    <div>
      <div className="logo"></div>
    </div>
  );
};

export default function Header() {

  const getDevice = getScreenSize();
console.log(getDevice);
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
            <Button shape={SHAPE.pill}>Cart&nbsp;&nbsp;<NotificationCircle content={0} />
</Button>
          </StyledNavigationItem>
        </StyledNavigationList>
      </HeaderNavigation>
    </>
  );
}
