import React, { useEffect, useState } from "react";
import { RESTAURANTS } from "../src/config";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurandData();
  }, []);

  const getRestaurandData = async () => {
    try {
      const data = await fetch(RESTAURANTS);
      const json = await data.json();
      //use optional chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    catch(error) {
      console.log(error)
    }
  };

  return restaurants;
};

export default useRestaurants;
