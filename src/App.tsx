import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />

      <Route
        path="/users/:id"
        element={
          <Layout>
            <UserDetails />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
