import { useContext, createContext, useState } from "react";

const MobileMenuContext = createContext(null);

function MobileMenuContextProvider({ children }) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState("");

  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpened: mobileMenuOpened, setMobileMenuOpened: setMobileMenuOpened }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

function useMobileMenuContext() {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenuContext must be used within a MobileMenuContextProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useMobileMenuContext, MobileMenuContextProvider };
