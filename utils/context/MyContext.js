import React, { createContext, useState } from "react";


export const MyContext = createContext();


export const  MyContextProvider =({children}) => {
    const [contact, setContact] = useState({})
    const changeContact = (props) => {
setContact(props)
    }
  return (
    <MyContext.Provider value={{ contact, changeContact }}>
      {children}
    </MyContext.Provider>
  );
}

