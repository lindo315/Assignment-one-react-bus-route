import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransitContext } from "./TransitContext";

// Defining the TicketPurchase component
function TicketPurchase() {
  // Get access to cart state and related functions from the TransitContext script using useContext hook
  const { cart, removeFromCart, updateCount, clearCart } =
    useContext(TransitContext);
  // Using the useState hook to manage the checkout process state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  // Function to handle removing a route from the cart
  function removeFunction(routeId) {
    removeFromCart(routeId);
  }

  // Function to handle changing the ticket count for a route
  function changeCount(routeId, count) {
    updateCount(routeId, count);
  }

  // Function to handle the checkout process
  function checkoutFunction() {
    // Setting isCheckingOut to true to show processing
    setIsCheckingOut(true);
    // Simulating a delay and then clearing the cart and navigating to confirmation page (I used this loading idea for effects)
    setTimeout(() => {
      clearCart();
      navigate("/confirmation");
    }, 2000);
  }

  // Calculating the total amount for the purchase
  const totalPrice = cart.reduce(
    (total, route) => total + route.price * route.ticketCount,
    0
  );

  // Rendering the component
  return (
    <div className="ticket-purchase-container">
      <div className="ticket-purchase-info">
        <h1 className="ticket-purchase">Ticket Purchase:</h1>
        {/* Checking if the cart is empty */}
        {cart.length === 0 ? (
          // If it's empty, display this message
          <p>No tickets selected for purchase.</p>
        ) : (
          // If cart has items, display them and provide an option for checkout
          <div>
            {/* Mapping through cart items and displaying details */}
            {cart.map((route) => (
              <div key={route.id}>
                <h3 className="title">{route.title}</h3>
                <p className="purchase-info">Price: ${route.price}</p>
                {/* Input field to change number of tickets */}
                <div className="ticket-number-container">
                  <p className="purchase-info">Tickets: </p>
                  <input
                    className="input-ticket"
                    type="number"
                    min="1"
                    value={route.ticketCount}
                    onChange={(e) =>
                      changeCount(route.id, parseInt(e.target.value))
                    }
                  />
                  {/* Button to remove route from cart */}
                  <button
                    className="remove-btn"
                    onClick={() => removeFunction(route.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {/* Total purchase */}
            <p className="purchase-info total-purchase">
              Total Price: ${totalPrice}
            </p>
            {/* Button for checkout (but with conditional text based on checkout state) */}
            <button className="buy-btn" onClick={checkoutFunction}>
              {isCheckingOut ? "Processing..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TicketPurchase;
