import React, { createContext, useState } from "react";
import Products from "./components/Products";
type AppContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);
export default function App() {
  const [title, setTitle] = useState<string>("Demo Context");
  return (
    <AppContext.Provider value={{ title, setTitle }}>
      <Products />
    </AppContext.Provider>
  );
}
