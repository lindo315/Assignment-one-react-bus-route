// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className="brand-link">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/routes" className="nav-link">
            <span>Shop</span>
          </Link>
        </li>
        <li>
          <Link to="/purchase" className="nav-link">
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
