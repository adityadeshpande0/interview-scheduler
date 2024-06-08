import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute() {
  let isAuthenticated = localStorage.getItem("authToken");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
