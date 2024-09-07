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
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ApplyDoctor = lazy(() => import("./pages/ApplyDoctor"));
const Notifications = lazy(() => import("./pages/Notifications"));

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
          <Route
            path="/applyfordoctor"
            element={
              <Protected>
                <ApplyDoctor />
              </Protected>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <Admin>
                <Dashboard type={"users"} />
              </Admin>
            }
          />
          <Route
            path="/dashboard/doctors"
            element={
              <Admin>
                <Dashboard type={"doctors"} />
              </Admin>
            }
          />
          <Route
            path="/notifications"
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path="/dashboard/appointments"
            element={
              <Protected>
                <Dashboard type={"appointments"} />
              </Protected>
            }
          />
          <Route
            path="/dashboard/applications"
            element={
              <Protected>
                <Dashboard type={"applications"} />
              </Protected>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
