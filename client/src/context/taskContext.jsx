import React, { useState } from "react";

export const TaskContext = React.createContext();

export const TaskContextProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <TaskContext.Provider value= {{ currentId, setCurrentId }}>
      { children }
    </TaskContext.Provider>
  )
}