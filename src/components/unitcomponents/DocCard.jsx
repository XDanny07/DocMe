import React, { useState } from "react";
import styled from "styled-components";
import BookAppointment from "../BookAppointment";
function DocCard({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };
  console.log(data);
  return (
    <DCard>
      <div class="card">
        <div class="card-border-top"></div>
        <div class="img">
          <img
            src="https://th.bing.com/th/id/OIP.wbZBGL1zXorjfgj5GLWnmwHaLH?w=133&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          />
        </div>
        <span>{data.userId.firstname + " " + data.userId.lastname}</span>
        <p class="job">{data?.specialization}</p>
        <div className="doc-details">
          <p>
            <strong>Experience : </strong>
            {data?.experience} years
          </p>
          <p>
            <strong>Consultation Fee's : </strong>
            {data?.fees}
          </p>
          <p>
            <strong>Mobile : </strong>
            {data.userId.mobile || "NA"}
          </p>
        </div>
        <button onClick={handleModal}>Book</button>
      </div>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={data} />}
    </DCard>
  );
}

export default DocCard;

const DCard = styled.div`
  /* From Uiverse.io by alexmaracinaru */
  .card {
    width: 285px;
    height: 381px;
    background: #3405a3;
    border-radius: 15px;
    box-shadow: 1px 5px 60px 0px #100a886b;
    transition: all 0.3s;
    color: white;
  }
  .doc-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card .card-border-top {
    width: 60%;
    height: 3%;
    background: #6b64f3;
    margin: auto;
    border-radius: 0px 0px 15px 15px;
  }

  .card span {
    font-weight: 600;
    color: white;
    text-align: center;
    display: block;
    padding-top: 10px;
    font-size: 16px;
  }

  .card .job {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 12px;
  }

  .card .img {
    width: 70px;
    height: 80px;
    background: #6b64f3;
    border-radius: 15px;
    margin: auto;
    margin-top: 25px;
    overflow: hidden;
  }

  .card button {
    padding: 8px 25px;
    display: block;
    margin: auto;
    border-radius: 8px;
    border: none;
    margin-top: 30px;
    background: #6b64f3;
    color: white;
    font-weight: 600;
  }

  .card button:hover {
    background: #534bf3;
  }
`;
