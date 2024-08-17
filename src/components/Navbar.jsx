import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { jwtDecode } from "jwt-decode";
import ThemeSwitch from "./unitcomponents/ThemeSwitch";
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
    "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

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
              <NavLink to={"/dashboard/users"}>Dashboard</NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
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
              <span className="btn" onClick={logoutFunc}>
                Logout
              </span>
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
