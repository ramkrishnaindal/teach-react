//useContext example?
import React, { useState, createContext } from "react";
export const MyContext = createContext();
export default function ParentComponent({ children }) {
  const [counter, setCounter] = useState(0);

  // Create an object containing both the value and the setter
  const contextValue = { counter, setCounter };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
