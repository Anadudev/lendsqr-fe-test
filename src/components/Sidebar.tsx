import React from "react";
import { NavLink } from "react-router-dom";
import {
  Users,
  Briefcase,
  Home,
  UsersRound,
  HandCoins,
  PiggyBank,
  BadgePercent,
  Handshake,
  Settings,
  FileText,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import "../styles/components/sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="switch-org">
        <Briefcase size={16} />
        <span>Switch Organization</span>
        <ChevronDown size={14} />
      </div>

      <div className="sidebar-group">
        <NavLink to="/dashboard" className="sidebar-item dashboard-link">
          <Home size={16} />
          <span>Dashboard</span>
        </NavLink>
      </div>

      <div className="sidebar-section">
        <p className="section-title">CUSTOMERS</p>
        <NavLink to="/users" className="sidebar-item">
          <Users size={16} />
          <span>Users</span>
        </NavLink>
        <div className="sidebar-item">
          <UsersRound size={16} />
          <span>Guarantors</span>
        </div>
        <div className="sidebar-item">
          <HandCoins size={16} />
          <span>Loans</span>
        </div>
        <div className="sidebar-item">
          <Handshake size={16} />
          <span>Decision Models</span>
        </div>
        <div className="sidebar-item">
          <PiggyBank size={16} />
          <span>Savings</span>
        </div>
        <div className="sidebar-item">
          <HandCoins size={16} />
          <span>Loan Requests</span>
        </div>
        <div className="sidebar-item">
          <Handshake size={16} />
          <span>Whitelist</span>
        </div>
        <div className="sidebar-item">
          <UsersRound size={16} />
          <span>Karma</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-title">BUSINESSES</p>
        <div className="sidebar-item">
          <Briefcase size={16} />
          <span>Organization</span>
        </div>
        <div className="sidebar-item">
          <HandCoins size={16} />
          <span>Loan Products</span>
        </div>
        <div className="sidebar-item">
          <PiggyBank size={16} />
          <span>Savings Products</span>
        </div>
        <div className="sidebar-item">
          <HandCoins size={16} />
          <span>Fees and Charges</span>
        </div>
        <div className="sidebar-item">
          <FileText size={16} />
          <span>Transactions</span>
        </div>
        <div className="sidebar-item">
          <LayoutDashboard size={16} />
          <span>Services</span>
        </div>
        <div className="sidebar-item">
          <Settings size={16} />
          <span>Service Account</span>
        </div>
        <div className="sidebar-item">
          <FileText size={16} />
          <span>Settlements</span>
        </div>
        <div className="sidebar-item">
          <HandCoins size={16} />
          <span>Reports</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-title">SETTINGS</p>
        <div className="sidebar-item">
          <Settings size={16} />
          <span>Preferences</span>
        </div>
        <div className="sidebar-item">
          <BadgePercent size={16} />
          <span>Fees and Pricing</span>
        </div>
        <div className="sidebar-item">
          <FileText size={16} />
          <span>Audit Logs</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
