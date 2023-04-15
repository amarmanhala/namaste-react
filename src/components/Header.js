import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="logo"></div>
    </div>
  );
};

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/contact"><li>Contact us</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link>
          <li>Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Sign in</button>
    </header>
  );
}
