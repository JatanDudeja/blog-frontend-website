import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
