import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (!user?.email) {
    return <Navigate to="/login" replace></Navigate>;
  }
  if (user.email) {
    <Navigate to="/profile" replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
