import React from "react";
import { Users as UsersIcon } from "lucide-react";
import "../styles/pages/dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">Dashboard</h1>

      <div className="stats-cards">
        <div className="card">
          <div className="icon-wrapper users">
            <UsersIcon size={20} />
          </div>
          <p className="label">TOTAL USERS</p>
          <p className="value">2,453</p>
        </div>
        <div className="card">
          <div className="icon-wrapper active">
            <UsersIcon size={20} />
          </div>
          <p className="label">ACTIVE USERS</p>
          <p className="value">2,453</p>
        </div>
        <div className="card">
          <div className="icon-wrapper loan">
            <UsersIcon size={20} />
          </div>
          <p className="label">USERS WITH LOANS</p>
          <p className="value">12,453</p>
        </div>
        <div className="card">
          <div className="icon-wrapper savings">
            <UsersIcon size={20} />
          </div>
          <p className="label">USERS WITH SAVINGS</p>
          <p className="value">102,453</p>
        </div>
      </div>

      <div className="placeholder-content">
        <p>Welcome to the Lendsqr Admin Dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
