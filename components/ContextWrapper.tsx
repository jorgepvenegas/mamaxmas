import { useState } from "react";
import AppContext from "../context/app";

const ContextWrapper = ({ children }) => {
  const [activeId, setActiveId] = useState(1);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState(null);

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
        selectedFrame,
        setSelectedFrame,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
