import React from "react";
import Flipcard from "./unitcomponents/flipcard";
import { useSelector } from "react-redux";
import "../styles/welcome.css";
const Welcome = () => {
  const isDark = useSelector((state) => state.root.isDark);
  return (
    <section className={isDark ? "welcome dark" : "welcome light"}>
      <Flipcard />
      <div className="welcome-img">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww"
          }
          alt="welcome"
        />
      </div>
    </section>
  );
};

export default Welcome;
