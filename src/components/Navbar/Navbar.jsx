import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const authToken = sessionStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
    if(location.pathname==='/login' || location.pathname==='/'){
      sessionStorage.removeItem("authToken")
    }
  }, [location]);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-6" to="/">
          Interview Scheduler
        </Link>
        <div className="d-flex">
          {isLoggedIn ? (
            <div>
              <Link
                className="btn btn-light m-1 btn-sm mx-2"
                to="/schedule-interview"
              >
                Schedule Interview
              </Link>
              <Link className="btn btn-light m-1 btn-sm" to="/user-requests">
                Your Requests
              </Link>
              <button
                className="btn btn-primary "
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <Link className="btn btn-light m-1 btn-sm mx-3" to="/">
                Register
              </Link>
              <Link className="btn btn-light m-1 btn-sm" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
