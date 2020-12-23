import { useState } from "react";
import AppContext from "../context/app";

const ContextWrapper = ({ children }) => {
  const [activeId, setActiveId] = useState(1);

  return (
    <AppContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextWrapper;