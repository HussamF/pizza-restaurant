import React, { useState, useContext, useEffect } from 'react';
import { commerce } from './lib/commerce';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //SideBar
  const [isSidebarOpen, setSideBar] = useState(false);

  const openSidebar = () => {
    setSideBar(true);
    console.log('hi true');
  };
  const closeSidebar = () => {
    setSideBar(false);
    console.log('hi false');
  };

  //Product Ecommerce fetch products
  const [menuItems, setMenuItems] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setMenuItems(data);
  };

  //Fetch Cart

  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        menuItems,
        addToCart,
        cart,
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
