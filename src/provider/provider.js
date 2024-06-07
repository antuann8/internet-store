import { createContext, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLeftActive, setIsLeftActive] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        slideIndex,
        setSlideIndex,
        isLeftActive,
        setIsLeftActive,
        isRightActive,
        setIsRightActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
