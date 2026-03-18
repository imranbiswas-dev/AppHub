import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [install, setInstall] = useState([]);

  // add to Install
  const onInstall = (app) => {
    const exists = install.find((item) => item.id === app.id);

    if (exists) return;

    setInstall((prevInstall) => [...prevInstall, app]);
  };


  // Uninstalled
  const onUninstall = (id) =>{
    setInstall(prevInstall=>prevInstall.filter(app=>app.id !== id))
  } 

  return (
    <AppContext.Provider value={{ onInstall, install , onUninstall}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
