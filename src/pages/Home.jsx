import React from "react";
import Navbar from "../components/navbar";
import Welcome from "../components/Welcome";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Loader from "../components/unitcomponents/Loader";

function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default Home;
