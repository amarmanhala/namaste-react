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
    <header className="w-full h-[100px] px-14 flex flex-row justify-between items-center">
      <Logo />
      
        <ul className="flex flex-row">
        <Link to="/" className="ml-4">
            <li>Home</li>
          </Link>
          <Link to="/cart" className="ml-4">
            <li>
              <button className="bg-black text-white px-4 py-2">Card</button>
            </li>
          </Link>
          <Link to="/login" className="ml-4">
            <li>Login</li>
          </Link>
          <Link to="/signup" className="ml-4">
            <li>Sign Up</li>
            </Link>
          <Link to="/about" className="ml-4">
            <li>About us</li>
          </Link>
          <Link to="/contact" className="ml-4">
            <li>Contact us</li>
          </Link>
          <Link to="/instamart" className="ml-4">
            <li>Instamart</li>
          </Link>
         
         
        </ul>
      
    </header>
  );
}
