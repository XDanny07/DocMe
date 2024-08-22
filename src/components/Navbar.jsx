import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { jwtDecode } from "jwt-decode";
import ThemeSwitch from "./unitcomponents/ThemeSwitch";
import { FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";
import "../styles/common.css";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDark = useSelector((state) => state.root.isDark);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : ""
  );

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    navigate("/login");
  };
  const navlinkclass =
    "relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

  return (
    <header className={isDark ? "dark" : "light"}>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to={"/"} className="nav-logo-a">
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;DocMe&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;DocMe&nbsp;
              </span>
            </button>
          </NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink className={navlinkclass} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navlinkclass} to={"/doctors"}>
              Doctors
            </NavLink>
          </li>
          <li>
            <ThemeSwitch />
          </li>
          {token && user.isAdmin && (
            <li>
              <NavLink className={navlinkclass} to={"/dashboard/users"}>
                Dashboard
              </NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
              <li>
                <NavLink className={navlinkclass} to={"/appointments"}>
                  Appointments
                </NavLink>
              </li>
              <li>
                <NavLink className={navlinkclass} to={"/notifications"}>
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink className={navlinkclass} to={"/applyfordoctor"}>
                  Apply for doctor
                </NavLink>
              </li>
              <li>
                <HashLink className={navlinkclass} to={"/#contact"}>
                  Contact Us
                </HashLink>
              </li>
            </>
          )}
          {!token ? (
            <>
              <li>
                <button className="authbtn">
                  <NavLink to={"/login"}>Login</NavLink>
                </button>
              </li>
              <li>
                <button className="authbtn">
                  <NavLink to={"/register"}>Register</NavLink>
                </button>
              </li>
            </>
          ) : (
            <li>
              <div className="navbtn-container">
                <button
                  className="logout-btn bg-primary"
                  onClick={() => navigate("/profile")}
                >
                  <div className="sign">
                    <FaUserCircle />
                  </div>
                  <div className="text">Profile</div>
                </button>
                <button className="logout-btn bg-[red]" onClick={logoutFunc}>
                  <div className="sign">
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="text">Logout</div>
                </button>
              </div>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
