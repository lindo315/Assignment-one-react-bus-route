// Importing necessary dependencies from React and React Router
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransitContext } from "./TransitContext";

// Defining the functional component AvailableRoutes
function AvailableRoutes() {
  // We get the routes data from the TransitContext script using useContext hook
  const { routes } = useContext(TransitContext);
  // Using this imported hook from React Router to navigate between different routes
  const navigate = useNavigate();

  // Handling the click event on a route card (was gonna do buttons but decided to use a navbar - with links)
  function handleRouteClick(route) {
    // Here we navigating to the detailed view of the clicked route using its id (buttons would've been lame - so I decided to make the whole route a clickable component)
    navigate(`/route/${route.id}`);
  }

  // Rendering the actual component (shop)
  return (
    <div className="available">
      <div className="route-available1">
        {/* Title for the section */}
        <h1>Available Routes</h1>
        <div className="route-available">
          {/* Using the map array property to map (loop?) through the routes array and rendering each route card */}
          {routes.map((route) => (
            <div
              className="route-card"
              key={route.id} // Each route card has its own unique key
              onClick={() => handleRouteClick(route)} // Clicked route has this event handler for the route card
            >
              {/* Props part for all the route details */}
              <h3 className="title">{route.title}</h3>
              <p className="description">{route.description}</p>
              <p className="info">Duration: {route.duration}</p>
              <p className="info">Stops: {route.stops}</p>
              <p className="info">Price: ${route.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Exporting this component as default
export default AvailableRoutes;
