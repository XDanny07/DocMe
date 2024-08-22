import React from "react";
import Sidebar from "../components/Sidebar";
function Dashboard({ type }) {
  return (
    <div>
      <Sidebar />
      <div>{type}</div>
    </div>
  );
}

export default Dashboard;
