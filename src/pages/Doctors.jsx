import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/unitcomponents/DocCard";
import "../styles/doctors.css";
import { useSelector } from "react-redux";
function Doctors() {
  const isDark = useSelector((state) => state.root.isDark);
  return (
    <div>
      <Navbar />
      <div className={`${isDark ? "dark" : ""} min-h-[100vh]`}>
        <h1 className="doctors-heading">Our Doctors</h1>
        <div className="doctors-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Doctors;
