import React from "react";
import Logout from "./Logout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Welcome to the dashboard! You are logged in.</p>

        <Logout />
      </div>
    </div>
  );
}

export default Dashboard;
