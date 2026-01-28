import React from "react";
import "../styles/components/navbar.scss";
import Icon from "./Icon";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="/Group.svg" alt="Lendsqr" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button className="search-btn">
            <Icon src="/icons/search.svg" size={14} />
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#" className="docs-link">
          Docs
        </a>
        <div className="notification">
          <Icon src="/icons/bell.svg" size={20} />
        </div>
        <div className="user-profile">
          <div className="avatar">
            <Icon src="/avatar.png" size={48} style={{ borderRadius: "50%" }} />
          </div>
          <span className="username">Adedeji</span>
          <img
            src="/icons/chevron-down.svg"
            alt="chevron-down"
            width={14}
            height={14}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
