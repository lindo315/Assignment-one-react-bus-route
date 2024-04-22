import React from "react";

// This page wasn't necissary but I wanted to mess around with route navigation
function HomePage() {
  return (
    <div className="home-container">
      <h1>Public Transit Route Planner</h1>
      <p className="intro">
        Welcome to the Route Planner site. To find available routes, click{" "}
        <span style={{ color: "#ff9800" }}>Shop </span>
        to find available tickets!
      </p>
    </div>
  );
}

export default HomePage;
