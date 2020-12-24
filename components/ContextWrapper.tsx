import { useState } from "react";
import AppContext from "../context/app";

const ContextWrapper = ({ children }) => {
  const [activeId, setActiveId] = useState(9);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  console.log("selectedPhotos", selectedPhotos);
  const questionLimit = 9; // hardcoded
  return (
    <AppContext.Provider
      value={{
        activeId,
        setActiveId,
        questionLimit,
        setSelectedPhotos,
        selectedPhotos,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
