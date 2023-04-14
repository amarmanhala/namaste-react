import React, { useState, useEffect } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Destroyed.......")
    }

  }, []);

  return (
    <div>
      <h2>Profile - {name}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Profile;
