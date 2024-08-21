import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Protected, Public, Admin } from "./middleware/route";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Loader from "./components/unitcomponents/Loader";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home"));
const Doctors = lazy(() => import("./pages/Doctors"));

function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route
            path="/register"
            element={
              <Public>
                <Register />
              </Public>
            }
          ></Route>
          <Route path="/doctors" Component={Doctors}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
