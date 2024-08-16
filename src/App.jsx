import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Welcome />
      <AboutUs />
    </BrowserRouter>
  );
}

export default App;
