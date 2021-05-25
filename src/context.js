import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSideBar] = useState(false);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setSideBar(true);
    console.log('hi true');
  };
  const closeSidebar = () => {
    setSideBar(false);
    console.log('hi false');
  };

  //   const openModal = () => {
  //     setIsModalOpen(true);
  //   };
  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        // isModalOpen,
        // openModal,
        // closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
