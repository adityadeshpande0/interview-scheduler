import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-6" href="/login">
          Interview Scheduler
        </a>
        <div className="d-flex">
          <button href="#" class="btn btn-light m-1 btn-sm">
            Register
          </button>
          <button href="#" class="btn btn-light m-1 btn-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
