import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-header">ERP DASHBOARD</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">HOME</Link>
        </li>
        <li>
          <Link to="/new-role" className="sidebar-link">ADD NEW ROLE</Link>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
