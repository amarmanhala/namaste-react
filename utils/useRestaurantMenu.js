import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../src/config";

const useRestaurantMenu = (resID) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantDetail(resID);
  }, []);

  const getRestaurantDetail = async (resID) => {
    try {
      const data = await fetch(RESTAURANT_MENU + resID);
      const json = await data.json();
      setRestaurantMenu(json);
    }
    catch(error) {
      console.log(error)
    }
    
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
