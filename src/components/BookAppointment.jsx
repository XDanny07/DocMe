import React, { useEffect, useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

const BookAppointment = ({ setModalOpen, ele }) => {
  const [formDetails, setFormDetails] = useState({
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().substring(0, 5),
  });
  useEffect(() => {
    console.log(new Date().toISOString().split("T")[0]);
  }, []);
  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name == "date") {
      var ndate = new Date(value).getDate();
      var currdate = new Date().getDate();
      if (ndate < currdate) {
        toast.error("Select a valid date");
        return;
      }
    } else {
      var ntime = new Date(formDetails.date + " " + value);
      var ctime = new Date();
      if (ntime < ctime) {
        toast.error("Select a valid time");
        return;
      }
    }
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post(
          "/appointment/bookappointment",
          {
            doctorId: ele?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          loading: "Booking appointment...",
          success: "Appointment booked successfully",
          error: "Unable to book appointment",
        }
      );
      setModalOpen(false);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal_content">
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className="close-btn"
          />
          <div className="register-container">
            <div className="heading">Book Appointment</div>
            <form onSubmit={bookAppointment} className="bookform">
              <input
                required={true}
                className="input"
                type="date"
                name="date"
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                required={true}
                className="input"
                type="time"
                name="time"
                value={formDetails.time}
                onChange={inputChange}
              />
              <input className="login-button" type="submit" value="Book" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
