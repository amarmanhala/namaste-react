import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "amarpreet singh",
    age: 31,
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
