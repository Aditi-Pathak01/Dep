"use client";
import React, { createContext } from "react";
export const MyContext = createContext();
const context = ({children}) => {
  const num = 11
  return <MyContext.Provider value={num}>{children}</MyContext.Provider>;
};
export default context;