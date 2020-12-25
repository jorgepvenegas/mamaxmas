import { useState } from "react";
import AppContext from "../context/app";

const ContextWrapper = ({ children }) => {
  const [activeId, setActiveId] = useState(1);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const questionLimit = 9; // hardcoded
  return (
    <AppContext.Provider
      value={{
        isFinished,
        setIsFinished,
        isLoggedIn,
        setIsLoggedIn,
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
