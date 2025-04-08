import { useContext, createContext, useState } from "react";

const ModalContext = createContext(null);

function ModalContextProvider({ children }) {
  const [activeModal, setActiveModal] = useState("");

  return (
    <ModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalContextProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useModalContext, ModalContextProvider };
