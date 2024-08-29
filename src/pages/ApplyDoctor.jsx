import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/register.css";

axios.defaults.baseURL = "http://localhost:5000/";

function ApplyDoctor() {
  const [details, setDetails] = useState({
    specialization: "",
    experience: "",
    fees: "",
  });
  const isDark = useSelector((state) => state.root.isDark);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post(
          "/doctor/applyfordoctor",
          {
            details,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Application sent successfully",
          error: "Unable to send application",
          loading: "Sending application...",
        }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    return setDetails({
      ...details,
      [name]: value,
    });
  };
  return (
    <div>
      <ToastContainer position="top-center" />
      <div
        className={`h-[100vh] px-[2rem] py-[4rem] ${isDark ? "darkbg" : ""}`}
      >
        <div className="register-container">
          <div className="heading">Apply For Doctor</div>
          <form onSubmit={handleSubmit} className="form">
            <input
              required={true}
              className="input"
              type="text"
              name="specialization"
              id="specialization"
              onChange={inputChange}
              placeholder="Specialization"
            />
            <input
              required={true}
              className="input"
              type="number"
              onWheel={(e) => {
                e.target.blur();
              }}
              name="experience"
              id="experience"
              onChange={inputChange}
              placeholder="Experience (Years)"
            />
            <input
              required={true}
              className="input"
              type="number"
              onWheel={(e) => {
                e.target.blur();
              }}
              name="fees"
              id="fees"
              onChange={inputChange}
              placeholder="Fees (INR)"
            />

            <input className="login-button" type="submit" value="Apply" />
          </form>

          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ApplyDoctor;
