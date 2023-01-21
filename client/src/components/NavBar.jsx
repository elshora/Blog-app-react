import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">logo</div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="/?cat=tech">
            <h6>tech</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>
          <span>Mahmoud</span>
          <span>Logout</span>
          <Link to="write" className="write">
            Write
          </Link>
        </div>
      </div>
    </div>
  );
}
