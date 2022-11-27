import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AuthContext } from "../../Contexts/AuthProvider";

const AdminRoute = ({ children }) => {
  const { loadedUser } = useContext(AuthContext);
  const location = useLocation();

  if (loadedUser.length === 0) {
    return <Loading></Loading>;
  }

  if (loadedUser.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default AdminRoute;
