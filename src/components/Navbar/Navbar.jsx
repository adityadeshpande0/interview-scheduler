import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-6" to="/">
          Interview Scheduler
        </Link>
        <div className="d-flex">
          <Link class="btn btn-light m-1 btn-sm" to="/">
            Register
          </Link>
          <Link class="btn btn-light m-1 btn-sm" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
