import React from "react";
import { useSelector } from "react-redux";
import "../styles/aboutus.css";
import Statistics from "./unitcomponents/Statistics";

const AboutUs = () => {
  const isDark = useSelector((state) => state.root.isDark);
  return (
    <>
      <section
        className={isDark ? "about-container dark" : "about-container light"}
      >
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <Statistics />
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
