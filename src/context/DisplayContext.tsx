'use client';
import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface DisplayContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  bgImage: string | null;
  setBgImage: (img: string | null) => void;
}

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

export function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [bgImage, setBgImage] = useState<string | null>(null);

  return (
    <DisplayContext.Provider value={{ theme, setTheme, bgImage, setBgImage }}>
      {children}
    </DisplayContext.Provider>
  );
}

export function useDisplay() {
  const ctx = useContext(DisplayContext);
  if (!ctx) throw new Error("useDisplay must be used within a DisplayProvider");
  return ctx;
}
