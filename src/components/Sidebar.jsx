import React from "react";
import {
  FaHome,
  FaList,
  FaUser,
  FaUserMd,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const sidebaritems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome size={18} />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <FaUsers size={18} />,
    },
    {
      name: "Doctors",
      path: "/dashboard/doctors",
      icon: <FaUserMd size={18} />,
    },
    {
      name: "Appointments",
      path: "/dashboard/appointments",
      icon: <FaList size={18} />,
    },
    {
      name: "Applications",
      path: "/dashboard/applications",
      icon: <FaEnvelope size={18} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser size={18} />,
    },
  ];

  return (
    <div className="sidebar-container">
      <div class="input">
        {sidebaritems.map((item) => (
          <NavLink className="value" to={item.path}>
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
