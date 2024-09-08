import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/unitcomponents/DocCard";
import fetchData from "../helper/apiCall";
import "../styles/doctors.css";
import { useSelector } from "react-redux";
import Loader from "../components/unitcomponents/Loader";
import { ToastContainer } from "react-toastify";
function Doctors() {
  const isDark = useSelector((state) => state.root.isDark);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllDocs = async () => {
    setLoading(true);
    const data = await fetchData(`/doctor/getalldoctors`);
    setDoctors(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);
  return (
    <div className="docpage">
      <ToastContainer position="top-center" />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className={`${isDark ? "dark" : "light"} min-h-[100vh]`}>
          <h1 className="doctors-heading">Our Doctors</h1>
          <div className="doctors-container">
            {doctors.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;
