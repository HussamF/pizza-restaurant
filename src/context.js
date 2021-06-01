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
  //Add Item
  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  //Increace Decreace Qty
  const updateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  //Remove item from cart
  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  //Remove all items from cart
  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  //Payment
  const [order, setOrder] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMsg(error.data.error.message);
    }
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
        updateCartQty,
        removeFromCart,
        emptyCart,
        order,
        handleCaptureCheckout,
        errorMsg,
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
