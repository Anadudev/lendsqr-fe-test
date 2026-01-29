import React from "react";
import "../styles/pages/dashboard.scss";
import StatsRow from "../components/StatsRow";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">Dashboard</h1>

      <StatsRow />

      <div className="placeholder-content">
        <p>Welcome to the Lendsqr Admin Dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
