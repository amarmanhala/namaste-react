import React from "react";

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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button>Login</button>
      <button>Sign in</button>
    </header>
  );
}
