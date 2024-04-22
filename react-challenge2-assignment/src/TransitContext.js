import React, { createContext, useState } from "react";
import mockData from "./mockData.json";

// Creating a new context object
export const TransitContext = createContext();

// Define a provider component for the TransitContext - with the help of AI since I had trouble figuring out how to structure this entire component. So in terms of the structure (skeleton) for the cart process , I referred to ChatGPT
export function TransitProvider({ children }) {
  // Initialize state variables for routes and cart using our mock data
  const [routes] = useState(mockData);
  const [cart, setCart] = useState([]);

  // Function to add a route to cart
  const addToCart = (route) => {
    setCart([...cart, { ...route, ticketCount: 1 }]);
  };

  // Function to remove a route from cart
  const removeFromCart = (routeId) => {
    setCart(cart.filter((route) => route.id !== routeId));
  };

  // Function to update ticket count for a route in the cart
  const updateCount = (routeId, newCount) => {
    setCart(
      cart.map((route) =>
        route.id === routeId ? { ...route, ticketCount: newCount } : route
      )
    );
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Rendering the provider component with the context values we have
  return (
    <TransitContext.Provider
      value={{
        routes,
        cart,
        addToCart,
        removeFromCart,
        updateCount,
        clearCart,
      }}
    >
      {children}
    </TransitContext.Provider>
  );
}
