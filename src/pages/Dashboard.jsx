import React from "react";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import AdminApplications from "../components/AdminApplications";
import AdminDoctors from "../components/AdminDoctors";
import AdminAppointments from "../components/AdminAppointments";

import "../styles/dashboard.css";
function Dashboard({ type }) {
  const sidecontainer = {
    users: <Users />,
    applications: <AdminApplications />,
    doctors: <AdminDoctors />,
    appointments: <AdminAppointments />,
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="relative w-[100vw] h-[100vh]">{sidecontainer[type]}</div>
    </div>
  );
}

export default Dashboard;
