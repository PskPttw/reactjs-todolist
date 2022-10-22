import React, { useState } from "react";

export const FormContext = React.createContext();

export const FormContextProvider = ({ children }) => {
  const [formToggle, setFormToggle] = useState(false);

  return (
    <FormContext.Provider value= {{ formToggle, setFormToggle }}>
      { children }
    </FormContext.Provider>
  )
}