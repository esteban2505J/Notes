import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { userAuth } from "./context/AuthContext";

export default function ProtectedRoute() {
  const { loading, isAuthenticated } = userAuth();
  // console.log(loading, isAuthenticated);

  if (loading) return <h1>Loading...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet></Outlet>;
}
