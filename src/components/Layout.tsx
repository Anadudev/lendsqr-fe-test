import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/components/layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
