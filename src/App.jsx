import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// <button className="relative overflow-hidden bg-transparent text-center uppercase text-base transition-[0.3s] z-[1] text-[#17C3B2] px-[1.8em] py-[0.8em] border-2 border-solid border-[#17C3B2] before:content-[''] before:w-0 before:h-[300%] before:absolute before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:transition-[0.5s] before:duration-[ease] before:block before:z-[-1] before:left-2/4 before:top-2/4 hover:before:w-[105%] hover:text-[#111] before:bg-[#17c3b2]">
//   HELLO
// </button>

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
