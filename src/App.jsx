import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Welcome />
    </BrowserRouter>
  );
}

export default App;
