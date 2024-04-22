import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TransitContext } from "./TransitContext";

// RouteInfo defined
function RouteInfo() {
  // Grabbing the ID parameter from the URL. It's like finding the key to a secret door
  const { id } = useParams();
  // Borrowing some data and functions from the TransitContext script
  const { routes, addToCart } = useContext(TransitContext);
  const navigate = useNavigate();

  // Here we searching for the whatever mysterious route that matches the ID we found earlier (had to use AI for this bit)
  const route = routes.find((r) => r.id === id);

  // If route (path) not found, we input an error message [ERROR HANDLING💀]
  if (!route) {
    return <div>Route not found?</div>;
  }

  // Purchase a ticket time, and how to navigate through different routes too
  function purchaseFunction() {
    // Add the chosen route to the cart, simple enough
    addToCart(route);
    // Engage the navigation spell to take use to the purchase page
    navigate("/purchase");
  }

  // Back button if user changes their mind (like they wanna buy another ticket)
  function backFunction() {
    navigate("/routes");
  }

  // Now for 'detailed' route information
  return (
    <div className="route-info-container">
      <div className="route-info">
        <h1 className="title">{route.title}</h1>
        <p className="description">{route.description}</p>
        <p className="info">Duration: {route.duration}</p>
        <p className="info">Stops: {route.stops}</p>
        <p className="info">Price: ${route.price}</p>

        {/* Buttons for navigating back and for purchasing*/}
        <div className="button-container">
          {/* The back button: already defined, takes us back to buy another ticket if we want */}
          <button className="back-btn" onClick={backFunction}>
            Back
          </button>
          {/* The purchase button: takes us to the confimation page */}
          <button className="buy-btn" onClick={purchaseFunction}>
            Purchase Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteInfo;
