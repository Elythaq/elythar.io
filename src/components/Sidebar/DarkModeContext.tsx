import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type DarkModeContextProps = {
  dark: boolean;
  setDark: (val: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextProps>({
  dark: false,
  setDark: () => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
