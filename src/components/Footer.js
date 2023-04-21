import { DisplayMedium, DisplaySmall } from "baseui/typography";
import React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { Link } from "react-router-dom";
import { StyledLink } from "baseui/link";


const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ marginTop: "4rem" }}>
        <DisplaySmall color={"white"}>Mom's Kitchen</DisplaySmall>
      </div>
      <div>

        <ul>
          <li><StyledLink>
          <Link className="footer-link" to="/">
                Home
              </Link>
          </StyledLink>
          
          </li>

          <li>
          <Link className="footer-link" to="/about">
                About us
              </Link>
          </li>
          <li>
          <Link className="footer-link" to="/contact">  
                Contact
              </Link>
          </li>
        </ul>
        <HeaderNavigation>
          <StyledNavigationList $align={ALIGN.center}>
            <StyledNavigationItem >
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
          </StyledNavigationList>
        </HeaderNavigation>
      </div>
    </footer>
  );
};

export default Footer;
