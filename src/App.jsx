import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Welcome />
      <AboutUs />
      <ContactUs />
    </BrowserRouter>
  );
}

export default App;
