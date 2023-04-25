import { Context } from "../context/context";
import { useState } from "react";
import PropTypes from "prop-types";

export const ContextProvider = ({ children }) => {
  const [clearTheme, setClearTheme] = useState(false);
  const [language, setLanguage] = useState("en");

  const context = {
    clearTheme: clearTheme,
    setClearTheme: setClearTheme,
    language: language,
    setLanguage: setLanguage,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
