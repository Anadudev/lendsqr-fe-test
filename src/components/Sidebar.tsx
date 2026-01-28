import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/sidebar.scss";
import Icon from "./Icon";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="switch-org">
        <Icon src="/icons/briefcase.svg" size={16} />
        <span>Switch Organization</span>
        <Icon src="/icons/chevron-down-thin.svg" size={14} />
      </div>

      <div className="sidebar-group">
        <NavLink to="/dashboard" className="sidebar-item dashboard-link">
          <Icon src="/icons/home.svg" size={16} />
          <span>Dashboard</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <p className="section-title">CUSTOMERS</p>
        <NavLink to="/users" className="sidebar-item">
          <Icon src="/icons/users.svg" size={16} />
          <span>Users</span>
        </NavLink>
        <div className="sidebar-item">
          <Icon src="/icons/users-round.svg" size={16} />
          <span>Guarantors</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/money-bag.svg" size={16} />
          <span>Loans</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/handshake.svg" size={16} />
          <span>Decision Models</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/piggy-bank.svg" size={16} />
          <span>Savings</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/hand-coins.svg" size={16} />
          <span>Loan Requests</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/person-check.svg" size={16} />
          <span>Whitelist</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/user-x.svg" size={16} />
          <span>Karma</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-title">BUSINESSES</p>
        <div className="sidebar-item">
          <Icon src="/icons/briefcase-inactive.svg" size={16} />
          <span>Organization</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/hand-coins-inactive.svg" size={16} />
          <span>Loan Products</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/bank-inactive.svg" size={16} />
          <span>Savings Products</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/fees-inactive.svg" size={16} />
          <span>Fees and Charges</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/transactions-inactive.svg" size={16} />
          <span>Transactions</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/services-inactive.svg" size={16} />
          <span>Services</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/service-account-inactive.svg" size={16} />
          <span>Service Account</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/settlements-inactive.svg" size={16} />
          <span>Settlements</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/reports-inactive.svg" size={16} />
          <span>Reports</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-title">SETTINGS</p>
        <div className="sidebar-item">
          <Icon src="/icons/settings-inactive.svg" size={16} />
          <span>Preferences</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/fees-pricing-inactive.svg" size={16} />
          <span>Fees and Pricing</span>
        </div>
        <div className="sidebar-item">
          <Icon src="/icons/audit-logs-inactive.svg" size={16} />
          <span>Audit Logs</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
