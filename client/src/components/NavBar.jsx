import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { logout } from "../store/slices/authSlice";
import "./nav.scss";

export default function NavBar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto gap-2">
              <li className="nav-item active">
                <Link className="link" to="/?cat=art">
                  <h6>ART</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/?cat=science">
                  <h6>Science</h6>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="link" to="/?cat=tech">
                  <h6>tech</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/?cat=cinema">
                  <h6>Cinema</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/?cat=design">
                  <h6>Design</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/?cat=food">
                  <h6>Food</h6>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row justify-content-end align-items-center gap-3">
            {user ? <span> {user} </span> : null}
            <span onClick={handleLogout}>Logout</span>
            <Link to="write" className="write">
              Write
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
