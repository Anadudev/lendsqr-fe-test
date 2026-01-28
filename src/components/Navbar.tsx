import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";
import "../styles/components/navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/logo.svg" alt="Lendsqr" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn">
            <Search size={14} color="#white" />
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#" className="docs-link">
          Docs
        </a>
        <div className="notification">
          <Bell size={20} color="#213F7D" />
        </div>
        <div className="user-profile">
          <div className="avatar">
            <img src="/avatar.png" alt="User Avatar" />
          </div>
          <span className="username">Adedeji</span>
          <ChevronDown size={14} color="#213F7D" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
