import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/notification.css";
// import Empty from "../components/Empty";
// import Footer from "../components/Footer";
import axios from "axios";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import Loader from "../components/unitcomponents/Loader";
import "../styles/user.css";

axios.defaults.baseURL = "http://localhost:5000";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const isDark = useSelector((state) => state.root.isDark);
  const [loading, setLoading] = useState(false);

  const getAllNotif = async (e) => {
    try {
      setLoading(true);
      const temp = await fetchData(`/notification/getallnotifs`);
      setLoading(false);
      setNotifications(temp);
    } catch (error) {}
  };

  useEffect(() => {
    getAllNotif();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <section className={`notif-section ${isDark ? "dark" : ""}`}>
          <h2 className="page-heading">Your Notifications</h2>

          {notifications.length > 0 ? (
            <div className="notifications">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Content</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications?.map((ele, i) => {
                    return (
                      <tr key={ele?._id}>
                        <td>{i + 1}</td>
                        <td>{ele?.content}</td>
                        <td>{ele?.updatedAt.split("T")[0]}</td>
                        <td>{ele?.updatedAt.split("T")[1].split(".")[0]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p>EMPTYYY</p>
          )}
        </section>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Notifications;
