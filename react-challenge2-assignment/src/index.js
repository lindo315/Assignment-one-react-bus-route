import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitProvider } from "./TransitContext";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import AvailableRoutes from "./AvailableRoutes";
import RouteInfo from "./RouteInfo";
import TicketPurchase from "./TicketPurchase";
import Confirmation from "./Confirmation";
import "./index.css";
import "./App.css";

function App() {
  return (
    <TransitProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routes" element={<AvailableRoutes />} />
          <Route path="/route/:id" element={<RouteInfo />} />
          <Route path="/purchase" element={<TicketPurchase />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </TransitProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
