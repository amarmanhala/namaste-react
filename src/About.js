import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./components/ProfileClass";
import Profile from "./components/Profile";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This is Namaste JS chapter - 07 🚀</p>
      <Outlet />
      <Profile name="Amar" />
      <ProfileClass name="Amar" xyz="ABCD" />
    </div>
  );
};
export default About;
