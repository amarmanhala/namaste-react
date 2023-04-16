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
    <header className="w-full h-[100px] px-14 flex flex-row bg-orange-500 justify-between items-center">
      <Logo />
      <div className="nav-items">
        <ul className="flex flex-row">
        <Link to="/card"><li>Cart</li></Link>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/contact"><li>Contact us</li></Link>
          <Link to="/instamart"><li>Instamart</li></Link>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/signup"><li>Sign Up</li></Link>
        </ul>
      </div>
    </header>
  );
}
