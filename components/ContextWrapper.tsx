import { useState } from "react";
import AppContext from "../context/app";

const ContextWrapper = ({ children }) => {

  const [activeId, setActiveId] = useState(1);
  const questionLimit = 9; // hardcoded
  return (
    <AppContext.Provider value={{ activeId, setActiveId, questionLimit }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextWrapper;