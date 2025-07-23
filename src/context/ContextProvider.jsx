import { createContext } from "react";
import { useTranslation } from "react-i18next";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Context.Provider value={{ handleChange, t }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
