import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {

  const [message, setMessage ] = useState("Hello!");
  return <MyContext.Provider value={{message, setMessage}}>{children}</MyContext.Provider>;
};
