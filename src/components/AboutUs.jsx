import React from "react";
import { useSelector } from "react-redux";
import "../styles/aboutus.css";
const AboutUs = () => {
  const isDark = useSelector((state) => state.root.isDark);
  return (
    <>
      <section
        className={isDark ? "about-container dark" : "about-container light"}
      >
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="about-img">
            <img
              src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww"
              alt="about"
            />
          </div>
          <div className="about-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tenetur doloremque molestias repellat minus asperiores
              in aperiam dolor, quaerat praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus, repudiandae! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident
              quibusdam doloremque ex? Officia atque ab dolore? Tempore totam
              non ea!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
